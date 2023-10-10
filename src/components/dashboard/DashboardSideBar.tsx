import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/assets/images/dahboardLogo.png';
import blog from '../../../public/assets/images/sidebar-logo-1.png';
import messages from '../../../public/assets/images/sidebar-logo-2.png';
import profile from '../../../public/assets/images/sidebar-logo-3.png';
import logout from '../../../public/assets/images/sidebar-logo-4.png';
import users from '../../../public/assets/images/sidebar-logo.png';

const DashboardSideBar = () => {
  return (
    <div className="sidebarBg h-full w-full relative border-r border-slate-300">
      <div className="">
        <div className="logo leading-[60px] mb-[64px] ">
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
        <Link
          className="md:mb-[32px] text-center  flex items-center justify-center mt-3"
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
          className=" md:mb-[32px] text-center  flex items-center justify-center "
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
      <div className=" w-full  md:absolute md:bottom-1 text-center mx-auto">
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
  );
};

export default DashboardSideBar;
