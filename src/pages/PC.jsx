import ProductGrid from "../components/ProductGrid";

const products = {
  pc: [
    {
      name: "HP Pavilion",
      price: "₹69,999",
      rating: "★★★★☆",
      img: "/image/pc1.jpg",
    },
    {
      name: "Dell Inspiron",
      price: "₹74,999",
      rating: "★★★★★",
      img: "/image/pc2.jpg",
    },
    {
      name: "MacBook Air M2",
      price: "₹1,19,999",
      rating: "★★★★★",
      img: "/image/pc3.jpg",
    },
    {
      name: "Lenovo ThinkPad",
      price: "₹89,999",
      rating: "★★★★☆",
      img: "/image/pc4.jpg",
    },
  ],
};

function PC({ addToCart }) {
  return (
    <div className="font-[Poppins] bg-[#f8f9fb] min-h-screen">
      <header className="bg-gradient-to-r from-pink-600 via-purple-800 to-pink-500 text-white text-center py-5 text-2xl font-semibold">
        Cartify PCs
      </header>

      <section className="px-4 py-10 text-center">
        <h2 className="text-3xl font-semibold mb-8">Computers & Laptops</h2>
        <ProductGrid items={products.pc} addToCart={addToCart}/>
      </section>
    </div>
  );
}

export default PC;
