export const saveToLocalStorage = (key: string, value: string | []) => {
  return localStorage.setItem(
    key,
    Array.isArray(value) ? JSON.stringify(value) : value
  );
};

export const getFromLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};
