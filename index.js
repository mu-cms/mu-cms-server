const express = require('express');
const router = require('./router');
const app = express();
const PORT = 8080;

app
  .use(router)
  .use((req, res) => {
    res.status(404).send(`Unable to locate that for you`);
  })
  .listen(PORT, () => console.log(`app started on ${PORT}`));