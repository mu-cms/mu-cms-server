require('dotenv').config();

const { PORT = 8080, GIT_PATH, GIT_FETCH, GIT_SPECS = '', GIT_REFS } = process.env;
const express = require('express');
const git = require('@mu-cms/express-es-git');
const api = require('@mu-cms/express-es-git/api')(`http://localhost:${PORT}`);
const { FsRepo, MemRepo } = require('./repo');

let repo;
if (GIT_PATH) {
  console.log(`Using FS repo at ${GIT_PATH}`);
  repo = new FsRepo(GIT_PATH);
}
else {
  console.log('Using MEM repo');
  repo = new MemRepo();
}

express()
  .use(express.urlencoded({ extended: true }))
  .use(git(repo))
  .listen(PORT, async () => {
    if (GIT_FETCH) {
      await api.fetch(GIT_FETCH, ...GIT_SPECS.split(','));
    }
    if (GIT_REFS) {
      await api.refs(...GIT_REFS.split(','));
    }
    console.log(`App started on port ${PORT}`);
  });
