import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";
import HomePage from "./pages/Home/HomePage";
import Login from "./pages/Auth/login/Login";
import Cart from "./pages/Cart/Cart";
import Items from "./pages/Items/Items";
import SignleItem from "./pages/SignleItem/SignleItem";
import AboutUS from "./pages/Legality/AboutUs/AboutUS";
import Contact from "./pages/Legality/Contact/Contact";
import FAQ from "./pages/Legality/FAQ/FAQ";
import Helpcenter from "./pages/Legality/HelpCenter/Helpcenter";
import Privacy from "./pages/Legality/PrivacyPolicy/Privacy";
import Termsconditions from "./pages/Legality/Terms&Conditions/Termsconditions";
import Admin from "./pages/admin/Admin";
import RecylingPolicy from "./pages/Legality/RecyclingPolicy/RecylingPolicy";
import DeleveryPolicy from "./pages/Legality/DeleveryPolicy/DeleveryPolicy";
import ReturnPolicy from "./pages/Legality/Return&cancellation/ReturnPolicy";
const App = () => {
  const ToastCheck = () => {
    toast.error("Waiting for the action to complete...");
  };
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:category" element={<Items />} />
          <Route path="/:category/:itemname/:itemno" element={<SignleItem />} />
          <Route path="/account/login" element={<Login />} />
          <Route path="/checkout/cart" element={<Cart />} />

          {/* terms */}
          <Route path="/about-us" element={<AboutUS />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-conditions" element={<Termsconditions />} />
          <Route path="/recycling-policy" element={<RecylingPolicy />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route
            path="/shipping&delivery-policy"
            element={<DeleveryPolicy />}
          />
          <Route path="/helpcentre" element={<Helpcenter />} />
          {/* product upload By Admin */}
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <Toaster />
    </>
  );
};

export default App;
