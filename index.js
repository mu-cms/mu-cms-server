const express = require('express');
const router = require('./router');
const app = express();
const PORT = 8080;

app.use(router).listen(PORT, () => console.log(`app started on ${PORT}`));