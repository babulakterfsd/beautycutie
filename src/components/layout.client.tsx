'use client';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return children;
};

export default ClientLayout;
