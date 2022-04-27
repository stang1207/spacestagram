import Head from 'next/head';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Banner from '@/components/Banner/Banner';
import PhotoList from '@/components/PhotoList/PhotoList';

export default function Home({ photos: photoData }) {
  const [photos, setPhotos] = useState(photoData);
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
      <PhotoList photos={photos} setPhotos={setPhotos} />
    </>
  );
}

export async function getServerSideProps({ res }) {
  const dataRes = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}&count=12&thumbs=true`
  );
  const data = await dataRes.json();
  const modifiedPhotos = data.map((photo) => ({
    ...photo,
    isPhotoLiked: false,
    id: nanoid(),
  }));

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  return {
    props: {
      photos: modifiedPhotos,
    },
  };
}
