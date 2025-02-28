const errorHandler = (err, req, res, next) => {
    res.json({
      status: "fail",
      message: err.message || "Internal server error",
    });
  };
  
  module.exports = {errorHandler};
  