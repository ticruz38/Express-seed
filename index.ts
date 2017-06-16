import * as express from 'express'

// app
import { mongoConnect } from 'api'
import config from 'config'
import login from 'login'
import graphql from 'graphql'
import renderer from 'renderer'
const routes = require(config.ROUTE_URL)

const app = express()

app.use(mongoConnect)
app.use(express.static('public'))
app.use('/login', login)
app.use('/graphql', graphql)
app.use(renderer) // the renderer may not match each request... let's see how it goes

app.listen(config.PORT)
