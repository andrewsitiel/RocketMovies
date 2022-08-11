class AppError {
  message;
  status;

  error(message, status = 400){
    this.message = message;
    this.status = status;
  };

}

module.exports= AppError;