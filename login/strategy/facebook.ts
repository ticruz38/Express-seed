import * as passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook'
import config from 'config';


export default function(req, res, next) {
    passport.use(new FacebookStrategy({
        clientID: config.FACEBOOK_APP_ID,
        clientSecret: config.FACEBOOK_APP_SECRET,
        callbackURL: config.APP_URL
    },
    function(accessToken, refreshToken, profile, done) {
        console.log( accessToken, refreshToken, profile, done );
    } ) )
}