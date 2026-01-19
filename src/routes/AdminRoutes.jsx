import { Route } from "react-router-dom";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminCMS from "../pages/admin/AdminCMS";
import AdminUsers from "../pages/admin/AdminUsers";

const AdminRoutes = () => {
  return (
    <>
      <Route path="dashboard" element={<AdminDashboard />} />
      <Route path="cms" element={<AdminCMS />} />
      <Route path="users" element={<AdminUsers />} />
    </>
  );
};

export default AdminRoutes;
