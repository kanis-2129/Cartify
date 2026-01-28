import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../userAuth/UserAuthContext";
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useUserAuth(); // get user state & logout

  const handleLogout = () => {
    logout();
    navigate("/"); // redirect to home after logout
  };

  return (
    <header className="sticky top-0 z-50 shadow-lg">
      <nav className="flex items-center justify-between px-6 md:px-10 py-4 bg-gradient-to-r from-pink-600 via-purple-800 to-pink-500 text-white">
        {/* Logo */}
        <div
          className="text-3xl font-semibold text-yellow-400 flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          🛒 Cartify
        </div>

        {/* Links */}
        <ul
          className={`md:flex gap-8 text-xl font-medium ${
            open ? "block" : "hidden"
          } absolute md:static top-20 left-0 w-full md:w-auto bg-purple-900 md:bg-transparent text-center md:text-left`}
        >
          <li>
            <a className="hover:text-yellow-400" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-yellow-400" href="#product">
              Shop
            </a>
          </li>
          <li>
            <a className="hover:text-yellow-400" href="#our-story">
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("/contact")}
              className="hover:text-yellow-400 cursor-pointer"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          {/* Search Box */}
          <div className="flex bg-white rounded-full px-3 py-1">
            <input
              className="outline-none text-black text-sm"
              placeholder="Search..."
            />
            🔍
          </div>

          {/* Cart Icon */}
          <div
            className="relative cursor-pointer text-2xl"
            onClick={() => navigate("/cart")}
          >
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>

          <Link
            to="/seller-dashboard"
            className="no-underline bg-gradient-to-r from-orange-500 to-pink-600 text-white px-4 py-2 rounded-full font-medium 
             flex items-center gap-2 transition duration-300 ease-in-out 
             hover:opacity-90 hover:scale-105"
          >
            Seller Dashboard
          </Link>

          {/* Account/Profile */}
          {user ? (
            <div className="flex items-center gap-2">
              {/* Profile Circle */}
              <div
                className="w-10 h-10 rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold cursor-pointer"
                title={user.name}
              >
                {user.name.charAt(0).toUpperCase()}
              </div>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded-full hover:scale-105 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate("/user-login")} // redirect to login if not logged in
              className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:scale-105 transition"
            >
              Account
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
