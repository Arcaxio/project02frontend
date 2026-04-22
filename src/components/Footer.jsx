import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background text-foreground p-4 text-center">
      <p>&copy; {new Date().getFullYear()} My Simple Web App. All rights reserved.</p>
      <p className="text-sm text-gray-400 mt-2">Built with React and Tailwind CSS</p>
    </footer>
  );
};

export default Footer;
