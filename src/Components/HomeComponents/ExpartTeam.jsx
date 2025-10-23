import React from 'react';

const ExpartTeam = ({ expart }) => {
  return (
    <div
      key={expart.id}
      className="bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl shadow-lg p-6 text-center"
    >
      <img
        src={expart.img}
        alt={expart.name}
        className="w-32 h-32 mx-auto rounded-full object-cover"
      />
      <h3 className="text-xl font-semibold mt-4 text-gray-800">
        {expart.name}
      </h3>
      <p className="text-green-600">{expart.role}</p>
    </div>
  );
};

export default ExpartTeam;
