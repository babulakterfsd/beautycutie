'use client';

import { useState } from 'react';

const AllStates = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return {
    isMenuOpen,
    setIsMenuOpen,
  };
};

export default AllStates;
