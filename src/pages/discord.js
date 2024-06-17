import { useEffect } from "react";
import { Nav } from "/src/components/nav.js";
import Head from "next/head";

export default function Discord() {
  useEffect(() => {
    window.location.href = "https://discord.gg/prYYBXC2XS";
  }, []);

  return (
    <div>
      <Head>
        <title>Bopl Battle Competitive - Discord</title>
      </Head>
      <header>
        <Nav />
      </header>
      <div className="container">
        <h1>Discord!</h1>
        <p>You should be redirected shortly!</p>
      </div>
    </div>
  );
}
