const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = express();

app.use(cors());
app.use(router);

app.listen(8080, () => console.log('app started'));