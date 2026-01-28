import { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const revenueData = [
  { name: "Mon", revenue: 12000 },
  { name: "Tue", revenue: 15000 },
  { name: "Wed", revenue: 9800 },
  { name: "Thu", revenue: 17000 },
  { name: "Fri", revenue: 21000 },
  { name: "Sat", revenue: 26000 },
  { name: "Sun", revenue: 30000 },
];

const productData = [
  { name: "Mobile", sales: 400 },
  { name: "Watch", sales: 300 },
  { name: "Headphones", sales: 200 },
  { name: "Shoes", sales: 150 },
];

const customerData = [
  { name: "Jan", customers: 120 },
  { name: "Feb", customers: 200 },
  { name: "Mar", customers: 280 },
  { name: "Apr", customers: 350 },
  { name: "May", customers: 420 },
];

const categoryData = [
  { name: "Electronics", value: 45 },
  { name: "Fashion", value: 25 },
  { name: "Beauty", value: 15 },
  { name: "Others", value: 15 },
];

const COLORS = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444"];

export default function SellerAnalytics() {
  const [range, setRange] = useState("7");

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* MAIN */}
      <main className="flex-1">
        {/* HEADER */}
        <header className="bg-white px-6 py-4 shadow flex flex-col md:flex-row md:justify-between gap-4">
          <button
            onClick={() => window.history.back()}
            className="bg-[#7b2cbf] text-white px-3 py-2 rounded-lg text-lg"
          >
            ←
          </button>
          <h2 className="text-2xl font-semibold">Analytics Dashboard</h2>

          <select
            value={range}
            onChange={(e) => setRange(e.target.value)}
            className="border px-3 py-2 rounded-lg"
          >
            <option value="7">Last 7 Days</option>
            <option value="30">Last 30 Days</option>
            <option value="90">Last 90 Days</option>
            <option value="365">Last Year</option>
          </select>
        </header>

        {/* CONTENT */}
        <div className="p-6 space-y-8">
          {/* TOP METRICS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Total Revenue", value: "₹3,25,000", change: "+12%" },
              { title: "Total Orders", value: "1,245", change: "+8%" },
              { title: "Customers", value: "892", change: "+15%" },
              { title: "Conversion Rate", value: "3.2%", change: "+0.5%" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl shadow p-5">
                <p className="text-gray-500 text-sm">{item.title}</p>
                <h3 className="text-2xl font-bold mt-2">{item.value}</h3>
                <p className="text-green-600 text-sm mt-1">{item.change}</p>
              </div>
            ))}
          </div>

          {/* CHART GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Revenue */}
            <div className="bg-white rounded-xl shadow p-6 h-[320px]">
              <h3 className="font-semibold mb-4">Revenue Overview</h3>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#6366f1"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Top Products */}
            <div className="bg-white rounded-xl shadow p-6 h-[320px]">
              <h3 className="font-semibold mb-4">Top Products</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={productData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sales" fill="#22c55e" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* BOTTOM CHARTS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Customers */}
            <div className="bg-white rounded-xl shadow p-6 h-[300px]">
              <h3 className="font-semibold mb-4">Customer Growth</h3>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={customerData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="customers"
                    stroke="#f59e0b"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl shadow p-6 h-[300px]">
              <h3 className="font-semibold mb-4">Sales by Category</h3>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={90}
                  >
                    {categoryData.map((_, index) => (
                      <Cell key={index} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
