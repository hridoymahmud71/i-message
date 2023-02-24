const resolvers = {
  Query: {
    searchUsers: () => {},
  },
  Mutation: {
    createUsername: (_: any, args: { username: string }, context: any) => {
      console.log("hey api", context, args.username);
    },
  },
};

export default resolvers;
