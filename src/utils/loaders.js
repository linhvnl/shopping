// FUNCTION LOADER
const homeLoader = async function () {
  return fetch(`${process.env.REACT_APP_API_ENDPOINT_ORIGIN}/products`);
};

// FUNCTION LOADER
const detailLoader = async function ({ request, params }) {
  return fetch(
    `${process.env.REACT_APP_API_ENDPOINT_ORIGIN}/products/${params.productId}`
  );
};

// ----------------
// EXPORT
const loaders = { homeLoader, detailLoader };
export default loaders;
