import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // for toggle icons

function Sidebar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const menuItemsTop = [
    { label: 'Dashboard', path: '/' },
    { label: 'Company Profile', path: '/comapnyprofile' },
    { label: 'Messages', path: '/message' },
    { label: 'All Applicants', path: '/allapplicants' },
    { label: 'Job Listing', path: '#' },
    { label: 'My Schedule', path: '#' },
    { label: 'Post A Job', path: '/jobpost' },
  ];

  const menuItemsBottom = [
    { label: 'Setting', path: '/setting' },
    { label: 'Help Center', path: '#' },
    { label: 'Logout', path: '#' },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-white shadow-md">
        <h1 className="text-xl font-bold text-blue-600">NextHire</h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full bg-white shadow-md z-40 transition-transform transform lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:block w-64`}>
        <h1 className="text-2xl font-bold text-blue-600 pl-6 pt-4 hidden lg:block">NextHire</h1>

        <nav className="mt-6 pb-10 text-lg pl-6 border-r border-blue-200">
          {menuItemsTop.map((item, index) => (
            <a
              key={index}
              onClick={() => {
                if (item.path !== '#') navigate(item.path);
                setIsOpen(false); // close sidebar on mobile after click
              }}
              className="cursor-pointer block p-2 rounded hover:bg-blue-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <hr className="text-blue-200 mx-3" />

        <nav className="border-r border-blue-200 pt-5 pb-6 text-lg pl-6">
          {menuItemsBottom.map((item, index) => (
            <a
              key={index}
              onClick={() => {
                if (item.path !== '#') navigate(item.path);
                setIsOpen(false);
              }}
              className="cursor-pointer block p-2 rounded hover:bg-blue-100"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Sidebar;
