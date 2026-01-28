import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "./UserAuthContext";

export default function UserRegister() {
  const { register } = useUserAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    register(form);
    alert("✅ User account created");
    navigate("/user-login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-80 space-y-4">
        <h2 className="text-2xl font-bold text-center">User Register</h2>

        <input
          placeholder="Name"
          className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Email"
          className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="bg-black text-white w-full p-2">
          Register
        </button>
      </form>
    </div>
  );
}
