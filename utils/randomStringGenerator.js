let CONSTANTS = require("./constants");

function referral(length = CONSTANTS.REFERRAL_CODE_LENGTH) {
    var referral = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var i = 0; i < length; i++) {
        referral += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return referral;
}

function generateKey(length = CONSTANTS.REFERRAL_CODE_LENGTH) {
    var key = "";
    var possible = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var i = 0; i < length; i++) {
        key += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return key;
}

function otp(length = CONSTANTS.REFERRAL_CODE_LENGTH) {
    var referral = "";
    var possible = "0123456789";
    for (var i = 0; i < length; i++) {
        referral += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return referral;
}

function random_int_from_interval(length) {
    var referral = "";
    var possible = "0123456789";
    for (var i = 0; i < length; i++) {
        referral += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return parseInt(referral);
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
module.exports = {
    referral: referral,
    otp: otp,
    generateKey: generateKey,
    randomIntFromInterval: randomIntFromInterval,
    random_int_from_interval: random_int_from_interval
};