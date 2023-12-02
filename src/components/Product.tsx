interface ProductProps {
  product: Product;
}

const Product = ({ product }: ProductProps) => {
  return (
    <div className="border rounded-md p-5 space-y-1 flex-1">
      <h2 className="font-semibold">{product.name}</h2>
      <p className="font-thin">${product.price.toFixed(2)}</p>
      <button className="capitalize bg-blue-500 px-4 py-2 rounded">{true ? "Added to Cart" : "Add to Cart"}</button>
    </div>
  );
};

export default Product;
