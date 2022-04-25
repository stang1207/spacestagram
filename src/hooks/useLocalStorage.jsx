// import { useState, useEffect } from 'react';

// // eslint-disable-next-line consistent-return
// const getSavedValues = (key, initialValue) => {
//   if (typeof window !== 'undefined') {
//     const savedValues = JSON.parse(localStorage.getItem(key));
//     if (savedValues) return savedValues;
//     if (initialValue instanceof Function) {
//       return initialValue();
//     }
//     return initialValue;
//   }
// };

// const useLocalStorage = (key, initialValue) => {
//   const [value, setValue] = useState(() => getSavedValues(key, initialValue));

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [value]);

//   return [value, setValue];
// };
// export default useLocalStorage;
