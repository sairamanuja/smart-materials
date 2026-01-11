import React, { useState } from 'react';
import { materialsData, chartData, exampleMaterialsData } from '../data/materialsData';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const MaterialsSection = () => {
  const [selectedMaterial, setSelectedMaterial] = useState(materialsData[0]);
  const [selectedExample, setSelectedExample] = useState(null);

  const handleExampleClick = (example) => {
    const exampleData = exampleMaterialsData[example];
    if (exampleData) {
      setSelectedExample(exampleData);
    }
  };

  const closeModal = () => {
    setSelectedExample(null);
  };

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
            <h4 className="font-semibold text-gray-800 mb-2">Examples: <span className="text-sm font-normal text-blue-600">(Click for details)</span></h4>
            <div className="flex flex-wrap gap-2">
              {selectedMaterial.examples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => handleExampleClick(example)}
                  className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow hover:bg-blue-100 hover:text-blue-700 transition cursor-pointer border border-transparent hover:border-blue-300"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Example Material Details */}
      {selectedExample && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-xl">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold">{selectedExample.name}</h3>
                  <p className="text-blue-100 mt-1">
                    {selectedExample.symbol && <span className="mr-3">Symbol: {selectedExample.symbol}</span>}
                    <span>Category: {selectedExample.category}</span>
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white hover:text-red-200 text-2xl font-bold p-1"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Mechanical Properties */}
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="text-lg font-bold text-blue-800 mb-3 flex items-center">
                    <span className="mr-2">⚙️</span> Mechanical Properties
                  </h4>
                  <div className="space-y-2">
                    {Object.entries(selectedExample.mechanical).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                        <span className="font-semibold text-gray-800">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Thermal Properties */}
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="text-lg font-bold text-red-800 mb-3 flex items-center">
                    <span className="mr-2">🌡️</span> Thermal Properties
                  </h4>
                  <div className="space-y-2">
                    {Object.entries(selectedExample.thermal).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                        <span className="font-semibold text-gray-800">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Green/Environmental Properties */}
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="text-lg font-bold text-green-800 mb-3 flex items-center">
                    <span className="mr-2">🌿</span> Green / Environmental
                  </h4>
                  <div className="space-y-2">
                    {Object.entries(selectedExample.green).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                        <span className="font-semibold text-gray-800">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Structural Properties */}
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="text-lg font-bold text-purple-800 mb-3 flex items-center">
                    <span className="mr-2">🔬</span> Structure
                  </h4>
                  <div className="space-y-2">
                    {Object.entries(selectedExample.structure).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                        <span className="font-semibold text-gray-800">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <div className="mt-6 text-center">
                <button
                  onClick={closeModal}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MaterialsSection;
