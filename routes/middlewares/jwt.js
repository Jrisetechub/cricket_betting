const expressJwt = require('express-jwt');
const globalFunction = require('../../utils/globalFunction');
const settings = require('../../config/settings');
module.exports = jwt;

function jwt() {
    const secret = settings.secret;
    return expressJwt({
        secret,
        isRevoked
    }).unless({
        path: [///api/v2
            { url: /^\/api\/v2\/.*/, methods: ['GET'] },
            { url: "/api/v1/addressToHex", methods: ['POST'] },
            { url: "/api/v1/login", methods: ['POST'] },
            { url: "/api/v1/register", methods: ['POST'] }
        ]
    });
}
async function isRevoked(req, payload, done) {
    //console.log("payload.userId  ",payload.userId);
    req.headers['userId'] = payload.userId;
    //console.log("req  ",req.headers);
    // const user = await userService.getUserById(payload.sub);
    // if (!user.data) {
    //     return done(null, true);
    // }
    done();
};