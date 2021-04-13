import { useEffect, useState } from "react";

const useSessionStorage = (key, initialData) => {
  const [data, setData] = useState(() => {
    if (window.sessionStorage) {
      if (sessionStorage.getItem(key) !== null) {
        return JSON.parse(sessionStorage.getItem(key));
      }
      return initialData === undefined ? "undefined" : initialData;
    }
  });
  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);

  return [data, setData];
};

export default useSessionStorage;
