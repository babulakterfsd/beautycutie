'use client';

import { useState } from 'react';

const AllStates = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const [formData, setFormData] = useState({
    id: Math.floor(Math.random() * 10000),
    title: '',
    image: 'https://i.ibb.co/WV4yQ2P/blog8.png',
    content: '',
    category: '',
  });

  return {
    isMenuOpen,
    setIsMenuOpen,
    isDashboardOpen,
    setIsDashboardOpen,
    formData,
    setFormData,
  };
};

export default AllStates;
