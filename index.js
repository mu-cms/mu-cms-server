require('dotenv').config();

const express = require('express');
const git = require('@mu-cms/express-es-git');
const { FsRepo, MemRepo } = require('./repo');
const { PORT, GIT_PATH, GIT_URL, GIT_REFSPEC } = process.env;

let repo;
if (GIT_PATH) {
  console.log(`using fs repo at ${GIT_PATH}`);
  repo = new FsRepo(GIT_PATH);
}
else {
  console.log('using mem repo');
  repo = new MemRepo();
}

express()
  .use(git(repo))
  .listen(PORT, async () => {
    if (GIT_URL) {
      console.log(`fetching ${GIT_REFSPEC || 'default'} from ${GIT_URL}`);
      await repo.fetch(GIT_URL, GIT_REFSPEC, {
        progress: message => console.log(message)
      });
    }
    console.log(`app started on ${PORT}`);
  });
