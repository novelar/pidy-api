const controller = require("../controllers/upload.controller");
const uploadImage = require("../middleware/uploadImage");
const resizeImage = require("../middleware/resizeImage");
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
    "/api/images/upload",
    [
      // authJwt.verifyToken,
      uploadImage.single("file"),
      resizeImage,
    ],
    controller.uploadFiles
  );
};

module.exports = routes;