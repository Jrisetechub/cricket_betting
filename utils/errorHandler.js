let globalFunction = require('./globalFunction');
const CONSTANTS = require('./constants');
const apiErrorRes = globalFunction.apiErrorRes;

function errorHandler(err, req, res, next) {
    if (typeof (err) === 'string') {
        return apiErrorRes(req, res, "Eroor");
    }
    // if (req.body.isDeleted) {
    //     return apiErrorRes(req, res, 'Your mobile number is deactivated from admin. Please contanct to support.', CONSTANTS.DATA_NULL, CONSTANTS.DEACTIVE_STATUS);
    // }
    if (err.name === 'UnauthorizedError') {
        return apiErrorRes(req, res, "Send valid token!!!");
    }
    return apiErrorRes(req, res, err.message);

}
module.exports = errorHandler;

