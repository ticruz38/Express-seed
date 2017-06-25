import Subscription from './Subscription';
import Query from './Query';
import Mutation from './Mutation';

const { makeExecutableSchema } = require('graphql-tools');
const Schema = require('./Schema.json');

export default makeExecutableSchema({
    typeDefs: Schema,
    resolvers: {
        Query,
        Mutation,
        Subscription
    }
});