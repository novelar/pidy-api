const sharp = require("sharp");

const path = require('path')
const fs = require('fs')

// const resizeImages = async (req, res, next) => {
//     if (!req.files) return next();

//     req.body.images = [];

//     await Promise.all(
//         req.files.map(async file => {

//             const newFilename = "pidy-" + Math.random().toString();

//             await sharp(file.buffer)
//                 .resize(640, 320)
//                 .toFormat("jpeg")
//                 .jpeg({ quality: 90 })
//                 .toFile(`upload/${newFilename}`);

//             req.body.images.push(newFilename);
//         })
//     );

//     next();
// };

const resize = async (req, res) => {
    console.log('resize', req.file);
    const {
        filename: image
    } = req.file;

    await sharp(req.file.path)
        .resize(500)
        .jpeg({
            quality: 50
        })
        .toFile(__basedir + "/resources/static/assets/uploads/" + req.file.filename);
    // .toFile(
    //     path.resolve(req.file.destination, 'resized', image)
    // );

    fs.unlinkSync(req.file.path)

    // sharp(file.buffer)
    //     .resize(640, 320)
    //     .toFormat("jpeg")
    //     .jpeg({
    //         quality: 50
    //     })
    //     .toBuffer()
    //     .then(() => {
    //         console.log("file");
    //         next();
    //     })
}

module.exports = resize;