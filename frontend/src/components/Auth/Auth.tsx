import { useMutation } from "@apollo/client";
import { Center, Stack, Text, Button, Image, Input } from "@chakra-ui/react";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { useState } from "react";
import UserOperations from "../../graphql/operations/user";
import { CreateUsernameData, CreateUsernameVariable } from "../../util/types";

interface IAuthProps {
  session: Session | null;
  reloadSession: () => void;
}

const Auth: React.FunctionComponent<IAuthProps> = ({
  session,
  reloadSession,
}) => {
  const [username, setUsername] = useState("");

  const [createUsername, { data, loading, error }] = useMutation<
    CreateUsernameData,
    CreateUsernameVariable
  >(UserOperations.Mutations.createUsername);

  const onSubmit = async () => {
    try {
      await createUsername({
        variables: { username },
      });
    } catch (error) {
      console.log("onsubmit error", error);
    }
  };

  return (
    <Center height="100vh">
      <Stack align="center" spacing="8">
        {session ? (
          <>
            <Text fontSize="3xl">Create a username</Text>
            <Input
              placeholder="Enter a username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <Button width="100%" onClick={onSubmit}>
              Submit
            </Button>
          </>
        ) : (
          <>
            <Text fontSize="3xl">MessengerQL</Text>
            <Button
              leftIcon={
                <Image
                  alt="google logo"
                  height="20px"
                  src="/images/googlelogo.png"
                />
              }
              onClick={() => signIn("google")}
            >
              Continue with Google
            </Button>
          </>
        )}
      </Stack>
    </Center>
  );
};

export default Auth;
