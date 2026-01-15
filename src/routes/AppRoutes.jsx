import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Services from "../pages/public/Services";
import Careers from "../pages/public/Careers";
import Blog from "../pages/public/Blog";
import Contact from "../pages/public/Contact";
import BookDemo from "../pages/public/BookDemo";

/* Scroll to top on route change */
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
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />

        <Route
          path="/services"
          element={
            <MainLayout>
              <Services />
            </MainLayout>
          }
        />

        <Route
          path="/careers"
          element={
            <MainLayout>
              <Careers />
            </MainLayout>
          }
        />

        <Route
          path="/blog"
          element={
            <MainLayout>
              <Blog />
            </MainLayout>
          }
        />

        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />

        <Route
          path="/book-demo"
          element={
            <MainLayout>
              <BookDemo />
            </MainLayout>
          }
        />
      </Routes>
    </>
  );
};

export default AppRoutes;
