const path = require('path');
const multer = require("multer");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads');
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}-${file.originalname}`);
    }
});


var uploadFile = multer({ storage: storage })
console.log(uploadFile);
module.exports = uploadFile;