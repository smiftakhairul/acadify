
const useStorage = () => {
  const getItem = (key: string) => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      // alternative of ls
    }
  }

  const setItem = (key: string, value: any) => {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      // alternative of ls
    }
  }

  const removeItem = (key: string) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      // alternative of ls
    }
  }

  return {
    getItem,
    setItem,
    removeItem
  }
};

export default useStorage;
