const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Clients" value="156" change="+12%" />
        <StatCard title="Total Candidates" value="2,847" change="+8%" />
        <StatCard
          title="Job Openings"
          value="24"
          change="-5%"
          negative
        />
        <StatCard title="Applications" value="892" change="+23%" />
      </div>
    </div>
  );
};

const StatCard = ({ title, value, change, negative }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-1">
        {value}
      </h2>

      <p
        className={`text-sm mt-2 ${
          negative ? "text-red-500" : "text-green-600"
        }`}
      >
        {change} vs last month
      </p>
    </div>
  );
};

export default AdminDashboard;
