const express = require("express");
const app = express();
const routes = require("./src/routes/index")

app.use(express.json());
app.use(routes);

const PORT = 3000
app.listen(PORT, () => {console.log("It's Running")})