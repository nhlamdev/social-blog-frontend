import { useState } from "react";

type LocalStorageValue<T> = T | null;

const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [LocalStorageValue<T>, (value: T) => void] => {
  const storedValue =
    typeof window !== "undefined" ? localStorage.getItem(key) : null;
  const initial = storedValue ? (JSON.parse(storedValue) as T) : initialValue;

  const [value, setValue] = useState<LocalStorageValue<T>>(initial);

  const setStoredValue = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
};

export default useLocalStorage;
