import React from 'react';

interface Props {
  children: React.ReactNode;
}

const SecondarySection: React.FC<Props> = ({ children }) => (
  <section className="flex-1 p-1">{children}</section>
);

export default SecondarySection;
