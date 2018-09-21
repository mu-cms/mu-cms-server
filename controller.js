const path = require('path');
const mix = require('@es-git/mix').default;
const FsRepo = require('@es-git/node-fs-repo').default;
const zlibMixin = require('@es-git/zlib-mixin').default;
const objectMixin = require('@es-git/object-mixin').default;
const loadAsMixin = require('@es-git/load-as-mixin').default;
const pathToObjectMixin = require('@es-git/path-to-object-mixin').default;

const Repo = mix(FsRepo)
  .with(zlibMixin)
  .with(objectMixin)
  .with(loadAsMixin)
  .with(pathToObjectMixin);

const PATH = path.join(__dirname, '.git');
const repo = new Repo(PATH);

exports.loadByPath = async (req, res) => {
  const { tree, path } = req.params;
  const result = await repo.loadTextByPath(tree, path);

  if (result) {
    res.send(result);
  }
  else {
    res.status(404).send(`Can't find ${tree}:${path}`);
  }
}

exports.loadByHash = async (req, res) => {
  const { blob } = req.params;
  const result = await repo.loadText(blob);

  if (result) {
    res.send(result);
  }
  else {
    res.status(404).send(`Can't find ${blob}`);
  }
}