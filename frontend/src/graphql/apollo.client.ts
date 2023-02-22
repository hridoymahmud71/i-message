import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const httpLink = new HttpLink({
  uri: process.env.GQL_URI as string,
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
