const express = require('express');
const router = new express.Router();
const musicController = require('../controller/musicController');
// const music = require("../middleware/upload")
const upload = require('../middleware/upload')

let routes = app => {
    router.get('/getMusic', musicController.getMusics);
    router.post('/postMusic', upload.single('musicFile'), musicController.postMusics);
    router.post('/updateMusic', upload.single('musicFile'), musicController.updateMusics);
    router.post('/deleteMusic', musicController.deleteMusics);
    return app.use('/api', router)
};

module.exports = routes;