import AdminTable from "../../components/admin/AdminTable.jsx";
import { cmsPages } from "../../data/cmsPages";
import { Plus, Search } from "lucide-react";

const AdminCMS = () => {
  return (
    <>
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            CMS Management
          </h1>
          <p className="text-sm text-gray-500">
            Manage website pages and content
          </p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
          <Plus size={16} />
          Create Page
        </button>
      </div>

      {/* Search */}
      <div className="mb-4">
        <div className="relative max-w-sm">
          <Search
            size={16}
            className="absolute left-3 top-2.5 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search pages..."
            className="w-full pl-9 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Table */}
      <AdminTable data={cmsPages} />
    </>
  );
};

export default AdminCMS;
