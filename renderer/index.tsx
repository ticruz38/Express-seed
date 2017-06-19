import * as React from 'react'
import * as ReactDOM from 'react-dom/server'
import { Router } from 'express'
import { ApolloClient, createNetworkInterface, ApolloProvider, renderToStringWithData } from 'react-apollo'
import { match, RouterContext } from 'react-router'

//app
import config from '../config'
import Html from '../renderer/Html'
const routes = require(config.Route_URL)

const renderer = Router()

renderer.use((req, res) => {
    match({ routes, location: req.originalUrl }, (error, redirectLocation, renderProps) => {
        const client: any = new ApolloClient({
            ssrMode: true,
            // Remember that this is the interface the SSR server will use to connect to the
            // API server, so we need to ensure it isn't firewalled, etc
            networkInterface: createNetworkInterface({
                uri: process.env.API_URL,
                opts: {
                    credentials: 'same-origin',
                    // transfer request headers to networkInterface so that they're accessible to proxy server
                    // Addresses this issue: https://github.com/matthew-andrews/isomorphic-fetch/issues/83
                    headers: req.headers
                }
            })
        })

        const app = (
            <ApolloProvider client={client}>
                <RouterContext {...renderProps} />
            </ApolloProvider>
        )

        renderToStringWithData(app)
            .then(content => {
                const initialState = { [client.reduxRootKey]: client.getInitialState() }
                const html = <Html content={content} state={initialState} />
                res.status(200)
                res.send(`<!doctype html>\n${ReactDOM.renderToStaticMarkup(html)}`)
                res.end()
            })
            .catch(error => console.error(error))
    })
})

export default renderer
