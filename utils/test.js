var service = require("../routes/services/serviceUser");


(async () => {
    var data = {
        email: "as57f558@gasf.asdf1",
        password: "asdf1",
    };
    var test = await service.getUserByEmail(data.email);
    console.log("test::::: ", test);
})();



(async () => {
    var data = {
        email: "as57f558@gasf.asdf1",
        password: "asdf1",
    };
    var test = await service.getUserByEmail(data.email);
    console.log("test::::: ", test);
})();










(async () => {
    //Register User=================================================================
    // var data = {
    //     email: "as57f551@gasf.asdf",
    //     password: "asdf",
    //     mobile: "98787",
    //     device_type: "lkjlkjl",
    //     device_token: "lkjlk"
    // };
    // var userres = await save_user(data);
    // console.log("userres ::: ", userres);
    // if (userres.status_code === CONSTANTS.SUCCESS) {
    //     var refdata = {
    //         owner_of_referral: userres.data.id,
    //         referral_to: userres.data.id,
    //         referral_by: null,
    //         referral_code: "BBBBBBB",
    //     };
    //     var refferralres = await save_referral(refdata);
    // } else {

    // }
    //
    // var data = {
    //     email: "as57f558@gasf.asdf1",
    //     passglobalfunction.jsword: "asdf1",
    //     mobile: "98787",
    //     device_type: "lkjlkjl",
    //     device_token: "lkjlk"
    // };
    // var test = await verify_username_password(data);
    // console.log("test::::: ", test);
})();















async function register(userParam) {
    logger.info('Enter into Register : ', userParam);
    var user = db.getUserByEmail();
    if (user) {

    }
}
async function authenticate({
    username,
    password
}) {
    const user = await User.findOne({
        username
    });
    if (user && bcrypt.compareSync(password, user.hash)) {
        const {
            hash,
            ...userWithoutHash
        } = user.toObject();
        const token = jwt.sign({
            sub: user.id
        }, settings.secret);
        return {
            ...userWithoutHash,
            token
        };
    }
}
async function getAll() {
    return await User.find().select('-hash');
}
async function getById(id) {
    return await User.findById(id).select('-hash');
}
async function create(userParam) {
    // validate


    if (await User.findOne({
            username: userParam.username
        })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    const user = new User(userParam);

    // hash password
    if (userParam.password) {
        user.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // save user
    await user.save();
}
async function update(id, userParam) {
    const user = await User.findById(id);

    // validate
    if (!user) throw 'User not found';
    if (user.username !== userParam.username && await User.findOne({
            username: userParam.username
        })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    // hash password if it was entered
    if (userParam.password) {
        userParam.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // copy userParam properties to user
    Object.assign(user, userParam);

    await user.save();
}