const express = require("express");
const app = express();
const cf = require("./.config").cf;
const port = cf.PORT;
const index = require("./routes/index");

app.use('/', index)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

