import React from "react";
import { useNavigate } from "react-router-dom";

const stats = [
  { title: "Total Sales", value: "$15,350", growth: "+12.5%", icon: "💰" },
  { title: "Total Orders", value: "125", growth: "+8.2%", icon: "🛍️" },
  { title: "Products", value: "48", growth: "+5.7%", icon: "📦" },
  { title: "Customers", value: "89", growth: "+15.3%", icon: "👥" },
];



const orders = [
  {
    id: "#1023",
    customer: "John",
    product: "iPhone 15",
    amount: "$1200",
    status: "Completed",
  },
  {
    id: "#1024",
    customer: "Alex",
    product: "Watch",
    amount: "$250",
    status: "Pending",
  },
  {
    id: "#1025",
    customer: "Sara",
    product: "Perfume",
    amount: "$90",
    status: "Cancelled",
  },
];

function SellerDashboard() {

  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* SIDEBAR */}
      <aside className="w-64 bg-gradient-to-b from-pink-600 via-purple-800 to-purple-900 text-white p-6">
        <h2 className="text-2xl font-bold text-center mb-10">Cartify</h2>

        <ul className="space-y-3">
          <li
            onClick={() => navigate("/")}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 cursor-pointer"
          >
            🏠 Home
          </li>

          <li
            onClick={() => navigate("/sellerProducts")}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 cursor-pointer"
          >
            📦 Products
          </li>

          <li  onClick={() => navigate("/sellerOrders")}
           className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 cursor-pointer">
            🛒 Orders
          </li>

          <li  onClick={() => navigate("/sellerAnalytics")}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 cursor-pointer">
            📊 Analytics
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 cursor-pointer">
            ⚙️ Settings
          </li>
        </ul>

        <div className="mt-16 p-3 rounded-lg hover:bg-white/10 cursor-pointer flex items-center gap-3">
          👤 Seller Login
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1">
        {/* HEADER */}
        <header className="bg-white px-6 py-4 shadow flex justify-between items-center">
          <div className="relative w-72">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border rounded-full outline-none"
            />
            <span className="absolute right-4 top-2.5 text-gray-400">🔍</span>
          </div>

          <div className="flex items-center gap-6">
            🔔
            <div className="flex items-center gap-2">
              <img
                src="/image/c2.jpg"
                alt="user"
                className="w-10 h-10 rounded-full"
              />
              <span className="text-sm font-medium">John Doe</span>
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <div className="p-6">
          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="bg-white p-6 rounded-xl shadow flex justify-between items-center"
              >
                <div>
                  <h3 className="text-gray-500 text-sm">{stat.title}</h3>
                  <h2 className="text-2xl font-semibold">{stat.value}</h2>
                  <p className="text-green-500 text-sm">{stat.growth}</p>
                </div>
                <div className="text-3xl bg-blue-100 p-4 rounded-full">
                  {stat.icon}
                </div>
              </div>
            ))}
          </div>

          {/* RECENT ORDERS */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-6">Recent Orders</h2>

            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-500 border-b">
                  <th className="py-3">Order ID</th>
                  <th>Customer</th>
                  <th>Product</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b last:border-none">
                    <td className="py-3">{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.product}</td>
                    <td>{order.amount}</td>
                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium
                        ${
                          order.status === "Completed"
                            ? "bg-green-100 text-green-600"
                            : order.status === "Pending"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SellerDashboard;
