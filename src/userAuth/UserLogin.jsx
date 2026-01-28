import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "./UserAuthContext";

export default function UserLogin() {
  const { login } = useUserAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(email, password);

    if (success) {
      navigate("/cart");
    } else {
      alert("❌ Invalid user credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleLogin} className="w-80 space-y-4">
        <h2 className="text-2xl font-bold text-center">User Login</h2>

        <input
          placeholder="Email"
          className="border p-2 w-full"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-black text-white w-full p-2">
          Login
        </button>

        <p><a href="/user-register" className="text-blue-500 flex justify-center">Don't have an account? Register</a></p>
      </form>
    </div>
  );
}
