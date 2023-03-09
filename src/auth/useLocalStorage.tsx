import { useState, Dispatch, SetStateAction } from 'react';

type SetValue<T> = Dispatch<SetStateAction<T>>;

function useLocalStorage<T>(keyName: string, defaultValue: null) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = localStorage.getItem(keyName);

      if (value) {
        return JSON.parse(value);
      } else {
        localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  const setValue: SetValue<T> = (newValue) => {
    try {
      localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {
      console.log(err);
    }

    setStoredValue(newValue);
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
