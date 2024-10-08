const express = require('express');
const router = require('./routes/index.js')
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', router);

module.exports = app;