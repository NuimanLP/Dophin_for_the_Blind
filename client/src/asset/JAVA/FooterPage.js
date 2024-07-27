import React from 'react';

const FooterPage = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-center">
        <div className="w-full md:w-1/4 px-4">
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Our Team</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Careers</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 px-4">
          <h3 className="text-xl font-semibold mb-4">Legal</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Terms of Service</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Cookie Policy</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Accessibility</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
