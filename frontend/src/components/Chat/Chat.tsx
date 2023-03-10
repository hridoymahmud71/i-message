import { Button } from "@chakra-ui/react";
import { signOut } from "next-auth/react";

interface IChatProps {}

const Chat: React.FC<IChatProps> = (props) => {
  return (
    <>
      <div>Chat</div>
      <Button onClick={() => signOut()}>Sign Out</Button>
    </>
  );
};

export default Chat;
