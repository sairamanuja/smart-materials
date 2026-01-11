import React, { useState } from 'react';
import { materialsData, chartData } from '../data/materialsData';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const MaterialsSection = () => {
  const [selectedMaterial, setSelectedMaterial] = useState(materialsData[0]);

  return (
    <section id="materials" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Materials & Applications</h2>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Material Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Material Categories</h3>
            <div className="grid grid-cols-2 gap-3">
              {materialsData.map((material) => (
                <button
                  key={material.id}
                  onClick={() => setSelectedMaterial(material)}
                  className={`p-4 rounded-lg text-left transition ${
                    selectedMaterial.id === material.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  <h4 className="font-semibold">{material.name}</h4>
                  <p className="text-xs mt-1 opacity-90">{material.examples[0]}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Pie Chart */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Distribution Overview</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Selected Material Details */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">{selectedMaterial.name}</h3>
          <p className="text-gray-700 mb-4">{selectedMaterial.description}</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Key Properties:</h4>
              <ul className="space-y-1">
                {selectedMaterial.properties.map((prop, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-700">{prop}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Applications:</h4>
              <ul className="space-y-1">
                {selectedMaterial.applications.map((app, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span className="text-gray-700">{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold text-gray-800 mb-2">Examples:</h4>
            <div className="flex flex-wrap gap-2">
              {selectedMaterial.examples.map((example, index) => (
                <span
                  key={index}
                  className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow"
                >
                  {example}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;
