import React from 'react';

interface NavProps {
  children: React.ReactNode;
}

const Nav: React.FC<NavProps> = ({ children }) => (
  <nav className="flex text-gray-400 pt-2 border-b border-gray-700 p-3 items-center gap-2">
    {children}
  </nav>
);

export default Nav;
