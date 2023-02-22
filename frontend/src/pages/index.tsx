import Auth from "@/components/Auth/Auth";
import Chat from "@/components/Chat/Chat";
import { Box } from "@chakra-ui/react";
import { Inter } from "@next/font/google";
import { NextPageContext } from "next";
import { getSession, useSession } from "next-auth/react";
import { Session } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();

  console.log("Here is session", session);

  const reloadSession = () => {};

  return (
    <>
      <Box>
        {session?.user.username ? (
          <Chat />
        ) : (
          <Auth session={session} reloadSession={reloadSession} />
        )}
      </Box>
    </>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
