const { ApolloServer } = require('apollo-server');

const api = require('./server/api');

const typeDefs = require('./server/schema');

const resolvers = {
    Query: {
        books: () => api.books,
        authors: () => api.authors
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`server listen at ${url}`);
});

