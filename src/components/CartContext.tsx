"use client";
import { createContext, useContext, useState } from "react";

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  incrementQuantity: (productId: string) => void;
  decrementQuantity: (productId: string) => void;
}

interface CartContextProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const incrementQuantity = (productId: string) => {
    const updatedCart = cart.map((item) => (item.id === productId ? { ...item, quantity: item.quantity + 1 } : item));
    setCart(updatedCart);
  };

  const decrementQuantity = (productId: string) => {
    const updatedCart = cart.map((item) => (item.id === productId ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item));

    const filteredCart = updatedCart.filter((item) => item.quantity > 0);
    setCart(filteredCart);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a cartContextProvider");
  }
  return context;
};
