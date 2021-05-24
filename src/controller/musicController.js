const Music = require("../models/musicSchema")

const musicService = require("../service/musicService");


const getMusic = async (req, res) => {
    try {
        const getMusic = await musicService.getMusicsService();
        res.status(200).send(getMusic);
    } catch (err) {
        console.error(err);
        res.status(400).send(err)
    }
};

const postMusic = async (req, res) => {
    console.log(req.file);
    try {
        const host = "http://" + req.headers.host + "/public/uploads/" + req.file.filename.replace(" ", "_");
        console.log(host);
        req.body['musicUrl'] = host;
        const getNewMusic = await musicService.postMusicsService(req.body);
        res.status(201).send(getNewMusic);
    } catch (err) {
        console.error(err);
        res.status(400).send(err)
    }
};

const updateMusic = async (req, res) => {
    try {
        if (req.file !== undefined) {
            const host = "http://" + req.headers.host + "/public/uploads/" + req.file.filename.replace(" ", "_");
            console.log(host);
            req.body['musicUrl'] = host;
        }
        const getNewMusic = await musicService.updateMusicsService(req.body);
        res.status(201).send(getNewMusic);
    } catch (err) {
        res.status(400).send(err)
    }
};

const deleteMusic = async (req, res) => {
    try {
        const getNewMusic = await musicService.deleteMusicsService(req.body);
        return res.send(getNewMusic);
    } catch (err) {
        return res.send(err)
    }
};

module.exports = {
    getMusics: getMusic,
    postMusics: postMusic,
    updateMusics: updateMusic,
    deleteMusics: deleteMusic,
};