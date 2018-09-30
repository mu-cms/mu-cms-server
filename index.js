const express = require('express');
const git = require('@mu-cms/express-es-git');
const { FsRepo } = require('./repo');
const { PORT, PATH } = require('./const');

const repo = new FsRepo(PATH);

express()
  .use(git(repo))
  .listen(PORT, () => console.log(`app started on ${PORT}`));