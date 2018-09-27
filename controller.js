const { default: mix } = require('@es-git/mix');
const { default: FsRepo } = require('@es-git/node-fs-repo');
const { default: zlibMixin } = require('@es-git/zlib-mixin');
const { default: objectMixin } = require('@es-git/object-mixin');
const { default: loadAsMixin } = require('@es-git/load-as-mixin');
const { default: pathToObjectMixin } = require('@es-git/path-to-object-mixin');
const { NEXT, PATH } = require('./const');

const Repo = mix(FsRepo)
  .with(zlibMixin)
  .with(objectMixin)
  .with(loadAsMixin)
  .with(pathToObjectMixin);

const repo = new Repo(PATH);

exports.loadByTree = async (req, res) => {
  const { tree, path } = req.params;
  const result = await repo.loadTextByPath(tree, path);

  if (result) {
    res.send(result);
  }
  else {
    return NEXT;
  }
}

exports.loadByText = async (req, res) => {
  const { blob } = req.params;
  const result = await repo.loadText(blob);

  if (result) {
    res.send(result);
  }
  else {
    return NEXT;
  }
}