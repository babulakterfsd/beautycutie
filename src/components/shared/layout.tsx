'use client';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const [windowHeight, setWindowHeight] = useState(false);

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setWindowHeight(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* scroll to bottom */}
      {!windowHeight && (
        <button type="button" className="scrollToDown cursor-default" />
      )}
      {/* scroll to top */}
      {windowHeight && (
        <button
          type="button"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="scrollToTop"
        />
      )}
      {children}
    </>
  );
};

export default ClientLayout;
