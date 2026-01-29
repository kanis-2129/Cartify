export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-700 via-purple-900 to-pink-600 text-white px-6 pt-12 pb-6">
      
      {/* Newsletter */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Stay Updated!</h2>
        <p className="text-gray-200 text-lg mb-6">
          Get exclusive offers & latest trends in your inbox.
        </p>

        <form className="flex justify-center items-center flex-wrap gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="px-4 py-2 w-64 rounded-l-md outline-none text-black"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-r-md hover:bg-yellow-500 transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10 text-center md:text-left">
        
        <div>
          <h3 className="text-xl font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-300">
            <li>New Arrivals</li>
            <li>Best Sellers</li>
            <li>Offers & Discounts</li>
            <li>Gift Cards</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Help Center</li>
            <li>Order Tracking</li>
            <li>Return & Refund</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Our Story</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

      </div>

      {/* Contact */}
      <div className="text-center mb-6 text-gray-300">
        📞 +91 90420 92388 | 📩 support@yourstore.com
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 pt-4 text-center text-gray-400 text-sm">
        © 2025 Cartify. All rights reserved. | Crafted with ❤️ Cartify Team
      </div>

    </footer>
  );
}
