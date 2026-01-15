import React from "react";

const InDemandCard = ({ no, title, desc }) => {
  return (
    <div className="h-full bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
      
      {/* Number */}
      <span className="text-blue-600 text-2xl font-bold opacity-30 block mb-3">
        {no}
      </span>

      {/* Title */}
      <h6 className="text-lg font-semibold mb-2">
        {title}
      </h6>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {desc}
      </p>

    </div>
  );
};

export default InDemandCard;
