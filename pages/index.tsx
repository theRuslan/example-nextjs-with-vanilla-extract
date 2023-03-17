import Head from "next/head";
import Image from "next/image";

import {
  about,
  card,
  code,
  container,
  description,
  footer,
  grid,
  logo,
  main,
  title,
} from "../styles/home.css";

export default function Home() {
  return (
    <div className={container}>
      <Head>
        <title>Next.js with Vanilla-Extract example | Create Next App</title>
        <meta
          name="description"
          content="Example of Next.js with Vanilla-Extract used instead of default CSS modules."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <p className={about}>
          Example of{" "}
          <a href="https://nextjs.org/" target="_blank">
            <em>Next.js</em>
          </a>{" "}
          with{" "}
          <a href="https://vanilla-extract.style/" target="_blank">
            <em>Vanilla-Extract</em>
          </a>{" "}
          used instead of default CSS modules. See code on{" "}
          <a
            href="https://github.com/theRuslan/example-nextjs-with-vanilla-extract"
            target="_blank"
          >
            <em>GitHub</em>
          </a>
        </p>
      </header>

      <main className={main}>
        <h1 className={title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={description}>
          Get started by editing <code className={code}>pages/index.tsx</code>
        </p>

        <div className={grid}>
          <a href="https://nextjs.org/docs" className={card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
