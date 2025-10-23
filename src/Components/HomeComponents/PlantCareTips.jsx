import React from 'react';

const PlantCareTips = ({ tip }) => {
  return (
    <div
      key={tip.id}
      className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/40"
    >
      <h3 className="text-xl font-semibold text-green-700 mb-2">{tip.title}</h3>
      <p className="text-gray-600">{tip.desc}</p>
    </div>
  );
};

export default PlantCareTips;
