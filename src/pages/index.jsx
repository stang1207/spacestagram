import Head from 'next/head';
import { useState } from 'react';
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

export async function getServerSideProps() {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}&count=12&thumbs=true`
  );
  const data = await res.json();
  const modifiedPhotos = data.map((photo) => ({
    ...photo,
    isPhotoLiked: false,
  }));
  return {
    props: {
      photos: modifiedPhotos,
    },
  };
}
