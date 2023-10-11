'use client';
import { DashboardHeader, DashboardSideBar } from '@/components/dashboard';
import MobileMenuBar from '@/components/dashboard/MobileMenuBar';
import useAppContext from '@/hooks/useAppContext';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaAlignLeft } from 'react-icons/fa6';
import logo from '../../../public/assets/images/dahboardLogo.png';

const DashboardLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { isDashboardOpen, setIsDashboardOpen } = useAppContext();

  return (
    <div className="w-screen h-screen">
      {/* <NextTopLoader height={3} showSpinner={false} /> */}

      <div className=" w-full h-screen  md:overflow-hidden">
        <div className="md:flex w-screen">
          <div className=" hidden md:flex md:w-[74px] mx-auto h-screen overflow-hidden">
            <DashboardSideBar />
          </div>
          <div className=" w-screen md:w-4/5 flex-1 ">
            <div className=" hidden md:block">
              <DashboardHeader />
            </div>
            <div className=" block md:hidden w-full">
              <div className="flex justify-between    w-full">
                <div className="logo">
                  <Link className=" block mb-[32px]" href={'/dashboard'}>
                    <Image
                      className=" h-[68px] w-[65px] "
                      src={logo}
                      height={68}
                      width={65}
                      alt="llllll"
                    />
                  </Link>
                </div>
                <FaAlignLeft
                  className="mr-3 mt-6"
                  onClick={() => setIsDashboardOpen(true)}
                />
              </div>

              <MobileMenuBar />
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
