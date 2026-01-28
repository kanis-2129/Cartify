import { useEffect, useState } from "react";

export default function SellerProductList() {
  const [products, setProducts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("products")) || [
        {
          id: 1,
          name: "Smart Watch",
          category: "Gadgets",
          price: 2999,
          stock: 10,
          image: "https://via.placeholder.com/70",
        },
        {
          id: 2,
          name: "Wireless Earbuds",
          category: "Accessories",
          price: 1999,
          stock: 15,
          image: "https://via.placeholder.com/70",
        },
      ]
    );
  });

  const [popupOpen, setPopupOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const [imageBase64, setImageBase64] = useState("");

  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const openAdd = () => {
    setEditIndex(-1);
    setForm({ name: "", category: "", price: "", stock: "" });
    setImageBase64("");
    setPopupOpen(true);
  };

  const openEdit = (index) => {
    const p = products[index];
    setEditIndex(index);
    setForm({
      name: p.name,
      category: p.category,
      price: p.price,
      stock: p.stock,
    });
    setImageBase64(p.image);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => setImageBase64(reader.result);
    reader.readAsDataURL(file);
  };

  const saveProduct = () => {
    if (
      !form.name ||
      !form.category ||
      !form.price ||
      !form.stock ||
      !imageBase64
    ) {
      alert("Fill all fields & upload image");
      return;
    }

    const newProduct = {
      id: editIndex === -1 ? products.length + 1 : products[editIndex].id,
      ...form,
      price: Number(form.price),
      stock: Number(form.stock),
      image: imageBase64,
    };

    if (editIndex === -1) {
      setProducts([...products, newProduct]);
    } else {
      const updated = [...products];
      updated[editIndex] = newProduct;
      setProducts(updated);
    }

    closePopup();
  };

  const deleteProduct = (index) => {
    if (window.confirm("Delete this product?")) {
      const updated = [...products];
      updated.splice(index, 1);
      setProducts(updated);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#240046] to-[#3c096c] text-white p-8 flex flex-col items-center">
      {/* Back */}
      <div className="w-full max-w-6xl flex justify-start">
        <button
          onClick={() => window.history.back()}
          className="bg-[#7b2cbf] px-4 py-2 rounded-lg text-lg"
        >
          ←
        </button>
      </div>

      {/* Container */}
      <div
        className={`relative w-full max-w-6xl bg-gradient-to-br from-[#3b0a68] to-[#4b00a8] rounded-2xl p-6 mt-20 shadow-[0_0_30px_rgba(157,78,221,0.5)]
        ${popupOpen ? "blur opacity-50 pointer-events-none" : ""}`}
      >
        {/* Add Button */}
        <button
          onClick={openAdd}
          className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-br from-[#8e2de2] to-[#4a00e0] text-3xl shadow-lg hover:scale-110 transition"
        >
          +
        </button>

        <table className="w-full min-w-[700px] text-center border-collapse">
          <thead>
            <tr className="bg-[#5f0f40]">
              <th className="p-3">ID</th>
              <th>Image</th>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <tr
                key={p.id}
                className={`${
                  i % 2 === 0 ? "bg-[#480ca8]" : "bg-[#560bad]"
                } hover:bg-[#7b2cbf] transition`}
              >
                <td className="p-3">#{p.id}</td>
                <td>
                  <img
                    src={p.image}
                    className="w-16 h-16 rounded-lg mx-auto border-2 border-white object-cover"
                  />
                </td>
                <td>{p.name}</td>
                <td>{p.category}</td>
                <td>₹{p.price}</td>
                <td>{p.stock}</td>
                <td className="space-x-2">
                  <button
                    onClick={() => openEdit(i)}
                    className="bg-yellow-400 text-black px-3 py-1 rounded-lg font-bold"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteProduct(i)}
                    className="bg-red-600 px-3 py-1 rounded-lg font-bold"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup */}
      {popupOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-[#5a189a] to-[#7b2cbf] p-6 rounded-xl w-[90%] max-w-sm text-center shadow-xl animate-scale">
            <h2 className="text-xl font-bold mb-4">
              {editIndex === -1 ? "Add Product" : "Edit Product"}
            </h2>

            {["name", "category", "price", "stock"].map((field) => (
              <input
                key={field}
                type={
                  field === "price" || field === "stock" ? "number" : "text"
                }
                placeholder={field.toUpperCase()}
                value={form[field]}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                className="w-full p-2 rounded-lg mb-2 text-black"
              />
            ))}

            <input type="file" accept="image/*" onChange={handleImage} />

            {imageBase64 && (
              <img
                src={imageBase64}
                className="w-24 h-24 mx-auto mt-3 rounded-lg border-2 border-white"
              />
            )}

            <div className="mt-4 space-x-2">
              <button
                onClick={saveProduct}
                className="bg-emerald-400 text-black px-4 py-2 rounded-lg font-bold"
              >
                Save
              </button>
              <button
                onClick={closePopup}
                className="bg-pink-500 px-4 py-2 rounded-lg font-bold"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
