import { Router } from 'express'
import * as Graphql from 'express-graphql'
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo'
import { match, RouterContext } from 'react-router'
import schema from './schema'
import * as cors from 'cors'
// app
import config from '../config'

const graphql = Router()

graphql.use(
    '/',
    cors(),
    Graphql(req => ({
        schema,
        graphiql: true,
        rootValue: req
    }))
)

export default graphql
