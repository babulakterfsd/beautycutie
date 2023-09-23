'use client';

import {
  faContactBook,
  faDollarSign,
  faHouse,
  faProjectDiagram,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
// import babul_akter from '../../public/assets/images/babul_akter_mobile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Logo from '../../public/assets/images/logo.png';
import useAppContext from '.././hooks/useAppContext';

const MobileNavbar = () => {
  const { isMenuOpen } = useAppContext();
  return (
    <div className="overflow-x-hidden bg-white">
      <div>
        <AnimatedMenubar />
      </div>
      <div className={`${isMenuOpen ? '' : ''}`}>
        {isMenuOpen && <MobileMenu />}
      </div>
    </div>
  );
};

export default MobileNavbar;

const MobileMenu = () => {
  const { isMenuOpen, setIsMenuOpen } = useAppContext();
  return (
    <div
      className={` ${
        isMenuOpen
          ? 'duration-1000 h-screen flex justify-center items-start flex-col gap-y-8 overflow-x-hidden pl-[35vw]'
          : 'w-0 h-0 duration-300'
      }`}
    >
      <Link href="/" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="flex gap-x-4 items-center text-gray-700">
          <FontAwesomeIcon icon={faHouse} />
          <span className="uppercase font-medium">Home</span>
        </span>
      </Link>
      <Link href="/features" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="flex gap-x-4 items-center text-gray-700">
          <FontAwesomeIcon icon={faProjectDiagram} />
          <span className="uppercase font-medium">Features</span>
        </span>
      </Link>
      <Link href="/about" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="flex gap-x-4 items-center text-gray-700">
          <FontAwesomeIcon icon={faUser} />
          <span className="uppercase font-medium">About Us</span>
        </span>
      </Link>
      <Link href="/pricing" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="flex gap-x-4 items-center text-gray-700">
          <FontAwesomeIcon icon={faDollarSign} />
          <span className="uppercase font-medium">Pricing</span>
        </span>
      </Link>
      <Link href="/contact" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="flex gap-x-4 items-center text-gray-700">
          <FontAwesomeIcon icon={faContactBook} />
          <span className="uppercase font-medium">Contact</span>
        </span>
      </Link>
    </div>
  );
};

const AnimatedMenubar = () => {
  const { isMenuOpen, setIsMenuOpen } = useAppContext();

  const genericHamburgerLine = `h-1 w-5 rounded-full my-1 bg-[#eb8817] transition ease transform duration-300`;
  return (
    <div className="overflow-x-hidden flex justify-between items-center h-16 py-2 px-4 shadow-sm">
      <Link href="/">
        <Image src={Logo} alt="logo" width={36} height={36} />
      </Link>
      <button
        name="mobilemenu"
        aria-label="mobile menu"
        className="flex flex-col h-7 w-7  rounded justify-center items-center group"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isMenuOpen
              ? 'rotate-45 translate-y-2 opacity-50 group-hover:opacity-100'
              : 'opacity-50 group-hover:opacity-100'
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isMenuOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isMenuOpen
              ? '-rotate-45 -translate-y-[10px] opacity-50 group-hover:opacity-100'
              : 'opacity-50 group-hover:opacity-100'
          }`}
        />
      </button>
    </div>
  );
};
