import Head from "next/head";
import Link from "next/link";

import {Nav} from '/src/components/nav.js'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bopl Battle Competitive</title>
      </Head>
      <header>
        <Nav />
      </header>
      <main className="container">
        <section className="hero">
          <h1>Welcome to the Bopl Battle Competitive site</h1>
          <p>
            Join the ultimate gaming community where players compete,
            collaborate, and conquer!
          </p>
        </section>

        <section className="features">
          <div className="feature">
            <Link href="/leaderboard">
              <h3>Leaderboard</h3>
              <p>Track your progress and compete with other players.</p>
            </Link>
          </div>
          <div className="feature">
            <Link href="/events">
              <h3>Events</h3>
              <p>Participate in exciting events and challenges.</p>
            </Link>
          </div>
          <div className="feature">
            <Link href="/announcements">
              <h3>Announcements</h3>
              <p>Stay updated with the latest news and announcements.</p>
            </Link>
          </div>
          <div className="feature">
            <Link href="/rules">
              <h3>Rules</h3>
              <p>Understand the rules and guidelines for fair play.</p>
            </Link>
          </div>
        </section>

        <section className="announcements">
          <h2>Announcements</h2>
          <ul>
            <li>Announcement 1</li>
            <li>Announcement 2</li>
            <li>Announcement 3</li>
          </ul>
        </section>

        <section className="events">
          <h2>Recent Events</h2>
          <ul>
            <li>Event 1</li>
            <li>Event 2</li>
            <li>Event 3</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
