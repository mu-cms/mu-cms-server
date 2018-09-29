const express = require('express');
const { default: mix } = require('@es-git/mix');
const { default: FsRepo } = require('@es-git/node-fs-repo');
const { default: zlibMixin } = require('@es-git/zlib-mixin');
const { default: objectMixin } = require('@es-git/object-mixin');
const { default: loadAsMixin } = require('@es-git/load-as-mixin');
const { default: pathToObjectMixin } = require('@es-git/path-to-object-mixin');
const { PORT, PATH } = require('./const');

const Repo = mix(FsRepo)
  .with(zlibMixin)
  .with(objectMixin)
  .with(loadAsMixin)
  .with(pathToObjectMixin);

express()
  .use(require('@mu-cms/express-es-git')(new Repo(PATH)))
  .listen(PORT, () => console.log(`app started on ${PORT}`));