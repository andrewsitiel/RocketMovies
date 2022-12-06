require("express-async-errors");
require("dotenv/config");

const express = require("express");
const app = express();
const routes = require("./src/routes/index");

const { UPLOAD_FOLDER } = require("./src/config/upload");
const AppError = require("./src/util/appError");

const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(routes);

app.use("/files", express.static(UPLOAD_FOLDER));

app.use((error, request, response, next) => {
  if(error instanceof AppError) {
    return response.status(error.status).json({
      error: "error",
      message: error.message
    })
  };
  
  return response.status(500).json({
    error: "error",
    message: "Internal server error"
  })
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`It's Running on Port: ${PORT}`)});
