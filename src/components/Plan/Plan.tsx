import React from 'react';

interface PlanProps {
  title: string;
  description: string;
  price: string;
  frequency: string;
}

export const Plan: React.FC<PlanProps> = ({ title, description, price, frequency }: PlanProps) => {
  return (
    <div className="bg-white transition-transform duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-xl rounded-lg overflow-hidden w-[300px]">
      <div className="bg-gradient-to-r from-blue-500 to-[#67D1E9] p-4">
        <h2 className="mb-2 text-2xl font-bold text-white">{title}</h2>
      </div>
      <div className="p-4">
        <p className="mb-2 text-gray-600 text-center">{description}</p>
        <p className="mb-2 text-blue-500 font-bold text-center">{price}</p>
        <p className="mb-4 text-gray-500 text-center">{frequency}</p>
      </div>
      <button className="w-full py-2 font-bold text-white bg-gradient-to-r from-blue-500 to-[#67D1E9] hover:from-blue-700 hover:to-[#67D1E9] transition-colors duration-200">
        Elegir plan
      </button>
    </div>
  );
};