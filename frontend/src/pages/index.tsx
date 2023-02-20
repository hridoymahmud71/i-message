import { Inter } from "@next/font/google";
import { signIn, useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data } = useSession();

  console.log("Here is data", data);

  return (
    <>
      <div>
        <button onClick={() => signIn("google")}>Sign In</button>
      </div>
    </>
  );
}
