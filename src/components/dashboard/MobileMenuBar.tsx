import useAppContext from '@/hooks/useAppContext';

import Link from 'next/link';
import React from 'react';
import {
  FaCircleUser,
  FaFilePen,
  FaRegEnvelope,
  FaUsersRectangle,
} from 'react-icons/fa6';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaHome, FaSignOutAlt } from 'react-icons/fa';

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
      <div className=" relative w-full  bg-white border-r shadow-lg">
        {/* Drawer content */}
        <div className=" flex justify-end text-4xl m-2 text-slate-100">
          <button
            className="text-xl text-cyan"
            onClick={toggleDrawer}
            aria-label="Close Drawer"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div>
          <Link
            onClick={() => setIsDashboardOpen(false)}
            className="mb-[32px] text-center  flex items-center justify-center mt-20"
            href={'/dashboard'}
          >
            <FaUsersRectangle className="text-primary" size={18} />
            <span className="font-bold ml-2">Subscribers</span>
          </Link>
          <Link
            onClick={() => setIsDashboardOpen(false)}
            className=" mb-[32px] text-center  flex items-center justify-center "
            href={'/dashboard/blog-post'}
          >
            <FaFilePen className="text-primary" size={18} />
            <span className="font-bold ml-2">Post Blog</span>
          </Link>
          <Link
            onClick={() => setIsDashboardOpen(false)}
            className=" text-center  flex items-center justify-center mt-3"
            href={'/dashboard/messages'}
          >
            <FaRegEnvelope className="text-primary" size={18} />
            <span className="font-bold ml-2">Messages</span>
          </Link>
          <Link
            onClick={() => setIsDashboardOpen(false)}
            className=" text-center  flex items-center justify-center mt-6"
            href={'/'}
          >
            <FaHome className="text-primary" size={18} />
            <span className="font-bold ml-2">Homepage</span>
          </Link>
        </div>
        <div className=" w-full  absolute bottom-1 text-center ">
          <div className=" text-center  flex items-center justify-center mb-[32px]">
            <FaCircleUser className="text-primary" size={18} />
            <span className="font-bold ml-2">Profile</span>
          </div>
          <div className=" text-center  flex items-center justify-center mb-[32px]">
            <FaSignOutAlt className="text-primary" size={18} />
            <span className="font-bold ml-2">Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuBar;
