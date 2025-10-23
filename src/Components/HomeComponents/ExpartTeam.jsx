import React from 'react';
import { GiFarmer } from 'react-icons/gi';

const ExpartTeam = ({ exparts }) => {
  return (
    <>
      <section className="py-16 px-4 md:px-12">
        <h2 className="text-3xl font-semibold text-center text-green-700 mb-10 flex items-center justify-center">
          <GiFarmer className="inline mr-2 text-purple-600 text-4xl" /> Meet Our
          Green Experts
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {exparts.map((expart) => (
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
          ))}
        </div>
      </section>
    </>
  );
};

export default ExpartTeam;
