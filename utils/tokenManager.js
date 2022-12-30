const jwt = require("jsonwebtoken");

const accessTokenSecretKey = "testing-see-produk";

function generateAccessToken(userPayload) {
    return jwt.sign(userPayload, accessTokenSecretKey, {
        subject: userPayload.email,
        expiresIn: "6h",
    });
}

module.exports = generateAccessToken;