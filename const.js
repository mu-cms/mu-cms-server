const path = require('path');

exports.PORT = 8080;
exports.PATH = path.join(__dirname, '.git');
exports.URL = 'https://github.com/mu-cms/mu-express.git';
exports.REFSPEC = 'refs/heads/*:refs/heads/*';