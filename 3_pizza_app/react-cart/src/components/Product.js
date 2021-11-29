import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import { useContext, useState } from "react";

const Product = (props) => {
  //console.log(props);
  const { cart, setCart } = useContext(CartContext);
  //const { product } = props;

  const [isAdding, setIsAdding] = useState(false);

  const addToCart = (event, product) => {
    event.preventDefault();

    //cloning the original comp
    let _cart = { ...cart };

    if (!_cart.items) {
      _cart.items = {};
    }

    if (_cart.items[product.id]) {
      _cart.items[product.id] = _cart.items[product.id] + 1;
    } else {
      _cart.items[product.id] = 1;
    }

    if (!_cart.totalItems) {
      _cart.totalItems = 0;
    }

    _cart.totalItems += 1;

    setCart(_cart);

    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <Link to={`/products/${props.product.id}`}>
      <div>
        <img src="/images/peproni.png" alt="pizza" />

        <div className="text-center">
          <h2 className="text-lg font-bold py-2">{props.product.name}</h2>
          <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
            {props.product.size}
          </span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span>₹ {props.product.price}</span>
          <button
            disabled={isAdding}
            onClick={(e) => {
              addToCart(e, props.product);
            }}
            className={`${
              isAdding ? `bg-green-500` : `bg-yellow-500`
            }  py-1 px-4 rounded-full font-bold`}
          >
            ADD{isAdding ? "ED" : ""}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Product;
