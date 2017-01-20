'use strict';
// external
import passport from 'passport';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import JWT from 'jwt-simple';
import { Md5 } from 'ts-md5/dist/md5';

//locals
import { userService } from '../bloglog.services';
import UserModel from '../bloglog.models/userModel.js';
import ResultCodes from '../bloglog.common/resultCodes.js';
import Result from '../bloglog.common/result.js';



/* -------------- implementation -------------- */
function initialize(app) {
    app.use(passport.initialize());

    let opts = {};
    opts.secretOrKey = "zlovzlovzlolovlll";
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {

        userService.get(jwt_payload.email)
            .then(result => {
                if (result.success) {
                    let user = result.data;
                    if (user) {
                        user.password = "";
                        return done(null, user);
                    }

                    return done(null, false, { message: 'invalid credentials' });
                }

                return done(null, false, { message: 'invalid credentials' });
            })
            .catch(error => {
                return done(error);
            });

    }));

    let opts = {};
    opts.secretOrKey = "zlovzlovzlolovlll";
    opts.jwtFromRequest = function (req) {
        var token = null;
        if (req && req.cookies) {
            token = req.cookies['jwt'];
            debugger;
        }
        return token;
    };
    passport.use("jwt-cookie", new JwtStrategy(opts, function (jwt_payload, done) {
debugger;
        userService.get(jwt_payload.email)
            .then(result => {
                if (result.success) {
                    let user = result.data;
                    if (user) {
                        user.password = "";
                        return done(null, user);
                    }

                    return done(null, false, { message: 'invalid credentials' });
                }

                return done(null, false, { message: 'invalid credentials' });
            })
            .catch(error => {
                return done(error);
            });

    }));

    app.post('/signup', function (req, res) {

        userService.get(req.body.email)
            .then(result => {

                if (result.success) {
                    return res.json(new Result(null, false, "user exists", ResultCodes.ObjectExists()));
                }

            })
            .catch(refuceResult => {
                // the user should not exist, so we should get refuce from service.

                if (refuceResult.code === ResultCodes.ObjectNotFound()) {
                    userService.add(
                        new UserModel(
                            null,
                            req.body.name,
                            req.body.email,
                            req.body.password
                        ))
                        .then(result => {
                            return res.json(new Result(null, true, "user was successfuly created", ResultCodes.Success()));
                        })
                        .catch(result => {
                            return res.json(new Result(null, false, "invalid credentials", ResultCodes.InvalidObject()));
                        });
                } else {
                    return res.json(new Result(refuceResult, false, "invalid credentials", ResultCodes.Error()));
                }

            });

    });

    app.post('/login', function (req, res) {

        userService.get(req.body.email)
            .then(result => {
                if (result.success) {
                    let user = result.data;
                    if (userService.checkPassword(user, req.body.password)) {
                        var token = JWT.encode(user, opts.secretOrKey);
                        
                        return res.json(
                            new Result(
                                { 
                                    id: user.id,
                                    token: 'JWT ' + token
                                },
                                true,
                                "success",
                                ResultCodes.Success()));
                    }

                    return res.json(new Result(null, false, "invalid creadentials", ResultCodes.Unathorized()));
                }

                return res.json(new Result(null, false, "invalid creadentials", ResultCodes.Unathorized()));
            })
            .catch(error => {
                return res.json(new Result(error, false, "invalid creadentials", ResultCodes.Unathorized()));
            });

    });
}



/* -------------- exports -------------- */
export default { initialize };
