const StatCard = ({ title, value, change }) => {
  return (
    <div className="bg-white p-5 rounded-xl border">
      <p className="text-gray-500 text-sm">{title}</p>
      <h3 className="text-2xl font-bold mt-1">{value}</h3>
      <p className="text-green-600 text-sm mt-1">{change}</p>
    </div>
  )
}

export default StatCard
