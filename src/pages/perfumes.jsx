import ProductGrid from "../components/ProductGrid";

const products = {
  perfume: [
    {
      name: "Dior Sauvage",
      price: "₹9,999",
      rating: "★★★★★",
      img: "/image/perfume1.jpg",
    },
    {
      name: "Fogg Xtremo",
      price: "₹499",
      rating: "★★★★☆",
      img: "/image/perfume2.jpg",
    },
    {
      name: "Villain Hydra",
      price: "₹1,499",
      rating: "★★★★☆",
      img: "/image/perfume3.jpg",
    },
    {
      name: "Park Avenue",
      price: "₹799",
      rating: "★★★☆☆",
      img: "/image/perfume4.jpg",
    },
  ],
};

function Perfumes({ addToCart }) {
  return (
    <div className="font-[Poppins] bg-[#f8f9fb] min-h-screen">
      <header className="bg-gradient-to-r from-pink-600 via-purple-800 to-pink-500 text-white text-center py-5 text-2xl font-semibold">
        Cartify Perfumes
      </header>

      <section className="px-4 py-10 text-center">
        <h2 className="text-3xl font-semibold mb-8">Perfume Collection</h2>
        <ProductGrid items={products.perfume} addToCart={addToCart}/>
      </section>
    </div>
  );
}

export default Perfumes;
