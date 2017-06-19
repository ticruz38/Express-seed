import { Router } from 'express'
import * as Graphql from 'express-graphql'
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo'
import { match, RouterContext } from 'react-router'

// app
import config from '../config'
const schema = require(config.SCHEMA_URL)

const graphql = Router()

graphql.use(
    '/',
    Graphql({
        schema,
        graphiql: true
    })
)

export default graphql
