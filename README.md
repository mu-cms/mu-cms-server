## Installation

```shell
npm install @mu-cms/mu-express
```

## Usage

Start the app

```shell
npm start
```

Update repository

```shell
curl -X POST http://127.0.0.1:8080/fetch -d 'url=https://github.com/mu-cms/mu-express.git' -d 'refs=refs/heads/*:refs/remotes/express/*'
```

Update refs

```shell
curl -X POST http://127.0.0.1:8080/refs -d 'refs=refs/heads/master:refs/remotes/express/master'
```

### Example

```javascript
const { PORT = 8080 } = process.env;
const express = require('express');
const git = require('@mu-cms/express-es-git');
const api = require('@mu-cms/express-es-git/api')(`http://localhost:${PORT}`);
const { MemRepo } = require('@mu-cms/mu-express/repo');

express()
  .use(express.urlencoded({ extended: true }))
  .use(git(new MemRepo()))
  .listen(PORT, async () => {
    await api.fetch('https://github.com/mu-cms/express-es-git.git', 'refs/heads/*:refs/remotes/express/*');
    await api.refs('refs/head/master:refs/remotes/express/master');
    console.log(`app started on port ${PORT}`);
  });
```
