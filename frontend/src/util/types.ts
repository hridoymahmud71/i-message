export interface CreateUsernameData {
  createUsername: {
    success: Boolean;
    error: String;
  };
}

export interface CreateUsernameVariable {
  username: string;
}

export interface User {
  id: string;
  username: string;
}

export interface Session {
  user?: User;
}

export interface GraphQLContext {
  session: Session | null;
}
