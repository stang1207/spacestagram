import { useCallback, useEffect, useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState([]);

  const initialize = () => {
    const item = localStorage.getItem(key);
    if (item) return JSON.parse(item);
    localStorage.setItem(key, JSON.stringify(initialValue));
    return initialValue;
  };

  useEffect(() => {
    setState(initialize(key));
  }, []);

  const setValue = useCallback(
    (value) => {
      const valueToStore = value instanceof Function ? value(state) : value;
      setState(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    },
    [key, setState]
  );

  return [state, setValue];
};

export default useLocalStorage;
