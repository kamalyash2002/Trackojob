const setLocalStorageItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorageItem = (key) => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : null;
};

export {
  setSelectedBranchId,
  getSelectedBranchId,
};

// functions for setting the things in the local storage