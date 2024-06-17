import Head from "next/head";
import Link from "next/link";

export function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Homepage</Link>
        </li>
        <li>
          <Link href="/leaderboard">Leaderboard</Link>
        </li>
        <li>
          <Link href="/announcements">Announcements</Link>
        </li>
        <li>
          <Link href="/events">Events</Link>
        </li>
        <li>
          <Link href="/rules">Rules</Link>
        </li>
        <li>
          <Link href="/discord">Discord</Link>
        </li>
      </ul>
    </nav>
  );
}
