const express = require("express");
const path = require('path');

const app = express();

app.use(express.static("public"))

router.get("/", (req, res) => {
    res.sendFile(path.resolve("./public/frontpage.html"));
});

app.listen(process.env.PORT || 8080, () => {
    console.log("Listening on port 8080")
})