import React from 'react';
import { newsItems } from '../data/materialsData';

const NewsBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Latest News & Updates</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {newsItems.map((news) => (
            <div key={news.id} className="bg-white/10 backdrop-blur rounded-lg p-4 hover:bg-white/20 transition">
              <p className="text-xs text-blue-200 mb-2">{news.date}</p>
              <h3 className="font-semibold mb-2">{news.title}</h3>
              <p className="text-sm text-gray-100">{news.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsBanner;
