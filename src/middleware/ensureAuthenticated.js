const AppError = require("../util/appError");
const authConfig = require("../config/jwt");
const { verify } = require("jsonwebtoken");

function ensureAuthenticated (request, response, next) {
  const authHeader = request.headers.authorization;
  
  if(!authHeader) {
    throw new AppError("JWT não informado", 401)
  }

  const [, token] = authHeader.split(" ");

  try {
    const {sub : user_id} = verify(token, authConfig.jwt.secret)

    request.user = {
      id: Number(user_id),
    }
    
    return next()
  } catch (error) {

    throw new AppError(error.message, 401)
  }
}

module.exports = ensureAuthenticated;