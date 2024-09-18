const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
dotenv.config();

const verifyToken = (req, res, next) => {

    const authHeader = req.headers.token;
    if (authHeader) {
        const token = authHeader.split("")[1];
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if (err) res.status(403).json('Token is not valid')
            req.user = user;
            next();
        })


    } else {
        res.status(401).json("you are not authenyication")
    }

}


const verifyTokenAndAuthorization = (req, res, next) => {

    verifyToken(req, res, () => {
        if (req.userIrole === " admin") {
            next()
        } else {
            res.status(403).json("You are not admin.")
        }
    })


}



module.exports = { verifyTokenAndAuthorization }