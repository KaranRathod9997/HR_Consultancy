import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    ["/", "Home"],
    ["/about", "About"],
    ["/services", "Services"],
    ["/careers", "Careers"],
    ["/blog", "Blog"],
    ["/contact", "Contact"],
  ];

  /* ================= STYLES ================= */

  const headerPosition =
    isHome && !scrolled ? "absolute" : "fixed";

  const headerBg =
    isHome && !scrolled
      ? "bg-transparent"
      : "bg-white shadow-md";

  const textColor =
    isHome && !scrolled ? "text-white" : "text-gray-800";

  return (
    <header
      className={`${headerPosition} top-0 left-0 w-full z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              H
            </div>
            <span className={`font-semibold text-lg ${textColor}`}>
              HRPro
            </span>
          </NavLink>

          {/* NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(([path, label]) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `font-medium transition ${
                    isActive
                      ? "text-blue-600"
                      : `${textColor} hover:text-blue-600`
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <NavLink
              to="/login"
              className={`font-medium ${textColor} hover:text-blue-600`}
            >
              Sign In
            </NavLink>
            <button
              onClick={() => navigate("/book-demo")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium"
            >
              Book a Demo
            </button>
          </div>

          {/* MOBILE */}
          <button
            className={`lg:hidden text-2xl ${textColor}`}
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map(([path, label]) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className="block text-gray-700 font-medium hover:text-blue-600"
              >
                {label}
              </NavLink>
            ))}
            <button
              onClick={() => navigate("/book-demo")}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
