import Auth from "@/components/Auth/Auth";
import Chat from "@/components/Chat/Chat";
import { Box } from '@chakra-ui/react';
import { Inter } from "@next/font/google";
import { NextPageContext } from "next";
import { getSession, useSession } from "next-auth/react";
import { Session } from 'next-auth'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data } = useSession();

  console.log("Here is data", data);

  return (
    <>    
      <Box>{ data?.user ? <Chat/> : <Auth/> }</Box>
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
