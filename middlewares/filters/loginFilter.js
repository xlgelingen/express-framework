const JWT = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = function (req, res, next) {
  res.locals.isLogin = false;
  res.locals.userInfo = {};

  let token = req.cookies.web_token;
  if (token) {
    JWT.verify(token, JWT_SECRET, function (err, decoded) {
      if (!err) {
        res.locals.isLogin = true;
        res.locals.userInfo = {
          id: decoded.user_id,
        };
      }
      // 无论解密是否成功，都在此处调用 next()
      next();
    });
  } else {
    // 如果没有 token，直接调用 next()
    next();
  }
};
