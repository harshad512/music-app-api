const music = require("../models/musicSchema")
const statusCodeMessage = require("../constant/statusCode");

const getMusicService = async () => {
    return new Promise(async (resolve, reject) => {
        await music.find({}, function (err, docs) {
            if (err) {
                statusCodeMessage.errorJson["error"] = err;
                return resolve(statusCodeMessage.errorJson);
            }
            else if (!docs || docs.length === 0) {
                statusCodeMessage.errorJson["message"] = "No data found";
                statusCodeMessage.errorJson["data"] = [];
                return resolve(statusCodeMessage.errorJson);
            }
            else {
                statusCodeMessage.successJson["data"] = docs;
                return resolve(statusCodeMessage.successJson);
            }
        })

    })
};

const postMusicService = async (body) => {
    return new Promise(async (resolve, reject) => {
        const models = new music(body);
        await models.validate(async function (err, data) {
            if (err) {
                return resolve(statusCodeMessage.errorJson);
            }
            else {
                await models.save(async function (err, data) {
                    if (err) {
                        statusCodeMessage.errorJson["message"] = "Data not Inseted";
                        statusCodeMessage.errorJson["error"] = err;
                        return resolve(statusCodeMessage.errorJson)
                    }
                    else {
                        statusCodeMessage.successJson["message"] = "Data Inserted Successfully";
                        return resolve(statusCodeMessage.successJson);
                    }
                })
            }
        })
    })
};

const updateMusicService = async (body) => {
    return new Promise(async (resolve, reject) => {
        const models = new music(body);
        await models.validate(async function (err, data) {
            if (err) {
                return resolve(statusCodeMessage.errorJson);
            }
            else {
                const query = { "_id": body._id };
                const update = {
                    "musicUrl": body.musicUrl,
                    "musicLanguage": body.musicLanguage,
                    "musicType": body.musicType,
                    "performedBy": body.performedBy,
                    "writtenBy": body.writtenBy,
                    "producedBy": body.producedBy,
                    "source": body.source,
                }
                await music.findOneAndUpdate(query, update, { useFindAndModify: false }, function (err, docs) {
                    if (err) {
                        statusCodeMessage.errorJson["message"] = "Data not Updated";
                        statusCodeMessage.errorJson["error"] = err;
                        return resolve(statusCodeMessage.errorJson)
                    }
                    else if (!docs || docs.length === 0) {
                        statusCodeMessage.errorJson["message"] = "Error in Updating Data";
                        statusCodeMessage.errorJson["error"] = err;
                        return resolve(statusCodeMessage.errorJson);
                    }
                    else {
                        statusCodeMessage.successJson["message"] = "Data Updated Successfully";
                        statusCodeMessage.successJson["data"] = docs;
                        return resolve(statusCodeMessage.successJson);
                    }
                })
            }
        })
    })
};

const deleteMusicService = async (body) => {
    return new Promise(async (resolve, reject) => {

        // const query = { "_id": body.id };
        const query = { "_id": body._id };
        console.log(query);
        await music.deleteOne(query, function (err, docs) {
            if (err) {
                statusCodeMessage.errorJson["message"] = "Data not deleted";
                statusCodeMessage.errorJson["error"] = err;
                return resolve(statusCodeMessage.errorJson)
            }
            else if (!docs || docs.length === 0) {
                statusCodeMessage.errorJson["message"] = "Error in deleting Data";
                statusCodeMessage.errorJson["error"] = err;
                return resolve(statusCodeMessage.errorJson);
            }
            else {
                statusCodeMessage.successJson["message"] = "Data deleted Successfully";
                statusCodeMessage.successJson["data"] = docs;
                return resolve(statusCodeMessage.successJson);
            }
        })

    })

};

module.exports = {
    getMusicsService: getMusicService,
    postMusicsService: postMusicService,
    updateMusicsService: updateMusicService,
    deleteMusicsService: deleteMusicService,

};

// module.exports ={getMusicsService,postMusicsService,updateMusicsService,deleteMusicsService};