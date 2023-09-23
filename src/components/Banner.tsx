import Image from 'next/image';
import catmuche from '../../public/assets/images/catmuschehomebanner.png';
import bannerdashboardimg from '../../public/assets/images/homedashboard.png';
import Styles from '../styles/home.module.css';

const Banner = () => {
  return (
    <section className={`${Styles.bannerBg}`}>
      <div className="main-container">
        <div className="flex flex-row justify-center lg:pl-20 mb-4 lg:mb-6">
          <h1 className="mt-16 md:mt-16 lg:mt-20 capitalize font-inter text-4xl lg:text-7xl font-medium text-center lg:leading-[5.5rem]">
            designed by salon owner <br className="hidden lg:block" />
            for <span className="gradientText">Salon owners</span>
          </h1>
          <Image
            src={catmuche}
            alt="catmuche"
            width={132}
            height={153}
            className="object-contain lg:-mt-36 hidden lg:block"
          />
        </div>
        <div className="lg:w-[838px] lg:mx-auto">
          <p className="text-center text-[#666] font-inter text-[1.1rem] lg:text-[1rem] lg:font-roboto capitalize lg:tracking-[-0.205px] lg:mr-20">
            Easy-to-use" and "best" software are slogans of the past. At Bookitu
            we focus on solving real problems faced by salon owners every day.
            We focused on what is needed and removed “nice to have” features to
            create easy-to-use and efficient applications.{' '}
          </p>
        </div>
        <div className="mt-8 lg:mt-12 flex justify-center flex-col md:flex-row gap-y-3 md:gap-x-6">
          <button className="bg-primary text-center rounded-lg p-3 lg:px-8 lg:py-[14px] text-white font-inter lg:tracking-[-0.205px] w-full md:w-auto font-semibold md:font-normal">
            Get Started
          </button>
          <button className="bg-[#F6F6F6] text-[#67748E] text-center rounded-lg p-3 lg:px-8 lg:py-[14px] font-inter lg:tracking-[-0.205px]  w-full md:w-auto font-semibold md:font-normal">
            Learn More
          </button>
        </div>
        <div className="mt-28 mb-32 lg:mb-0 lg:mt-32 z-50 p-3 pb-0 md:p-5 md:pb-0 lg:p-8 lg:pb-0 gradientBg rounded-t-3xl">
          <Image
            src={bannerdashboardimg}
            alt="bannerdashboardimg"
            className="object-contain lg:mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
