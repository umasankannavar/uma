const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({
        message: "Access denied",
      });
    }

    const userData = jwt.verify(token, process.env.JWT_SECRET);

    req.user = userData;
    next();
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal server error",
    });
  }
};

module.exports = {protect};
