import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { makeExecutableSchema } from "@graphql-tools/schema";
// internal exports
import typeDefs from "../src/graphql/typeDefs";
import resolvers from "../src/graphql/resolvers";
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});
const server = new ApolloServer({
    schema,
});
// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
console.log(`🚀 Server listening at: ${url}`);
