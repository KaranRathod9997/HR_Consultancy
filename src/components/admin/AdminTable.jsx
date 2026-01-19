import StatusBadge from "./StatusBadge";
import { MoreVertical } from "lucide-react";

const AdminTable = ({ data }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border">
      <table className="w-full text-sm">
        <thead className="border-b bg-gray-50">
          <tr className="text-left text-gray-500">
            <th className="p-4">Title</th>
            <th className="p-4">Slug</th>
            <th className="p-4">Status</th>
            <th className="p-4">Last Updated</th>
            <th className="p-4">Author</th>
            <th className="p-4 text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b last:border-none">
              <td className="p-4 font-medium">{item.title}</td>
              <td className="p-4 text-gray-500">{item.slug}</td>
              <td className="p-4">
                <StatusBadge status={item.status} />
              </td>
              <td className="p-4">{item.updatedAt}</td>
              <td className="p-4">{item.author}</td>
              <td className="p-4 text-right">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <MoreVertical size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
