"use client";
import { useCart } from "./CartContext";

interface ProductProps {
  product: Product;
}

const Product = ({ product }: ProductProps) => {
  const { addToCart, cart } = useCart();
  const isProductInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="border rounded-md p-5 space-y-1 flex-1">
      <h2 className="font-semibold">{product.name}</h2>
      <p className="font-thin">${product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        disabled={isProductInCart}
        className={`${
          isProductInCart ? "bg-gray-400 text-gray-300 cursor-not-allowed" : "bg-blue-500 hover:ring-1 hover:ring-yellow-50"
        } capitalize  px-4 py-2 rounded  `}
      >
        {isProductInCart ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default Product;
