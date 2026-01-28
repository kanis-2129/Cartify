const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="min-h-screen px-10 py-10 bg-gray-100">
      <h2 className="text-3xl font-semibold mb-8">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cart.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-md relative"
            >
              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(index)}
                className="absolute top-3 right-3 text-red-500 text-xl"
              >
                ❌
              </button>

              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg"
              />

              <h3 className="text-lg font-semibold mt-3">
                {item.name}
              </h3>

              <p className="text-red-500 font-semibold">
                {item.price}
              </p>

              <div className="text-yellow-400">{item.rating}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
