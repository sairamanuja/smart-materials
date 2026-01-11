import React from 'react';
import Header from './components/Header';
import NewsBanner from './components/NewsBanner';
import MaterialsSection from './components/MaterialsSection';
import AIScanner from './components/AIScanner';
import FeedbackForm from './components/FeedbackForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <NewsBanner />
      <MaterialsSection />
      <AIScanner />
      <FeedbackForm />
      <Footer />
    </div>
  );
}

export default App;
