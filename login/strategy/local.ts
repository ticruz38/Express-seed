import * as passport from 'passport'
import { LocalStrategy } from 'passport-local'




export default function(req, res, next) {
    passport.use(new LocalStrategy(function(username, password, done) {
            const User = req.db.collection('user');
            User.findOne({ username: username }, function(err, user) {
                if (err) {
                    return done(err)
                }
                if (!user) {
                    return done(null, false, { message: 'Incorrect username.' })
                }
                if ( !user.password === password ) {
                    return done(null, false, { message: 'Incorrect password.' })
                }
                return done(null, user)
            })
        })
    )
}
