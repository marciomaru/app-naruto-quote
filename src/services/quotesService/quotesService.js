export const getQuote = () =>
  fetch(process.env.VITE_REACT_APP_API).then((response) => response.json());
