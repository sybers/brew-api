import db from "../models";
import RequestBuilder from "../helpers/RequestBuilder";
import restify from "restify";

export default function usersEndpoints(server, passport) {

    /**
     * @api {get} /users/count get the count of users
     * @apiName GetUsersCount
     * @apiGroup Users
     * @apiVersion 0.1.0
     * @apiSuccess {Number} count number of users
     */
    server.get('/users/count', (req, res, next) => {
        db.User.count().then( function(count) {
            console.log(count);
            res.send({count: count});
            return next();
        }).catch( (err) => {
            return next(err);
        });
    });

    /**
     * @api {get} /users get multiple users informations
     * @apiName GetUsers
     * @apiGroup Users
     * @apiVersion 0.1.0
     * @apiSuccess {Array<Object>} users informations
     */
    server.get({
            url: '/users',
            validation: {
                queries: {
                    fields: { isRequired: false, regex: /^(([a-zA-Z0-9\-_],*)+|\*)$/, description: "Fields to include in response (comma separated)"},
                    recursive: { isRequired: false, regex: /^(true|false)$/},
                    limit: { isRequired: false, isNumeric: true },
                    offset: { isRequired: false, isNumeric: true },
                    order: { isRequired: false, regex: /(^\w+:\w+$)/, description: "<field>:<ordering>"}
                }
            }
        }, (req, res, next) => {

            //enable jwt authentication for this endpoint
            passport.authenticate('jwt', { session: false }, (info, user, err) => {
                if(err) return next(err);
            })(req, res, next);

            let query = new RequestBuilder(req, db, 'User', {
                attributes: [ 'id', 'username', 'email' ], //these are default fields
                defaultLimit: 10,
                maxLimit: 25
            })  .enableFieldsSelection()
                .enableRecursivity()
                .enablePagination()
                .enableOrdering()
                .finalize();

            db.User.findAll(query).then( (users) => {
                if(!users) {
                    res.send(new restify.NotFoundError("No users were found..."));
                } else {
                    res.send(users);
                }
                return next();
            }).catch( (err) => {
                return next(err);
            });
        });

    /**
     * @api {get} /users/name/:username get the user informations by username
     * @apiName GetUserByUsername
     * @apiGroup Users
     * @apiVersion 0.1.0
     * @apiSuccess {Object} user informations
     */
    server.get({
            url: '/users/name/:username',
            validation: {
                resources: {
                    username: { isRequired: true, isAlpha: true }
                }
            }
        }, (req, res, next) => {

            //enable jwt authentication for this endpoint
            passport.authenticate('jwt', { session: false }, (info, user, err) => {
                if(err) return next(err);
            })(req, res, next);

            db.User.findOne({
                where: {
                    username: req.params.username
                },
                attributes: [ 'id', 'username', 'email' ] //these are default fields
            }).then( (user) => {
                if(!user) {
                    res.send(new restify.NotFoundError("Requested user was not found"));
                } else {
                    res.send(user.get({plain: true}));
                }
                return next();
            }).catch( (err) => {
                return next(err);
            });
        });

    /**
     * @api {post} /users create a new user
     * @apiName PostUser
     * @apiGroup Users
     * @apiVersion 0.1.0
     * @apiSuccess {Object} user informations
     */
    server.post({
        url: '/users',
        validation: {
            content: {
                //required parameters
                username: { isRequired: true },
                email: { isRequired: true, isEmail: true },
                password: { isRequired: true }
            }
        }
    }, (req, res, next) => {
        //TODO : check for user unicity
        db.User.build(req.body)
            .save()
            .then( (newUser) => {
                res.send(newUser);
                return next();
            }).catch( (err) => {
                return next(err);
            });
    });

    /**
     * @api {get} /users/:id get the user informations by id
     * @apiName GetUserById
     * @apiGroup Users
     * @apiVersion 0.1.0
     * @apiSuccess {Object} user informations
     */
    server.get({
            url: '/users/:id',
            validation: {
                resources: {
                    id: { isRequired: true, isNumeric: true }
                }
            }
        }, (req, res, next) => {

            //enable jwt authentication for this endpoint
            passport.authenticate('jwt', { session: false }, (info, user, err) => {
                if(err) return next(err);
            })(req, res, next);

            db.User.findOne({
                where: {
                    id: req.params.id
                },
                attributes: [ 'id', 'username', 'email' ] //these are default fields
            }).then( (user) => {
                if(!user) {
                    res.send(new restify.NotFoundError("Requested user was not found"));
                } else {
                    res.send(user.get({plain: true}));
                }
                return next();
            }).catch( (err) => {
                return next(err);
            });
        });
}
