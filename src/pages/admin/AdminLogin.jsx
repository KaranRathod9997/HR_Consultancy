import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // IMPORTANT: clear any stale auth on login page load
  useEffect(() => {
    localStorage.removeItem("adminLoggedIn");
    localStorage.removeItem("adminRole");
    localStorage.removeItem("adminEmail");
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // DEMO USERS (replace with API later)
    const users = {
      "admin@hrconnect.com": {
        password: "admin123",
        role: "admin",
      },
      "editor@hrconnect.com": {
        password: "editor123",
        role: "editor",
      },
    };

    const user = users[email];

    if (!user || user.password !== password) {
      setError("Invalid email or password");
      return;
    }

    // SET AUTH STATE
    localStorage.setItem("adminLoggedIn", "true");
    localStorage.setItem("adminRole", user.role);
    localStorage.setItem("adminEmail", email);

    // REDIRECT SAFELY
    navigate("/admin/dashboard", { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">

        {/* LOGO */}
        <div className="text-center mb-8">
          <div className="mx-auto w-14 h-14 rounded-xl bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
            HR
          </div>
          <h1 className="mt-4 text-2xl font-bold text-gray-900">
            HR Connect
          </h1>
          <p className="text-sm text-gray-500">
            Admin Panel
          </p>
        </div>

        {/* CARD */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-gray-900">
            Welcome back
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Enter your credentials to access the admin panel
          </p>

          {error && (
            <div className="mb-4 text-sm text-red-600 bg-red-50 px-4 py-2 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <FiMail className="absolute left-3 top-3.5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@hrconnect.com"
                  className="w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <FiLock className="absolute left-3 top-3.5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-400"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition"
            >
              Sign in
            </button>
          </form>

          {/* DEMO INFO */}
          <div className="mt-6 bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
            <p className="font-medium mb-1">Demo Credentials:</p>
            <p>Super Admin: admin@hrconnect.com / admin123</p>
            <p>Editor: editor@hrconnect.com / editor123</p>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          © 2025 HR Connect. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
