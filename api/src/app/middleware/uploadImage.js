const multer = require("multer");

const imageFilter = (req, file, callback) => {
  console.log("imageFilter");
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback("Please upload only images.", false);
  }
};

var storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, __basedir + "/resources/static/assets/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-pidy-${file.originalname}`);
  },
});

var uploadFile = multer({ storage: storage, fileFilter: imageFilter });

module.exports = uploadFile;
