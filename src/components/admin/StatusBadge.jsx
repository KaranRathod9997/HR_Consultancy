const StatusBadge = ({ status }) => {
  const base =
    "px-3 py-1 rounded-full text-xs font-semibold capitalize";

  const styles =
    status === "published"
      ? "bg-blue-100 text-blue-700"
      : "bg-gray-200 text-gray-700";

  return <span className={`${base} ${styles}`}>{status}</span>;
};

export default StatusBadge;
