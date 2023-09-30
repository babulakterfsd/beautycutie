'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Styles from '../styles/navbar.module.css';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState(pathname);

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  return (
    <div className=" text-gray-700 grid grid-cols-12 shadow-sm z-50 fixed top-0 left-0 right-0 bg-white">
      {/* mobile menu */}
      <div className="col-span-12 z-50 bg-white md:hidden">
        <MobileNavbar />
      </div>
      {/* desktop menu */}
      <div className="hidden main-container md:flex items-center justify-between p-4 col-span-12 ">
        <div className="flex order-2 gap-x-4 lg:gap-x-8">
          <button
            aria-label="Login"
            type="button"
            className={`${Styles.hanimation} font-inter font-semibold leading-[24px]`}
          >
            Log in
          </button>
          <button
            type="button"
            className="text-white bg-primary px-5 py-3 rounded-md font-inter font-semibold leading-[24px]"
          >
            Sign up
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col md:flex-row font-semibold p-4 md:p-0 mt-4 md:space-x-4 lg:space-x-8 md:mt-0">
            <li>
              <Link
                href="/"
                className={`${
                  activePath === '/home' || activePath === '/'
                    ? 'text-primary'
                    : ''
                } ${Styles.hanimation} p-1 font-inter lg:leading-[24px]`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`${activePath === '/about' ? 'text-primary' : ''} ${
                  Styles.hanimation
                } p-1 font-inter lg:leading-[24px]`}
                aria-current="page"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/features"
                className={`${
                  activePath === '/features' ? 'text-primary' : ''
                } ${Styles.hanimation} p-1 font-inter lg:leading-[24px]`}
                aria-current="page"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className={`${
                  activePath === '/pricing' ? 'text-primary' : ''
                } ${Styles.hanimation} p-1 font-inter lg:leading-[24px]`}
                aria-current="page"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`${activePath === '/blog' ? 'text-primary' : ''} ${
                  Styles.hanimation
                } p-1 font-inter lg:leading-[24px]`}
                aria-current="page"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`${
                  activePath === '/contact' ? 'text-primary' : ''
                } ${Styles.hanimation} p-1 font-inter lg:leading-[24px]`}
                aria-current="page"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
