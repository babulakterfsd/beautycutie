import useAppContext from '@/hooks/useAppContext';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import blog from '../../../public/assets/images/sidebar-logo-1.png';
import messages from '../../../public/assets/images/sidebar-logo-2.png';
import profile from '../../../public/assets/images/sidebar-logo-3.png';
import logout from '../../../public/assets/images/sidebar-logo-4.png';
import users from '../../../public/assets/images/sidebar-logo.png';
const MobileMenuBar: React.FC = () => {
  const { isDashboardOpen, setIsDashboardOpen } = useAppContext();
  const toggleDrawer = () => {
    setIsDashboardOpen(!isDashboardOpen);
  };

  return (
    <div
      className={`fixed w-full inset-0 flex z-50 ${
        isDashboardOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform ease-in-out duration-300`}
    >
      <div className=" relative w-11/12  bg-slate-500 border-r shadow-lg">
        {/* Drawer content */}
        <div className=" flex justify-end text-4xl m-2 text-slate-100">
          <button
            className="  text-4xl text-slate-100"
            onClick={toggleDrawer}
            aria-label="Close Drawer"
          >
            X
          </button>
        </div>
        <div>
          <Link
            className="mb-[32px] text-center  flex items-center justify-center mt-3"
            href={'/dashboard'}
          >
            <Image
              className=" h-[21px] w-[24px] "
              src={users}
              height={21}
              width={24}
              alt="llllll"
            />
          </Link>
          <Link
            className=" mb-[32px] text-center  flex items-center justify-center "
            href={'/dashboard/blog-post'}
          >
            <Image
              className=" h-[18px] w-[24px] "
              src={blog}
              height={18}
              width={24}
              alt="llllll"
            />
          </Link>
          <Link
            className=" text-center  flex items-center justify-center mt-3"
            href={'/dashboard/messages'}
          >
            <Image
              className=" h-[21px] w-[24px] "
              src={messages}
              height={21}
              width={24}
              alt="llllll"
            />
          </Link>
        </div>
        <div className=" w-full  absolute bottom-1 text-center mx-auto">
          <div className=" text-center  flex items-center justify-center mb-[32px]">
            <Image
              className=" h-[24px] w-[24px] "
              src={profile}
              height={24}
              width={24}
              alt="llllll"
            />
          </div>
          <div className=" text-center  flex items-center justify-center mb-[32px]">
            <Image
              className=" h-[24px] w-[24px] "
              src={logout}
              height={24}
              width={24}
              alt="llllll"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuBar;
