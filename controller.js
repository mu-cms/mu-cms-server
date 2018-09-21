const path = require('path');
const mix = require('@es-git/mix').default;
const FsRepo = require('@es-git/node-fs-repo').default;
const zlibMixin = require('@es-git/zlib-mixin').default;
const objectMixin = require('@es-git/object-mixin').default;
const pathToObjectMixin = require('@es-git/path-to-object-mixin').default;

const Repo = mix(FsRepo)
  .with(zlibMixin)
  .with(objectMixin)
  .with(pathToObjectMixin);

const repo = new Repo(path.join(__dirname, ".git"));

exports.loadByPath = async (req) => {
  return repo.loadTextByPath(req.params.tree, req.params[0]);
}