import Product from "../components/Product";
import { useState, useEffect, useContext } from "react";

const Products = () => {
  //accessing value global across components
  // const { name, sname } = useContext(CartContext);

  //destructuring assignment
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

  //when component mounted then callback will be executed
  /*useEffect(() => {
    fetch("/products")
      .then((response) => {
        response.json();
      })
      .then((products) => {
        setProducts(products);
        //console.log(products);
      });
  }, [products]);
*/
  return (
    <div className="container mx-auto pb-24">
      <h1 className="text-lg font-bold my-8">Products</h1>
      <div className="grid grid-cols-4 my-8 gap-24">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
