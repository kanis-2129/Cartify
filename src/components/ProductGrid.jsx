import { useUserAuth } from "../userAuth/UserAuthContext";
import { useNavigate } from "react-router-dom";

const ProductGrid = ({ items, addToCart }) => {
  const { isLoggedIn } = useUserAuth();
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    if (!isLoggedIn) {
      if (window.confirm("⚠️ Please login/register first! Do you want to register now?")) {
        navigate("/user-register");
      }
      return;
    }

    addToCart(item);
    alert(`✅ ${item.name} added to cart!`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md p-4 transition-transform hover:-translate-y-1"
        >
          <img src={item.img} alt={item.name} className="w-full rounded-xl" />

          <h3 className="text-lg font-semibold mt-3 text-gray-800">
            {item.name}
          </h3>

          <p className="text-red-500 font-semibold">{item.price}</p>

          <div className="text-yellow-400 mb-3">{item.rating}</div>

          <button
            onClick={() => handleAddToCart(item)}
            className="w-full bg-gradient-to-r from-pink-600 via-purple-800 to-pink-500 text-white py-2 rounded-full font-medium transition hover:scale-105"
          >
            🛒 Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
