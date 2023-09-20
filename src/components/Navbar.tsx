'use client';
import Link from 'next/link';
import Styles from '../styles/navbar.module.css';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  return (
    <nav className=" text-gray-700 grid grid-cols-12 shadow-sm z-50 fixed top-0 left-0 right-0">
      {/* mobile menu */}
      <div className="col-span-12 md:hidden">
        <MobileNavbar />
      </div>
      {/* desktop menu */}
      <div className="hidden main-container md:flex items-center justify-between p-4 col-span-12 ">
        <div className="flex order-2 lg:gap-x-8">
          <button
            aria-label="Login"
            type="button"
            className={`${Styles.hanimation} font-inter lg:font-semibold lg:leading-[24px]`}
          >
            Log in
          </button>
          <button
            type="button"
            className="text-white bg-primary lg:px-5 lg:py-3 lg:rounded-md font-inter font-semibold lg:leading-[24px]"
          >
            Sign up
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col md:flex-row font-semibold p-4 md:p-0 mt-4  md:space-x-8 md:mt-0">
            <li>
              <Link
                href="/"
                className={`${Styles.hanimation} p-1 font-inter lg:leading-[24px]`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/features"
                className={`${Styles.hanimation} p-1 font-inter lg:leading-[24px]`}
                aria-current="page"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`${Styles.hanimation} p-1 font-inter lg:leading-[24px]`}
                aria-current="page"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className={`${Styles.hanimation} p-1 font-inter lg:leading-[24px]`}
                aria-current="page"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
