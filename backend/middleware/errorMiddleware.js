/* 
  Here is the explanation for the code above:
  1. First we create a variable called statusCode and assign it to the value of res.statusCode. 
  If res.statusCode does not exist, then we set it to 500.
  2. Then we set the statusCode of res to statusCode using res.status(statusCode).
  3. Finally, we send a JSON response to the client containing the message property 
  that is set to the value of err.message and the stack property that is set to the value of err.stack. If we are in production, 
  then we set the stack property to null. 
*/
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = {
  errorHandler,
};
