// FUNCTION
const srcImg = function (pathImg) {
  // render img
  const src = pathImg?.startsWith("/images/")
    ? process.env.REACT_APP_API_ENDPOINT_ORIGIN + pathImg
    : pathImg;

  return src;
};

// ----------------
// EXPORT
export default srcImg;
