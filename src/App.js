import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import { UserAuthProvider } from "./userAuth/UserAuthContext";
import UserLogin from "./userAuth/UserLogin";
import UserAuthLanding from "./userAuth/UserAuthLanding";
import UserRegister from "./userAuth/UserRegister";
import UserProtectedRoute from "./userAuth/UserProtectedRoute";

import Navbar from "./components/nav";
import Hero from "./components/hero";
import Products from "./components/Products";
import FeaturedProducts from "./components/FeaturedProducts";
import About from "./components/About";
import Footer from "./common/footer";
import ScrollToTop from "./components/ScrollToTop";

import Cart from "./pages/Cart";
import Contact from "./pages/contact";

import Mobiles from "./pages/mobiles";
import Watches from "./pages/watches";
import PC from "./pages/PC";
import Perfumes from "./pages/perfumes";
import Dresses from "./pages/Dresses";
import Gadgets from "./pages/gatgets";
import SellerAuth from "./pages/dashboard/seller";
import SellerDashboard from "./pages/dashboard/SellerDashboard";
import SellerProductList from "./pages/dashboard/sellerProduct";
import SellerOrders from "./pages/dashboard/sellerOrder";
import Analytics from "./pages/dashboard/sellerAnalytics";

// 🔹 MAIN LAYOUT
function MainLayout({ children, cartCount }) {
  return (
    <>
      <Navbar cartCount={cartCount} />
      {children}
      <Footer />
    </>
  );
}

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <UserAuthProvider> {/* ✅ Provider outside Router */}
      <Router>
        <ScrollToTop />

        <Routes>

          {/* 🏠 HOME */}
          <Route
            path="/"
            element={
              <MainLayout cartCount={cart.length}>
                <Hero />
                <Products />
                <FeaturedProducts />
                <About />
              </MainLayout>
            }
          />

          {/* 👤 USER AUTH */}
          <Route path="/user-auth" element={<UserAuthLanding />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/user-register" element={<UserRegister />} />

          {/* 🛒 CART (PROTECTED) */}
          <Route
            path="/cart"
            element={
              <UserProtectedRoute>
                <MainLayout cartCount={cart.length}>
                  <Cart cart={cart} removeFromCart={removeFromCart} />
                </MainLayout>
              </UserProtectedRoute>
            }
          />

          {/* 🛍️ SHOP PAGES */}
          <Route
            path="/shop/mobile"
            element={
              <MainLayout cartCount={cart.length}>
                <Mobiles addToCart={addToCart} />
              </MainLayout>
            }
          />
          <Route
            path="/shop/watch"
            element={
              <MainLayout cartCount={cart.length}>
                <Watches addToCart={addToCart} />
              </MainLayout>
            }
          />
          <Route
            path="/shop/pc"
            element={
              <MainLayout cartCount={cart.length}>
                <PC addToCart={addToCart} />
              </MainLayout>
            }
          />
          <Route
            path="/shop/perfume"
            element={
              <MainLayout cartCount={cart.length}>
                <Perfumes addToCart={addToCart} />
              </MainLayout>
            }
          />
          <Route
            path="/shop/dresses"
            element={
              <MainLayout cartCount={cart.length}>
                <Dresses addToCart={addToCart} />
              </MainLayout>
            }
          />

          <Route
            path="/shop/gadgets"
            element={
              <MainLayout cartCount={cart.length}>
                <Gadgets addToCart={addToCart} />
              </MainLayout>
            }
          />


          {/* 📞 CONTACT */}
          <Route path="/contact" element={<Contact />} />

          {/* 🧑‍💼 SELLER */}
          <Route path="/seller" element={<SellerAuth />} />
          <Route path="/seller-dashboard" element={<SellerDashboard />} />
          <Route path="/SellerProducts" element={<SellerProductList />} />
          <Route path="/sellerOrders" element={<SellerOrders />} />
          <Route path="/sellerAnalytics" element={<Analytics />} />

        </Routes>
      </Router>
    </UserAuthProvider>
  );
}

export default App;
