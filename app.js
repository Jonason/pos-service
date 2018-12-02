'use strict';
const koa = require('koa');
const app = module.exports = new koa();
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const router = new Router();

app.use(bodyParser());

let pos = [{x:1, y:2}];

let set1 = new Set(['1,1']);

router.get('/map', async (ctx) => {
    ctx.response.body = {'pos': Array.from(set1)};
})

router.post('/map', async (ctx) => {
    const entry = ctx.request.body;
    set1.add(entry.v);
    ctx.response.status = 204; 
})

app.use(router.routes());

if (!module.parent) {
  app.listen(1338);
  console.log('listening on port 1338');
}

