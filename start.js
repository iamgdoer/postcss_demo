const express = require('express');
const app = express();

app.use(express.static("dest")).listen(8080);