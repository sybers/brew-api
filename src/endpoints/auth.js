import db from "../models";
import jwt from "jwt-simple";
import md5 from "md5";
let jwtConfig = require(__dirname + "/../config/config.json")['jwt'];

export default function authEndpoints(server) {

  /**
   * @api {post} /auth/jwt JWT auth
   * @apiName PostAuthJwt
   * @apiGroup Auth
   * @apiVersion 1.0.0
   * @apiSuccess {User} user User fields
   * @apiSuccess {String} token JWT token
   * @apiPermission none
   * @apiDescription Authenticate to APi using JWT
   */
    server.post({
            url: "/auth/jwt",
            validation: {
                content: {
                    username: { isRequired: true},
                    password: { isRequired: true}
                }
            }
        },
        (req, res, next) => {

            //grab username and password
            let username = req.body.username;
            let password = req.body.password;

            //try to find matching user
            db.User.findOne({
                where: {
                    username: username,
                    password: md5(password)
                },
                attributes: [ 'id', 'username', 'email', 'role' ] //these are default fields
            }).then( (user) => {
                if(!user) {
                    res.send(404,{
                        message: "Invalid credentials"
                    });
                } else {
                    //generate token
                    let now = Math.round(new Date().getTime() / 1000);

                    let payload = {
                        iat: now,
                        exp: now + 60*60*24*365, //expiration time is set to one year, TODO : implement refresh token for mobile apps
                        id: user.id,
                        username: user.username,
                        role: user.role
                    };

                    let token = jwt.encode(payload, jwtConfig["jwt-secret"], 'HS256', {});

                    res.send({ user: user, token: token });
                }

                return next();

            }).catch( (err) => {
                return next(err);
            });
        });
}
