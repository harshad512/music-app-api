const mongoose = require('mongoose');

const musicSchema = mongoose.Schema({
    musicUrl: {
        type: String,
        unique: true,
        require: true
    },
    musicLanguage: {
        type: String,
        require: true
    },
    musicType: {
        type: String,
        require: true,
    },
    performedBy: {
        type: String,
        require: true
    },
    writtenBy: {
        type: String,
        require: true
    },
    producedBy: {
        type: String,
        require: true
    },
    source: {
        type: String,
        require: true
    }
});
const music = new mongoose.model('music', musicSchema);

module.exports = music;