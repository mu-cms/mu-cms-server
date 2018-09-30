const express = require('express');
const git = require('@mu-cms/express-es-git');
const { FsRepo, MemRepo } = require('./repo');
const { PORT, PATH, URL, REFSPEC } = require('./const');

let repo;
if (PATH) {
  console.log(`using fs repo at ${PATH}`);
  repo = new FsRepo(PATH);
}
else {
  console.log('using mem repo');
  repo = new MemRepo();
}

express()
  .use(git(repo))
  .listen(PORT, async () => {
    if (URL) {
      console.log(`fetching ${REFSPEC || 'default refspec'} from ${URL}`)
      await repo.fetch(URL, REFSPEC);
    }
    console.log(`app started on ${PORT}`);
  });