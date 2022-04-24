import Head from 'next/head';
import Banner from '@/components/Banner/Banner';

export default function Home() {
  return (
    <>
      <Head>
        <title>Spacestagram - Home</title>
        <meta
          name="description"
          content="Spacestagram, an web application that provides you daily pictures of our fascinating universe."
        />
      </Head>
      <Banner />
    </>
  );
}
