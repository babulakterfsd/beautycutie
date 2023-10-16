import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const logo = '/assets/images/dahboardLogo.png';
const blog = '/assets/images/sidebar-logo-1.png';
const messages = '/assets/images/sidebar-logo-2.png';
const profile = '/assets/images/sidebar-logo-3.png';
const logout = '/assets/images/sidebar-logo-4.png';
const users = '/assets/images/sidebar-logo.png';

const DashboardSideBar = () => {
  const pathName = usePathname();

  return (
    <div className="h-full w-full relative bg-white">
      <div className="">
        <div className="logo leading-[60px] mb-[64px] ">
          <Link className=" block mb-[32px] lg:mt-8" href="/">
            <Image
              className="h-[68px] w-[65px]"
              src={logo}
              height={68}
              width={65}
              alt="dashboardmenu"
            />
          </Link>
        </div>
        <Link
          className={`${
            pathName == '/dashboard'
          } md:mb-[32px] text-center  flex items-center justify-center mt-3`}
          href={'/dashboard'}
        >
          <Image
            className=" h-[21px] w-[24px] "
            src={users}
            height={21}
            width={24}
            alt="dashboardmenu"
          />
        </Link>
        <Link
          className={`${
            pathName == '/dashboard/blog-post'
          } md:mb-[32px] text-center  flex items-center justify-center `}
          href={'/dashboard/blog-post'}
        >
          <Image
            className=" h-[18px] w-[24px] "
            src={blog}
            height={18}
            width={24}
            alt="dashboardmenu"
          />
        </Link>
        <Link
          className={`${
            pathName == '/dashboard/messages'
          } text-center  flex items-center justify-center mt-3`}
          href={'/dashboard/messages'}
        >
          <Image
            className=" h-[21px] w-[24px] "
            src={messages}
            height={21}
            width={24}
            alt="dashboardmenu"
          />
        </Link>
      </div>
      <div className=" w-full  md:absolute md:bottom-1 text-center mx-auto">
        <div className=" text-center  flex items-center justify-center mb-[32px]">
          <Image
            className=" h-[24px] w-[24px] mr-[6px] cursor-pointer"
            src={profile}
            height={24}
            width={24}
            alt="dashboardmenu"
          />
        </div>
        <div className=" text-center  flex items-center justify-center mb-[32px]">
          <Image
            className=" h-[24px] w-[24px] cursor-pointer"
            src={logout}
            height={24}
            width={24}
            alt="dashboardmenu"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardSideBar;
