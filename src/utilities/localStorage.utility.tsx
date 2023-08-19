export const persistLocalStorage = <T,>(token: string, value: T) => {
  localStorage.setItem(token, JSON.stringify({ ...value }));
  console.log(localStorage.getItem(token));
};

export const clearLocalStorage = (token: string) => {
  localStorage.removeItem(token);
};
