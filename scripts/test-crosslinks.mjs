#!/usr/bin/env node
// Tests do not store or require chat transcripts.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import process from 'node:process';
const root=process.cwd();
function run(cwd,file,...params){
 const r=spawnSync(process.execPath,[path.join(root,'scripts',file),...params],{cwd,encoding:'utf8'});
 assert.equal(r.status,0,file+' '+params.join(' ')+'\n'+r.stdout+'\n'+r.stderr);
 return r.stdout;
}
run(root,'validate-crosslinks.mjs');
const live=JSON.parse(run(root,'search-wiki.mjs','--query','프로젝트 구조','--json'));
assert.ok(live.results.some(r=>r.id==='pododala-project-structure'));
assert.equal(live.scope,'published_only');
assert.ok(live.results.every(r=>r.published));
// Isolated documents keep search regression coverage when real articles change.
const workspace=fs.mkdtempSync(path.join(os.tmpdir(),'project-search-'));
try {
 fs.mkdirSync(path.join(workspace,'wiki'),{recursive:true});
 fs.mkdirSync(path.join(workspace,'editorial','crosslinks'),{recursive:true});
 const docs=[
  {id:'sample-a',title:'기술 변화',publish:true,related:[]},
  {id:'sample-b',title:'기술 변화와 수행',publish:true,related:[]},
  {id:'sample-hidden',title:'기술 변화 비공개',publish:false,related:[]}
 ].map(d=>({...d,path:'wiki/'+d.id+'.md',aliases:[],tags:['기술'],summary:d.title}));
 for(const d of docs)fs.writeFileSync(path.join(workspace,d.path),'# '+d.title+'\n\n## 분석\n\n기술 변화와 수행의 조건.\n');
 fs.writeFileSync(path.join(workspace,'wiki','manifest.json'),JSON.stringify({documents:docs}));
 const proposal={id:'link-20261102-test',created_on:'2026-11-02',from:{doc_id:'sample-a',section:'분석'},to:{doc_id:'sample-b',section:'분석'},type:'analogy',status:'proposed',basis:'editorial_hypothesis',hypothesis:'비교 가능성',reason:'기술 변화의 조건 비교',limitation:'동일성을 확정하지 않음'};
 fs.writeFileSync(path.join(workspace,'editorial','crosslinks','index.json'),JSON.stringify({version:1,proposals:[proposal]}));
 run(workspace,'validate-crosslinks.mjs');
 const direct=JSON.parse(run(workspace,'search-wiki.mjs','--query','기술 변화','--json'));
 assert.ok(direct.results.length===2&&direct.results.every(r=>r.published));
 const indirect=JSON.parse(run(workspace,'search-wiki.mjs','--related','sample-a','--all','--novel','--json'));
 const candidate=indirect.results.find(r=>r.id==='sample-b');
 assert.ok(candidate,'Indirect candidate missing');
 assert.equal(candidate.direct_link,false);
 assert.ok(candidate.semantic_proposal);
 assert.ok(indirect.results.some(r=>r.id==='sample-hidden'));
 assert.equal(indirect.requires_model_review,true);
 console.log('OK: project search, publication filters, indirect candidates and editorial safeguards');
} finally {
 fs.rmSync(workspace,{recursive:true,force:true});
}
