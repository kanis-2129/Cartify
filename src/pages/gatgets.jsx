import ProductGrid from "../components/ProductGrid";

const products = {
  gadgets: [
    { name: "Wireless Headphones", price: "₹2,499", rating: "★★★★☆", img: "/image/gadget1.jpg" },
    { name: "Smart Watch", price: "₹3,999", rating: "★★★★★", img: "/image/gadget2.jpg" },
    { name: "Bluetooth Speaker", price: "₹1,799", rating: "★★★★☆", img: "/image/gadget3.jpg" },
    { name: "Power Bank 20000mAh", price: "₹2,299", rating: "★★★★★", img: "/image/gadget4.jpg" },
  ],
};

function Gadgets({ addToCart }) {
  return (
    <div className="font-[Poppins] bg-[#f8f9fb] min-h-screen">
      <header className="bg-gradient-to-r from-blue-600 via-purple-800 to-blue-500 text-white text-center py-5 text-2xl font-semibold">
        Cartify Gadgets
      </header>

      <section className="px-4 py-10 text-center">
        <h2 className="text-3xl font-semibold mb-8">Latest Gadgets</h2>
        <ProductGrid items={products.gadgets} addToCart={addToCart} />
      </section>
    </div>
  );
}

export default Gadgets;
