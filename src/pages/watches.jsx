import ProductGrid from "../components/ProductGrid";

const products = {
  watches: [
    { name: "Apple Watch Series 9", price: "₹39,999", rating: "★★★★★", img: "/image/watch1.jpg" },
    { name: "Samsung Galaxy Watch 6", price: "₹29,999", rating: "★★★★☆", img: "/image/watch2.jpg" },
    { name: "Fossil Smartwatch", price: "₹19,999", rating: "★★★★☆", img: "/image/watch3.jpg" },
    { name: "Tag Heuer Connected", price: "₹1,50,000", rating: "★★★★★", img: "/image/watch4.jpg" },
  ],
};

export default function Watches({ addToCart }) {
  return (
    <div className="font-[Poppins] bg-[#f8f9fb] min-h-screen">
      <header className="bg-gradient-to-r from-pink-600 via-purple-800 to-pink-500 text-white text-center py-5 text-2xl font-semibold">
        Cartify Watches
      </header>

      <section className="px-4 py-10 text-center">
        <h2 className="text-3xl font-semibold mb-8">Top Watches</h2>
        <ProductGrid items={products.watches} addToCart={addToCart} />
      </section>
    </div>
  );
}
