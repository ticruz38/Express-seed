import { Router } from 'express'
import * as cookieParser from 'cookie-parser'
import * as bodyParser from 'body-parser'
import * as session from 'express-session'
import * as passport from 'passport'
import { mongoConnect } from '../api'

// strategy
import { local } from './strategy'

const login = Router()

login.use(
    mongoConnect,
    cookieParser,
    bodyParser,
    session({ secret: 'keyboard cat' }),
    passport.initialize(),
    passport.session(),
    local
)

login.post('/', passport.authenticate('local'), function(req, res) {
    console.log(req, res)
})

login.get('/facebook', passport.authenticate('facebook'))
// Facebook will redirect the user to this URL after approval.  Finish the authentication process by attempting to obtain an access token.  If access was granted, the user will be logged in.  Otherwise, authentication has failed.
login.get('/facebook/callback', passport.authenticate('facebook'), function(req, res) {
    console.log(req, res)
})



export default login;
