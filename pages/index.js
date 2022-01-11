import Sidebar from "../components/Sidebar";
import Center from "../components/Center";

import { getSession } from "next-auth/react";
import Player2 from "../components/Player2";

export default function Home() {
  return (
    // initial div height of screen, for smooth scroll
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        <Sidebar />
        <Center />
      </main>

      <div className="sticky bottom-0">
        <Player2 />
      </div>
    </div>
  );
}

// it will prefetch the session before and then client side will work
export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
