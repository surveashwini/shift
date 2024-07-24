import { useState, useEffect } from 'react';
import { Favorite } from '../types/favorite';

const useSessionStorage = (
  key: string,
  initialValue: Favorite[] = [],
): [
  Favorite[],
  (idToCheck: string) => boolean,
  (newFavorite: Favorite) => void,
  (idToRemove: string) => void,
] => {
  const [value, setValue] = useState<Favorite[]>(() => {
    const storedValue = sessionStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const isExistingFavourite = (idToCheck: string) => {
    return value.some((v) => v.id === idToCheck);
  };

  const addFavorite = (newFavorite: Favorite) => {
    setValue([...value, newFavorite]);
  };

  const removeFavorite = (idToRemove: string) => {
    setValue(value.filter((obj) => obj.id !== idToRemove));
  };

  return [value, isExistingFavourite, addFavorite, removeFavorite];
};

export default useSessionStorage;
