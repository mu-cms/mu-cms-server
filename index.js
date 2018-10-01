require('dotenv').config();

const express = require('express');
const git = require('@mu-cms/express-es-git');
const { FsRepo, MemRepo } = require('./repo');
const { PORT, GIT } = process.env;

let repo;
if (GIT) {
  console.log(`using fs repo at ${GIT}`);
  repo = new FsRepo(GIT);
}
else {
  console.log('using mem repo');
  repo = new MemRepo();
}

express()
  .use(express.urlencoded({ extended: true }))
  .use(git(repo))
  .listen(PORT, async () => console.log(`app started on ${PORT}`));
