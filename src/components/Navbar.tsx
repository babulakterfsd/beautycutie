'use client';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/assets/images/logo.png';
import Styles from '../styles/navbar.module.css';

const Navbar = () => {
  return (
    <nav className="bg-white text-black main-container">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center md:hidden">
          <Image src={Logo} className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Bookitu
          </span>
        </Link>
        <div className="flex md:order-2 lg:gap-x-8">
          <button
            aria-label="Login"
            type="button"
            className={`${Styles.hanimation} font-inter lg:font-semibold lg:leading-[24px] hidden md:block`}
          >
            Log in
          </button>
          <button
            type="button"
            className="text-white bg-primary lg:px-5 lg:py-3 lg:rounded-md font-inter font-semibold lg:leading-[24px] hidden md:block"
          >
            Sign up
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-700 rounded-lg md:hidden"
            aria-controls="navbar-cta"
            aria-expanded="false"
            onClick={() => alert('clicked')}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
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
