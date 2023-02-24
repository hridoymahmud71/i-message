interface CreateUsernameData {
  createUsername: {
    success: Boolean;
    error: String;
  };
}

interface CreateUsernameVariable {
  username: string;
}

export type { CreateUsernameData, CreateUsernameVariable };
