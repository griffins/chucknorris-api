const { ChuckNorrisJokesAPI } = require("./graphql-jokes/datasources/jokes");

const { ApolloServer } = require('apollo-server');
const { resolvers, typeDefs } = require("./graphql-jokes")

/**
 * The ApolloServer constructor requires two parameters: the schema
 * definition and resolvers. Data sources also added since we are
 * querying an external API.
 */
//
const server = new ApolloServer({
        typeDefs, resolvers, dataSources: () => {
            return {
                jokes: new ChuckNorrisJokesAPI()
            }
        }
    }
);

// The `listen` method launches a web server serving the graphql endpoint.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});