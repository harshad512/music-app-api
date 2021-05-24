const statusCodeMessage = {
    successJson: {
        status: 200,
        message: "Success",
    },
    createdJson: {
        status: 201,
        message: "Successfully created",
    },
    errorJson: {
        status: 500,
        message: "Error",
    },
    badRequestJson: {
        status: 400,
        message: "Bad Request",
    },
}
module.exports = statusCodeMessage;