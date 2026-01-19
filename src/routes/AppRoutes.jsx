import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";


import AdminLayout from "../layout/AdminLayout.jsx";
import ProtectedAdminRoute from "../components/admin/ProtectedAdminRoute.jsx";
import MainLayout from "../layout/MainLayout.jsx";

import Home from "../pages/public/Home.jsx";
import About from "../pages/public/About.jsx";
import Services from "../pages/public/Services.jsx";
import Careers from "../pages/public/Careers.jsx";
import Blog from "../pages/public/Blog.jsx";
import Contact from "../pages/public/Contact.jsx";
import BookDemo from "../pages/public/BookDemo.jsx";
import AdminLogin from "../pages/admin/AdminLogin.jsx";

import AdminRoutes from "./AdminRoutes.jsx";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);

  return null;
};

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* Public */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/services" element={<MainLayout><Services /></MainLayout>} />
        <Route path="/careers" element={<MainLayout><Careers /></MainLayout>} />
        <Route path="/blog" element={<MainLayout><Blog /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/book-demo" element={<MainLayout><BookDemo /></MainLayout>} />

        {/* Admin */}
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin"
          element={
            <ProtectedAdminRoute>
              <AdminLayout />
            </ProtectedAdminRoute>
          }
        >
          {AdminRoutes()}
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
