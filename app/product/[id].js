// pages/[id].js or pages/[name].js

import { useRouter } from 'next/router';

const ProductPage = () => {
    console.log(router.query);
  const router = useRouter();
  const { id } = router.query; // or const { name } = router.query;

  // Fetch product details based on the id or name

  return (
    <div>
      <h1>Product Page</h1>
      <p>Product ID: {id}</p>
      {/* Display other product details */}
    </div>
  );
};

export default ProductPage;
