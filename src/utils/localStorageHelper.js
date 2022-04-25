// eslint-disable-next-line consistent-return
const getLocalStorageItems = async (key) => {
  if (typeof window !== 'undefined') {
    const localStorageItems = await JSON.parse(localStorage.getItem(key));
    return localStorageItems || [];
  }
};

const addLocalStorageItem = async (key, item) => {
  const localStorageItems = await getLocalStorageItems(key);
  localStorageItems.push(item);
  localStorage.setItem(key, JSON.stringify(localStorageItems));
};

const removeLocalStorageItem = async (key, item) => {
  const localStorageItems = await getLocalStorageItems(key);
  const newLocalStorageItems = localStorageItems.filter(
    (photos) => photos.id !== item.id
  );
  localStorage.setItem(key, JSON.stringify(newLocalStorageItems));
};

export { getLocalStorageItems, addLocalStorageItem, removeLocalStorageItem };
