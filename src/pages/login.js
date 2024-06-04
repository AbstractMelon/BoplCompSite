import Head from "next/head";
import Link from "next/link";
import {Nav} from '/src/components/nav.js'


import { useEffect, useState } from "react";

export default function Events() {

  return (
    <div>
        <Head>
        <title>Bopl Battle Competitive</title>
        </Head>
        <header>
            <Nav />
        </header>
        <main className="container">
            <section className="page-section">

            </section>
        </main>
    </div>
  );
}
