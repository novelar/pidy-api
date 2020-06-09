const multer = require("multer");
const sharp = require("sharp");
const fs = require("fs");

const db = require("../models");
const Image = db.image;

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    } else {
        cb("Please upload only images.", false);
    }
};

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
});

const uploadFiles = upload.array("images", 10);

const uploadImages = (req, res, next) => {
    uploadFiles(req, res, err => {
        if (err instanceof multer.MulterError) {
            if (err.code === "LIMIT_UNEXPECTED_FILE") {
                return res.send("Too many files to upload.");
            }
        } else if (err) {
            console.log(err);
            return res.send(err);
        }

        next();
    });
};

const resizeImages = async (req, res, next) => {
    try {
        console.log('resizeImages');
        if (!req.files) return next();

        req.body.images = [];
        await Promise.all(
            req.files.map(async file => {
                const filename = file.originalname.replace(/\..+$/, "");
                const newFilename = `pidy-${filename}-${Date.now()}.jpeg`;

                await sharp(file.buffer)
                    .resize(150)
                    .toFormat("jpeg")
                    .jpeg({ quality: 75 })
                    .toFile(__basedir + `/resources/uploads/${newFilename}`);

                await Image.create({
                    type: file.mimetype,
                    name: file.originalname,
                    data: fs.readFileSync(
                        __basedir + `/resources/uploads/${newFilename}`
                    )
                });

                req.body.images.push(newFilename);
            })
        );

        next();
    } catch (error) {
        console.log(error);
        return res.send(`Error when trying upload images: ${error}`);
    }
};

const getResult = async (req, res) => {
    if (req.body.images.length <= 0) {
        return res.send(`You must select at least 1 image.`);
    }

    const images = req.body.images
        .map(image => "" + image + "")
        .join("");

    return res.send(`Images were uploaded:${images}`);
};

module.exports = {
    uploadImages: uploadImages,
    resizeImages: resizeImages,
    getResult: getResult
};