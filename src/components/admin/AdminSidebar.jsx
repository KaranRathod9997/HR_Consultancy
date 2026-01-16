import { NavLink } from "react-router-dom"

const links = [
  { path: "/admin/dashboard", label: "Dashboard" },
  { path: "/admin/pages", label: "CMS Management" },
  { path: "/admin/blogs", label: "Blog / News" },
  { path: "/admin/jobs", label: "Jobs & Recruitment" },
  { path: "/admin/users", label: "Users" },
  { path: "/admin/resources", label: "HR Resources" },
  { path: "/admin/settings", label: "Settings" },
]

const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-white border-r p-4">
      <h2 className="text-xl font-bold mb-6 text-blue-600">
        HR Admin
      </h2>

      <nav className="space-y-2">
        {links.map(link => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default AdminSidebar
