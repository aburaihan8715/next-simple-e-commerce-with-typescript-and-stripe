import Cart from "@/components/Cart";
import Product from "@/components/Product";

const products: Product[] = [
  {
    id: "1",
    name: "GoPro",
    price: 57,
    quantity: 0,
  },
  {
    id: "2",
    name: "Tripod",
    price: 7.99,
    quantity: 0,
  },
  {
    id: "3",
    name: "Bag",
    price: 4.99,
    quantity: 0,
  },
];

export default function Home() {
  return (
    <main className="space-y-6">
      <section>
        <h1 className="text-2xl font-medium capitalize mb-5">E-commerce Card System</h1>
        <div className="flex gap-4">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section>
        <Cart />
      </section>
    </main>
  );
}
