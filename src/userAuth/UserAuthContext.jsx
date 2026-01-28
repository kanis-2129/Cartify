import { createContext, useContext, useState, useEffect } from "react";

// ✅ Create context
const UserAuthContext = createContext();

// ✅ Hook
export const useUserAuth = () => useContext(UserAuthContext);

// ✅ Provider
export function UserAuthProvider({ children }) {
  const [user, setUser] = useState(null); // logged in user
  const [users, setUsers] = useState([]); // registered users

  // 🔹 Load users from localStorage on mount
  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("cartify_users")) || [];
    setUsers(savedUsers);

    const loggedInUser = JSON.parse(localStorage.getItem("cartify_logged_in")) || null;
    setUser(loggedInUser);
  }, []);

  // 🔹 Save users to localStorage whenever users array changes
  useEffect(() => {
    localStorage.setItem("cartify_users", JSON.stringify(users));
  }, [users]);

  // 🔹 Save logged in user to localStorage whenever user changes
  useEffect(() => {
    localStorage.setItem("cartify_logged_in", JSON.stringify(user));
  }, [user]);

  // 🔹 Register new user
  const register = ({ name, email, password }) => {
    // Check if email already exists
    const existing = users.find((u) => u.email === email);
    if (existing) {
      alert("❌ Email already registered!");
      return false;
    }

    const newUser = { name, email, password };
    setUsers([...users, newUser]);
    alert("✅ Registration successful!");
    return true;
  };

  // 🔹 Login
  const login = (email, password) => {
    const found = users.find((u) => u.email === email && u.password === password);
    if (found) {
      setUser(found);
      return true;
    }
    return false;
  };

  // 🔹 Logout
  const logout = () => {
    setUser(null);
  };

  // 🔹 Is logged in
  const isLoggedIn = !!user;

  return (
    <UserAuthContext.Provider
      value={{ user, isLoggedIn, register, login, logout }}
    >
      {children}
    </UserAuthContext.Provider>
  );
}
