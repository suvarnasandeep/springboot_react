import { useParams, useHistory } from "react-router-dom";
import { useState } from "react";

const SingleProduct = () => {
  const params = useParams();
  console.log(params.id);

  const history = useHistory();

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Havana",
      price: "299",
      size: "small",
    },
    {
      id: 2,
      name: "chicken",
      price: "399",
      size: "large",
    },
    {
      id: 3,
      name: "Carbonara",
      price: "500",
      size: "medium",
    },
    {
      id: 4,
      name: "Margarita",
      price: "450",
      size: "small",
    },
    {
      id: 5,
      name: "Margarita",
      price: "450",
      size: "small",
    },
    {
      id: 6,
      name: "Paneer",
      price: "250",
      size: "Medium",
    },
    {
      id: 7,
      name: "Cheese",
      price: "430",
      size: "Large",
    },
    {
      id: 8,
      name: "Chicken Cheese",
      price: "550",
      size: "Large",
    },
  ]);

  //console.log(products);
  let curProduct;
  products.map((product) => {
    if (product.id == params.id) {
      curProduct = product;
    }
  });

  return (
    <div className="container mx-auto mt-12">
      <button
        className="mb-12 font-bold"
        onClick={() => {
          history.goBack();
        }}
      >
        Back
      </button>

      <div className="flex">
        <img src="/images/peproni.png" alt="pizza" />
        <div className="ml-16">
          <h1 className="text-xl font-bold">{curProduct.name}</h1>
          <div className="text-md">{curProduct.size}</div>
          <div className="font-bold mt-2">₹{curProduct.price}</div>
          <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
