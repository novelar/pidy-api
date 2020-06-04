const upload = require("../middleware/upload");

const {
  authJwt
} = require("../middleware");

let routes = (app) => {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );

    next();
  });

  app.post(
    "/multiple-upload",
    // authJwt.verifyToken,
    upload.uploadImages,
    upload.resizeImages,
    upload.getResult
  );
};

module.exports = routes;