import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Prince Yadav. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
