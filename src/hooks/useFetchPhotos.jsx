import { useState, useEffect } from 'react';
import { getLocalStorageItems } from '@/utils/localStorageHelper';

const useFetchPhotos = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setData(null);
    setError(null);

    (async () => {
      try {
        const photos = await getLocalStorageItems('favorites');
        setData(photos);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { data, isLoading, error, setData };
};
export default useFetchPhotos;
