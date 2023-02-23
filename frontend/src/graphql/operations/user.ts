import { gql } from "@apollo/client";

const userOperations = {
  Queries: {},
  Mutations: {
    createUsername: gql`
      mutation CreateUsername($username: String!) {
        createUsername(username: $username) {
          success
          error
        }
      }
    `,
  },
  Subscription: {},
};

export default userOperations;
