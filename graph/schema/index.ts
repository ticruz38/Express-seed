import Subscription from './Subscription';
import Query from './Query';
import Mutation from './Mutation';

const { makeExecutableSchema } = require('graphql-tools');
const Schema = require('./schema/Schema.json');

export default makeExecutableSchema({
    typeDefs: Schema,
    resolvers: {
        Query: Query,
        Mutation: Mutation,
        Subscription: Subscription
    }
});