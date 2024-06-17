import { AnnouncementsComp } from "/src/components/announcements.js";
import { Nav } from "/src/components/nav.js";
import Head from "next/head";

export default function Announcements() {
  return (
    <div>
      <Head>
        <title>Bopl Battle Competitive - Annoucements</title>
      </Head>
      <header>
        <Nav />
      </header>
      <div className="announcements-cards">
        <div className="container">
          <h1>Announcements</h1>
          <AnnouncementsComp />
        </div>
      </div>
    </div>
  );
}
