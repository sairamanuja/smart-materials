import React, { useState, useRef } from 'react';
import { scanMaterial } from '../services/api';

const AIScanner = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreview(URL.createObjectURL(file));
      setResult(null);
      setError(null);
    }
  };

  const handleScan = async () => {
    if (!selectedImage) {
      setError('Please select an image first');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await scanMaterial(selectedImage);
      setResult(response);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to scan material. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSelectedImage(null);
    setPreview(null);
    setResult(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <section id="scanner" className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">AI Material Scanner</h2>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <div className="text-center mb-6">
            <p className="text-gray-600">
              Upload an image of a material to identify it using AI
            </p>
          </div>

          {/* Image Upload Area */}
          <div className="mb-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition">
              {preview ? (
                <div className="relative">
                  <img
                    src={preview}
                    alt="Preview"
                    className="max-h-64 mx-auto rounded-lg shadow-md"
                  />
                  <button
                    onClick={handleReset}
                    className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm hover:bg-red-600"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <div>
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="mt-2 text-sm text-gray-600">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">PNG, JPG, JPEG up to 10MB</p>
                </div>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
                className="hidden"
                id="image-upload"
              />
              {!preview && (
                <label
                  htmlFor="image-upload"
                  className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition"
                >
                  Choose Image
                </label>
              )}
            </div>
          </div>

          {/* Scan Button */}
          <div className="text-center mb-6">
            <button
              onClick={handleScan}
              disabled={!selectedImage || loading}
              className={`px-8 py-3 rounded-lg font-semibold text-white transition ${
                !selectedImage || loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg'
              }`}
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Scanning...
                </span>
              ) : (
                'Scan Material'
              )}
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
              <p>{error}</p>
            </div>
          )}

          {/* Result Display */}
          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6 border-2 border-green-300">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Scan Result</h3>
              <div className="bg-white rounded-lg p-4 shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-700 font-semibold">Detected Material:</span>
                  <span className="text-2xl font-bold text-blue-600">{result.material}</span>
                </div>
                {result.category && (
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-700 font-semibold">Category:</span>
                    <span className="text-lg font-semibold text-purple-600">{result.category}</span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-semibold">Confidence:</span>
                  <span className="text-2xl font-bold text-green-600">
                    {(result.confidence * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="mt-4">
                  <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-full transition-all duration-1000"
                      style={{ width: `${result.confidence * 100}%` }}
                    />
                  </div>
                </div>

                {/* Material Properties */}
                {result.properties && result.properties.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <h4 className="text-md font-semibold text-gray-700 mb-3">
                      📋 Material Properties:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {result.properties.map((prop, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                        >
                          {prop}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Applications */}
                {result.applications && result.applications.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h4 className="text-md font-semibold text-gray-700 mb-3">
                      🏭 Common Applications:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {result.applications.map((app, index) => (
                        <span
                          key={index}
                          className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <p className="text-center text-sm text-gray-600 mt-4">
                AI has successfully analyzed your material image
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIScanner;
