import ProductGrid from "../components/ProductGrid";

const products = {
  dresses: [
    { name: "Men Casual Shirt", price: "₹1,499", rating: "★★★★☆", img: "/image/dress1.jpg" },
    { name: "Women Kurti", price: "₹1,999", rating: "★★★★★", img: "/image/dress2.jpg" },
    { name: "Denim Jacket", price: "₹2,999", rating: "★★★★☆", img: "/image/dress3.jpg" },
    { name: "Party Wear Dress", price: "₹3,499", rating: "★★★★★", img: "/image/dress4.jpg" },
  ],
};

function Dresses({ addToCart }) {
  return (
    <div className="font-[Poppins] bg-[#f8f9fb] min-h-screen">
      <header className="bg-gradient-to-r from-pink-600 via-purple-800 to-pink-500 text-white text-center py-5 text-2xl font-semibold">
        Cartify Dresses
      </header>

      <section className="px-4 py-10 text-center">
        <h2 className="text-3xl font-semibold mb-8">Fashion Collection</h2>
        <ProductGrid items={products.dresses} addToCart={addToCart}/>
      </section>
    </div>
  );
}

export default Dresses;
