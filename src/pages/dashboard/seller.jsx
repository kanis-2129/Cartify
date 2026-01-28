import { useState, } from "react";
import { useNavigate } from "react-router-dom";

function SellerAuth() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const loginSeller = () => {
    alert("Login successful!");
    navigate("/seller-dashboard");
  };

  const registerSeller = () => {
    alert("Seller registered! Please login.");
    setIsLogin(true);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#6b1f5f] to-[#4a1a44] p-6">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* LEFT – FORM */}
        <div className="p-10 flex flex-col justify-center">
          {/* Brand */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-700 to-pink-500 flex items-center justify-center text-white font-bold">
              SP
            </div>
            <h2 className="text-lg font-semibold text-gray-700">
              Seller Panel
            </h2>
          </div>

          {/* Avatar */}
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-3xl">
            {isLogin ? "👤" : "🛍️"}
          </div>

          <h3 className="text-center text-xl font-semibold text-purple-700 mb-6">
            {isLogin ? "Login" : "Sign Up"}
          </h3>

          {/* FORM */}
          <div className="space-y-4 max-w-sm mx-auto w-full">
            {!isLogin && (
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-lg border outline-none focus:ring-2 focus:ring-purple-500"
              />
            )}

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg border outline-none focus:ring-2 focus:ring-purple-500"
            />

            {!isLogin && (
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 rounded-lg border outline-none focus:ring-2 focus:ring-purple-500"
              />
            )}

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-lg border outline-none focus:ring-2 focus:ring-purple-500"
            />

            <button
              onClick={isLogin ? loginSeller : registerSeller}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-700 to-pink-500 text-white font-semibold shadow-lg hover:scale-[1.02] transition"
            >
              {isLogin ? "Login" : "Create Account"}
            </button>

            <p className="text-center text-sm text-gray-500">
              {isLogin ? "Don’t have an account?" : "Already have an account?"}
              <span
                onClick={() => setIsLogin(!isLogin)}
                className="text-purple-700 font-semibold cursor-pointer ml-1"
              >
                {isLogin ? "Sign Up" : "Login"}
              </span>
            </p>
          </div>
        </div>

        {/* RIGHT – HERO */}
        <div className="hidden md:flex relative bg-gradient-to-b from-[#3e1240] to-[#581f49] text-white p-12 items-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,95,158,0.15),transparent_20%),radial-gradient(circle_at_80%_80%,rgba(122,43,123,0.15),transparent_20%)]"></div>

          <div className="relative z-10">
            <h2 className="text-5xl font-bold mb-4">Welcome Seller!</h2>
            <p className="text-white/80 leading-relaxed">
              Manage your products, track analytics, and grow your business with
              Cartify’s powerful seller dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerAuth;
