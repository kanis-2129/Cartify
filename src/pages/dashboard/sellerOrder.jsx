import { useState } from "react";

const ordersData = [
  {
    id: "#1023",
    customer: "John Doe",
    date: "2025-01-10",
    products: "iPhone 15",
    total: "₹1,20,000",
    status: "completed",
  },
  {
    id: "#1024",
    customer: "Alex",
    date: "2025-01-11",
    products: "Smart Watch",
    total: "₹25,000",
    status: "pending",
  },
  {
    id: "#1025",
    customer: "Sara",
    date: "2025-01-12",
    products: "Perfume",
    total: "₹9,000",
    status: "cancelled",
  },
];

export default function SellerOrders() {
  const [orders, setOrders] = useState(ordersData);
  const [filter, setFilter] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState(null);
  // Example: mark an order as completed
  const markCompleted = (id) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status: "completed" } : o)),
    );
  };

  const filteredOrders =
    filter === "all" ? orders : orders.filter((o) => o.status === filter);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* MAIN */}
      <main className="flex-1 mt-2">
        {/* HEADER */}
        <header className="bg-white px-6 py-4 shadow flex items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => window.history.back()}
              className="bg-[#7b2cbf] text-white px-3 py-2 rounded-lg text-lg"
            >
              ←
            </button>

            <div className="relative w-64 hidden sm:block">
              <input
                placeholder="Search orders..."
                className="w-full px-4 py-2 border rounded-full"
              />
              <span className="absolute right-4 top-2.5 text-gray-400">🔍</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            🔔
            <div className="flex items-center gap-2">
              <img
                src="/image/t2.jpg"
                className="w-9 h-9 rounded-full"
                alt="User profile"
              />

              <span className="text-sm font-medium">John Doe</span>
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <div className="p-6">
          {/* TOP BAR */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <h2 className="text-2xl font-semibold">Orders Management</h2>

            <div className="flex gap-3 flex-wrap">
              <select
                onChange={(e) => setFilter(e.target.value)}
                className="px-3 py-2 border rounded-lg"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>

              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                ⬇ Export
              </button>
            </div>
          </div>

          {/* TABLE */}
          <div className="bg-white rounded-xl shadow overflow-x-auto">
            <table className="w-full min-w-[700px] text-left">
              <thead className="bg-gray-50 text-gray-500">
                <tr>
                  <th className="p-4">Order ID</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Products</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-t hover:bg-gray-50">
                    <td className="p-4 font-medium">{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.date}</td>
                    <td>{order.products}</td>
                    <td>{order.total}</td>
                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium
                        ${
                          order.status === "completed"
                            ? "bg-green-100 text-green-600"
                            : order.status === "pending"
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-red-100 text-red-600"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td>
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="text-blue-600 font-medium"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* MODAL */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] max-w-lg rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Order Details</h3>

            <div className="space-y-2 text-sm">
              <p>
                <b>Order ID:</b> {selectedOrder.id}
              </p>
              <p>
                <b>Customer:</b> {selectedOrder.customer}
              </p>
              <p>
                <b>Date:</b> {selectedOrder.date}
              </p>
              <p>
                <b>Total:</b> {selectedOrder.total}
              </p>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setSelectedOrder(null)}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Close
              </button>
              <button
                onClick={() => {
                  markCompleted(selectedOrder.id);
                  setSelectedOrder(null);
                }}
                className="px-4 py-2 bg-green-600 text-white rounded-lg"
              >
                Mark Completed
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
