const express = require("express");
const app = express();
const routes = require("./src/routes/index")

const AppError = require("./src/util/appError");

app.use(express.json());
app.use(routes);

app.use((error, request, response, next) => {
  if(error instanceof AppError) {
    return response.status(error.status).json({
      status: "error",
      message: error.message
    })
  };
  
  return response.status(500).json({
    error: "error",
    message: "Internal server error"
  })
});


const PORT = 3000;
app.listen(PORT, () => {console.log("It's Running")});