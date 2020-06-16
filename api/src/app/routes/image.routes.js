const upload = require("../middleware/upload");

let routes = (app) => {
  app.post(
    "/multiple-upload",
    upload.uploadImages,
    upload.resizeImages,
    upload.getResult
  );
};

module.exports = routes;