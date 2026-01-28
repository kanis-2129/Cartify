import ProductGrid from "../components/ProductGrid";

const products = {
  mobiles: [
    { name: "iPhone 15", price: "₹79,999", rating: "★★★★★", img: "/image/mobile1.jpg" },
    { name: "Samsung Galaxy S23", price: "₹69,999", rating: "★★★★☆", img: "/image/mobile2.jpg" },
    { name: "OnePlus 12", price: "₹49,999", rating: "★★★★☆", img: "/image/mobile3.jpg" },
    { name: "Pixel 8", price: "₹59,999", rating: "★★★★★", img: "/image/mobile4.jpg" },
  ],
};

export default function Mobiles({ addToCart }) {
  return (
    <div className="font-[Poppins] bg-[#f8f9fb] min-h-screen">
      <header className="bg-gradient-to-r from-pink-600 via-purple-800 to-pink-500 text-white text-center py-5 text-2xl font-semibold">
        Cartify Mobiles
      </header>

      <section className="px-4 py-10 text-center">
        <h2 className="text-3xl font-semibold mb-8">Top Smartphones</h2>
        <ProductGrid items={products.mobiles} addToCart={addToCart} />
      </section>
    </div>
  );
}
