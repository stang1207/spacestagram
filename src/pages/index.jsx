import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Spacestagram - Home</title>
        <meta
          name="description"
          content="Spacestagram, an web application that provides you daily pictures of our fascinating universe with brief explanations written by astronomers."
        />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <h1>Hello World!</h1>
    </>
  );
}
