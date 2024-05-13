import React from 'react';

interface Props {
  children: React.ReactNode;
}

const PrimarySection: React.FC<Props> = ({ children }) => (
  <section className="flex-7 border-r border-gray-700">{children}</section>
);

export default PrimarySection;
