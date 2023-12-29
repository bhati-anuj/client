import Image from "next/image";
import makeup from "../../assets/makeup.jpg";
import ReviewSection from "../components/ReviewSection";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}


const ProductDetails = async ({ id }) => {
  const data = await getData(id);
  const productDes = data.data;
  


  return (
    <div className="p-10">
      <div className="flex mb-4  flex-wrap">
        <div className="flex-1">
          <Image src={productDes.img} height={500} width={500} alt="product-image" />
        </div>
        <div className="flex-1">
          <p>
            <span className="text-4xl me-2 ">₹{productDes.price}</span>
            <span className="line-through me-2">
              MRP ₹{productDes.mrp}{" "}
            </span>{" "}
            Incl. of all taxes
          </p>
          <p className="mt-2 text-lg text-red-600">{productDes.name}</p>
          <p className="bg-gray-200 w-max p-2 rounded mt-2">
            ★({productDes.ratings}/5)
          </p>
          <div className="mt-6">
            <p className="font-medium mb-2">Delivery Option</p>
            <div className="flex rounded-lg shadow-sm">
              <input
                type="number"
                id="hs-trailing-button-add-on"
                name="hs-trailing-button-add-on"
                className="py-3 px-4 block w-full border-red-500 shadow-md rounded-s-lg text-sm focus:z-10 focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Enter 6 digit pincode"
              />

              <button
                type="button"
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-red-500 bg-white text-red-600 hover:bg-red-500 hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Check
              </button>
            </div>
          </div>
          <div className=" my-6  flex justify-between gap-4">
            <button
              type="button"
              className="py-4 px-4 w-6/12 inline-flex items-center gap-x-2 text-md font-semibold rounded-lg border border-transparent justify-center bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Add to Cart
            </button>
            <button
              type="button"
              className="py-4 px-4 w-6/12  inline-flex justify-center items-center gap-x-2 text-md font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Buy Now
            </button>
          </div>
          <details className="border-gray-500 border-b-2 my-4 py-4">
            <summary className="text-xl font-medium text-gray-400 ">
              DESCRIPTION
            </summary>
            <p>
              The Inspiration: Discover the Bhumi Rose Gold Shy Ebony Ring,
              where delicate elegance meets hidden strength. Let this ring
              always remind you to embrace your inner resilience.
            </p>
          </details>
          <details className="border-gray-500 border-b-2 my-4 py-4">
            <summary className="text-xl font-medium text-gray-400 ">
              SHIPPING
            </summary>
            <ul>
              <li>
                Free express shipping 30 days return policy 6 month warranty
              </li>
              <li>
                International shipments will be delivered in 14 days Brand owned
              </li>
              <li>
                and marketed by: Indiejewel Fashions Private Limited 3rd floor,
              </li>

              <li>
                Magnum Vista, Raghuvanahalli, Bangalore, Karnataka - 560062
              </li>
            </ul>
          </details>
        </div>
      </div>
      <ReviewSection productId={id} />
    </div>
  );
};

export default ProductDetails;
