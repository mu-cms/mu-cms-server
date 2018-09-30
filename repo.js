const { default: mix } = require('@es-git/mix');
const { default: FsRepo } = require('@es-git/node-fs-repo');
const { default: zlibMixin } = require('@es-git/zlib-mixin');
const { default: objectMixin } = require('@es-git/object-mixin');
const { default: loadAsMixin } = require('@es-git/load-as-mixin');

exports.FsRepo = mix(FsRepo)
  .with(zlibMixin)
  .with(objectMixin)
  .with(loadAsMixin);