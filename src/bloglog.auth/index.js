'use strict';
// external
import passport from 'passport';
import {Strategy as LocalStrategy} from 'passport-local';

//locals
import { userService } from '../bloglog.services';
import UserModel from '../bloglog.models/userModel.js';
import ResultCodes from '../bloglog.common/resultCodes.js';



/* -------------- implementation -------------- */
function initialize(app) {
    app.use(passport.initialize());
    app.use(passport.session());

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.email);
    });

    // used to deserialize the user
    passport.deserializeUser(function (email, done) {

        userService.get(email)
            .then(result => {
                if (result.success) {
                    return done(err, user);
                }
            }).catchcatch(error => {
                done(err);
            });

    });

    app.post('/login',
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/#/login',
            failureFlash: true
        })
    );

    app.post('/signup',
        passport.authenticate('signup', {
            successRedirect: '/',
            failureRedirect: '/#/login',
            failureFlash: true
        })
    );

    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

    passport.use('local',
        new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
        },
            function (username, password, done) {
                debugger;
                userService.get(username)
                    .then(result => {
                        if (result.success) {
                            // TODO: compare password.
                            return done(null, result.data);
                        }

                        return done(null, false, { message: 'Invalid credentials.' });
                    })
                    .catch(error => {
                        return done(error);
                    });
            }
        ));

    passport.use('signup',
        new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback : true
        },
            function (req, username, password, done) {
                
                userService.get(username, password)
                    .then(result => {

                        if (result.success) {
                            return done(null, false, {message: "user exists."});
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
                                    passport.authenticate('local', { failureRedirect: '/#login' });
                                    return done(null, result._doc);
                                })
                                .catch(result => {
                                    return done(null, false, { message: 'Invalid credentials.' });
                                });
                        } else {
                            return done(refuceResult);
                        }

                    });
            }
        ));
}



/* -------------- exports -------------- */
export default {initialize};
