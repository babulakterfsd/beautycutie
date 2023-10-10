'use client';

import { useState } from 'react';

const AllStates = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  return {
    isMenuOpen,
    setIsMenuOpen,
    isDashboardOpen,
    setIsDashboardOpen,
  };
};

export default AllStates;
