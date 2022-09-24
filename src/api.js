const express = require("express");
const serverless = require("serverless-http");
const path = require('path');

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.resolve('./dist/frontpage.html'));
    //res.sendFile(path.resolve("./dist/frontpage.html"));
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);