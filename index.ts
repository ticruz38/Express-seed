import * as express from 'express'

// app
import { mongoConnect } from './api'
import config from './config'
import login from './login'
import graph from './graph'
import renderer from './renderer'

const app = express()

app.use(mongoConnect)
app.use(express.static('public'))
app.use('/login', login)
app.use('/graphql', graph)
app.use(renderer) // the renderer may not match each request... let's see how it goes

app.listen(config.PORT)
console.log('server is listening on port ' + config.PORT)
