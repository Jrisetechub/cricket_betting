const db = require('../../db'),
    bcrypt = require('bcrypt'),
    global_fun = require('../../utils/globalFunction'),
    CONSTANTS = require('../../utils/constants');
let User = db.User;
let resultdb = global_fun.resultdb;

let getUserByEmail = async (email) => {
    try {
        var user = await User.findOne({
            email: email
        });
        console.log("useruseruseruser  ",user);
        if (user === null) {
            return resultdb(CONSTANTS.NOT_FOUND, CONSTANTS.DATA_NULL)
        } else {
            return resultdb(CONSTANTS.SUCCESS, user)
        }
    } catch (error) {
        console.log(error);
        return resultdb(CONSTANTS.SERVER_ERROR, CONSTANTS.DATA_NULL)
    }
};
let getUserById = async (id) => {
    //logger.info('Enter get_user_by_id......', id.toString());
    try {
        var user = await User.findOne({
            _id: id.toString()
        });
        if (user === null) {
            return resultdb(CONSTANTS.NOT_FOUND, CONSTANTS.DATA_NULL)
        } else {
            return resultdb(CONSTANTS.SUCCESS, user)
        }
    } catch (error) {
        return resultdb(CONSTANTS.SERVER_ERROR, CONSTANTS.DATA_NULL)
    }
};
let findEmail = async (email) => {

    try {
        var user = await User.findOne({
            email: email
        });
        if (user === null) {
            return resultdb(CONSTANTS.NOT_FOUND, CONSTANTS.DATA_NULL)
        } else {
            return resultdb(CONSTANTS.SUCCESS, user)
        }
    } catch (error) {
        return resultdb(CONSTANTS.SERVER_ERROR, CONSTANTS.DATA_NULL)
    }
};
let saveUser = async (data) => {
    try {
        var testUser = new User(data);
        var responnse = await testUser.save();
        return resultdb(CONSTANTS.SUCCESS, responnse)
    } catch (error) {
        console.log("there are the catch error", error);

        if (error.code)
            return resultdb(error.code, CONSTANTS.DATA_NULL)
        return resultdb(CONSTANTS.SERVER_ERROR, CONSTANTS.DATA_NULL);
    }
};
let verifyEmailPassword = async (data) => {

    let userresponse = await findEmail(data.email);
    if (userresponse.data === null) {
        return resultdb(CONSTANTS.NOT_FOUND);
    } else if (userresponse.data.verificationStatus === false) {
        return resultdb(CONSTANTS.NOT_VERIFIED);
    } else {
        let verifypass = null;
        try {
            verifypass = await bcrypt.compare(data.password, userresponse.data.password);
        } catch (error) {
        }
        if (verifypass) {
            return resultdb(CONSTANTS.SUCCESS, userresponse.data);
        } else {
            return resultdb(CONSTANTS.ACCESS_DENIED, CONSTANTS.FALSE);
        }
    }
};
module.exports = {
    getUserByEmail: getUserByEmail,
    getUserById: getUserById,
    saveUser: saveUser,
    findEmail: findEmail,
    verifyEmailPassword: verifyEmailPassword,
};