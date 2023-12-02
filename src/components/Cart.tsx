const Cart = () => {
  return (
    <div className="border p-4 rounded-md">
      <h3 className="text-center capitalize font-medium mb-5">Your Cart</h3>
      <ul className="space-y-1">
        <li className="flex justify-between items-center">
          <div>
            <p className="">product 1</p>
            <p className="font-thin">$759 x 1</p>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <button className="w-8 h-8 rounded bg-red-500">-</button>
            <button className="w-8 h-8 rounded bg-blue-500">+</button>
          </div>
        </li>

        <li className="flex justify-between items-center">
          <div>
            <p className="">product 2</p>
            <p className="font-thin">$759 x 1</p>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <button className="w-8 h-8 rounded bg-red-500">-</button>
            <button className="w-8 h-8 rounded bg-blue-500">+</button>
          </div>
        </li>
      </ul>
      <p className="font-medium my-4">Total Amount: $22.96</p>
      <button className="bg-green-500 px-4 py-2 rounded">buy now</button>
    </div>
  );
};

export default Cart;
