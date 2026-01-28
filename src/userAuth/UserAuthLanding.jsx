import { useNavigate } from "react-router-dom";

export default function UserAuthLanding() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6">
      <h1 className="text-3xl font-bold">Welcome! Please login or register</h1>

      <div className="flex gap-4">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:scale-105 transition"
          onClick={() => navigate("/user-login")}
        >
          Login
        </button>

        <button
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:scale-105 transition"
          onClick={() => navigate("/user-register")}
        >
          Register
        </button>
      </div>
    </div>
  );
}
