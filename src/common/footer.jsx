const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-700 via-purple-900 to-pink-600 text-white px-5 pt-12">

      {/* Newsletter */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-3">Stay Updated!</h2>
        <p className="text-lg text-gray-300 mb-6">
          Get exclusive offers & latest trends in your inbox.
        </p>

        <form className="flex justify-center flex-wrap gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-64 rounded-l-md outline-none text-black"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-yellow-500 text-white rounded-r-md hover:bg-orange-500 transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Links */}
      <div className="flex flex-wrap justify-around gap-8 mb-12 text-center sm:text-left">
        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-yellow-400">New Arrivals</a></li>
            <li><a href="#" className="hover:text-yellow-400">Best Sellers</a></li>
            <li><a href="#" className="hover:text-yellow-400">Offers & Discounts</a></li>
            <li><a href="#" className="hover:text-yellow-400">Gift Cards</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-yellow-400">Help Center</a></li>
            <li><a href="#" className="hover:text-yellow-400">Order Tracking</a></li>
            <li><a href="#" className="hover:text-yellow-400">Return & Refund</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-yellow-400">Our Story</a></li>
            <li><a href="#" className="hover:text-yellow-400">Careers</a></li>
            <li><a href="#" className="hover:text-yellow-400">Blog</a></li>
            <li><a href="#" className="hover:text-yellow-400">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>

      {/* Contact */}
      <div className="text-center text-gray-300 mb-6">
        <p>📞 +91 90420 92388 | 📩 support@yourstore.com</p>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-500 text-center py-4 text-gray-400 text-lg">
        © 2025 Cartify. All rights reserved. | Crafted with ❤️ Cartify Team
      </div>

    </footer>
  );
};

export default Footer;
