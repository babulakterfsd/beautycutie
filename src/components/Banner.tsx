import Image from 'next/image';
import catmuche from '../../public/assets/images/catmuschehomebanner.png';
import bannerdashboardimg from '../../public/assets/images/homedashboard.png';
import Styles from '../styles/home.module.css';

const Banner = () => {
  return (
    <section className={`${Styles.bannerBg}`}>
      <div className="main-container">
        <div className="flex flex-row justify-center lg:pl-20 lg:mb-6">
          <h1 className="lg:mt-20 capitalize lg:text-7xl lg:font-medium text-center lg:leading-[5.5rem]">
            designed by salon owner <br />
            for <span className="gradientText">Salon owners</span>
          </h1>
          <Image
            src={catmuche}
            alt="catmuche"
            width={132}
            height={153}
            className="object-contain lg:-mt-28"
          />
        </div>
        <div className="lg:w-[838px] lg:mx-auto">
          <p className="text-center text-[#666] font-roboto capitalize lg:tracking-[-0.205px] lg:mr-20">
            Easy-to-use" and "best" software are slogans of the past. At Bookitu
            we focus on solving real problems faced by salon owners every day.
            We focused on what is needed and removed “nice to have” features to
            create easy-to-use and efficient applications.{' '}
          </p>
        </div>
        <div className="lg:mt-12 flex justify-center lg:gap-x-6">
          <button className="bg-primary text-center rounded-lg lg:px-8 lg:py-[14px] text-white font-inter lg:tracking-[-0.205px]">
            Get Started
          </button>
          <button className="bg-[#F6F6F6] text-[#67748E] text-center rounded-lg lg:px-8 lg:py-[14px] font-inter lg:tracking-[-0.205px]">
            Learn More
          </button>
        </div>
        <div className="lg:mt-32 z-50 lg:p-8 lg:pb-0 gradientBg rounded-t-3xl">
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
