module.exports = function (req, res, next) {
  res.locals.seo = {
    title: "Express-Framework",
    keywords: "Express、Nodejs",
    description: "Express-Framework to help build Node.js projects",
  };

  next();
};
