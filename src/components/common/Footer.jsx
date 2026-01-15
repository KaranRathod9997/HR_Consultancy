import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">

      {/* ================= NEWSLETTER ================= */}
      <div className="border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Stay in the loop
              </h3>
              <p className="text-slate-400 mt-1">
                HR insights, hiring tips, and compliance updates.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 transition px-6 py-3 rounded-lg font-semibold text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">

          {/* BRAND */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-indigo-600 text-white font-bold rounded-lg flex items-center justify-center">
                HR
              </div>
              <h5 className="text-xl font-bold text-white">
                HRPro Consultancy
              </h5>
            </div>

            <p className="text-slate-400 mb-5 max-w-md">
              Helping companies hire better, manage smarter, and grow faster
              with modern HR solutions.
            </p>

            <ul className="space-y-2 text-slate-400 text-sm">
              <li>📧 contact@hrpro.com</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>📍 Ahmedabad, India</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h6 className="font-semibold text-white mb-4">Company</h6>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h6 className="font-semibold text-white mb-4">Services</h6>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>Recruitment</li>
              <li>Payroll Management</li>
              <li>HR Consulting</li>
              <li>Compliance</li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h6 className="font-semibold text-white mb-4">Legal</h6>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="hover:text-white">Terms & Conditions</Link></li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} HRPro Consultancy. All rights reserved.
          </p>

          <div className="flex gap-3">
            {["in", "tw", "fb", "ig"].map((item) => (
              <div
                key={item}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 hover:bg-indigo-600 transition cursor-pointer text-sm text-white"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer
