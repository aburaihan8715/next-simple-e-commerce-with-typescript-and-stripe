"use client";

import { useCart } from "./CartContext";

const Cart = () => {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart } = useCart();

  const totalAmount = cart?.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleDecrement = (productId: string) => {
    decrementQuantity(productId);

    const product = cart.find((item: Product) => item.id === productId);
    if (product && product.quantity == 0) {
      removeFromCart(productId);
    }
  };
  return (
    <div className="border p-4 rounded-md">
      <h3 className="text-center capitalize font-medium mb-5">Your Cart</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <ul className="space-y-1">
          {cart?.map((item) => (
            <li key={item.id} className="flex justify-between items-center">
              <div>
                <p className="">{item.name}</p>
                <p className="font-thin">
                  ${item.price.toFixed(2)} x {item.quantity}
                </p>
              </div>
              <div className="flex gap-2 justify-center items-center">
                <button onClick={() => handleDecrement(item.id)} className="w-8 h-8 rounded bg-red-500 hover:ring-1 hover:ring-yellow-50">
                  -
                </button>
                <button onClick={() => incrementQuantity(item.id)} className="w-8 h-8 rounded bg-blue-500 hover:ring-1 hover:ring-yellow-50">
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <p className="font-medium my-4">Total Amount: ${totalAmount.toFixed(2)}</p>
      <button className="bg-green-500 px-4 py-2 rounded capitalize hover:ring-1 hover:ring-yellow-50">buy now</button>
    </div>
  );
};

export default Cart;
