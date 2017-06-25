const config: {[prop: string]: string } = {
    PORT: process.env.port || 3000,
    APP_URL: process.env.APP_URL || 'localhost:3000', // the server app url (used by facebook login redirect)
    API_URL: process.env.API_URL || 'localhost:3000',
    FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID || 'facebookappid',
    FACEBOOK_APP_SECRET: process.env.FACEBOOK_APP_SECRET || 'facebookappsecret',
    ROUTE_URL: '/Users/tduchene/Code/apollo/dist/app', // Where to find the route file to render server-sid~
    FRONT_END_URL: 'localhost:8000',
    SCHEMA_URL: '~/Code/express/graph/schema/' // Where is the application schema
}

export default config;