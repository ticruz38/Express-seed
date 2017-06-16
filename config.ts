const config: {[prop: string]: string } = {
    PORT: process.env.port || 3000,
    APP_URL: process.env.APP_URL || 'localhost:3000',
    API_URL: process.env.API_URL || 'localhost:300',
    FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID || 'facebookappid',
    FACEBOOK_APP_SECRET: process.env.FACEBOOK_APP_SECRET || 'facebookappsecret',
    ROUTE_URL: '', // Where to find the js file to render server-side
    SCHEMA_URL: ''
}

export default config;