const express = require('express');
const git = require('@mu-cms/express-es-git');
const { default: mix } = require('@es-git/mix');
const { default: FsRepo } = require('@es-git/node-fs-repo');
const { default: zlibMixin } = require('@es-git/zlib-mixin');
const { default: objectMixin } = require('@es-git/object-mixin');
const { default: loadAsMixin } = require('@es-git/load-as-mixin');
const { PORT, PATH } = require('./const');

const Repo = mix(FsRepo)
  .with(zlibMixin)
  .with(objectMixin)
  .with(loadAsMixin);

const repo = new Repo(PATH);

express()
  .use(git(repo))
  .listen(PORT, () => console.log(`app started on ${PORT}`));