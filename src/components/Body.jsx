import React from 'react';

const Body = () => {
  return (
    <main className="p-8 min-h-[60vh] bg-gray-50">
      <h2 className="text-xl font-semibold mb-4">Main Content Area</h2>
      <p className="text-gray-700">
        This is the body section of the application. It contains the main content and features.
      </p>
      <div className="mt-6 p-4 border border-dashed border-gray-400 rounded">
        Placeholder for main application logic or data display.
      </div>
    </main>
  );
};

export default Body;
