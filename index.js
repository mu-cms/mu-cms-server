const express = require('express');
const router = require('./router');
const { PORT } = require('./const');

express()
  .use(router)
  .use((req, res) => {
    res.status(404).send(`unable to locate that for you`);
  })
  .listen(PORT, () => console.log(`app started on ${PORT}`));