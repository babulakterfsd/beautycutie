'use client';

import Image from 'next/image';
import Bluishimg from '../../public/assets/images/bluishfeaturehomeimg.png';
import Reddishimg from '../../public/assets/images/reddishfeaturehomeimg.png';
import Styles from '../styles/home.module.css';
import FAccordion from './FeatureAccordion';

const FeatureAndCurious = () => {
  return (
    <section
      className={`${Styles.featureandcuriousBg} mt-20 lg:mt-32 min-h-screen  lg:py-20`}
    >
      <div className="features grid grid-cols-12 justify-center">
        {/* feature text */}
        <div
          className="col-span-12 lg:col-span-6 md:px-16 lg:pl-24"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <h3 className="text-[#67748E] font-inter font-medium capitalize text-3xl lg:text-4xl mb-4 text-center md:text-left">
            Features
          </h3>
          <p className="text-[#707070] font-inter capitalize text-center md:text-left">
            Each made to save time or max sales
          </p>
          <FAccordion />
          <button className="bg-primary text-center rounded-lg px-8 py-[14px] text-white font-inter lg:tracking-[-0.205px] mt-6 lg:mt-8 ml-4 md:ml-0">
            See full list
          </button>
        </div>
        {/* feature image */}
        <div
          className="col-span-12 lg:col-span-6"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <Image
            src={Bluishimg}
            alt="bluish feature image"
            width={700}
            height={500}
            className="object-contain  lg:absolute lg:-right-24 mt-6 px-3 md:px-16 md:mx-auto lg:mx-0 lg:px-0 md:mt-6 lg:mt-0"
          />
        </div>
      </div>
      <div className="curious grid grid-cols-12 justify-center lg:gap-x-20 lg:mt-52">
        {/* curious image */}
        <div
          className="col-span-12 lg:col-span-6"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <Image
            src={Reddishimg}
            alt="reddish feature image"
            width={700}
            height={500}
            className="object-contain mt-10 px-3 md:px-16 lg:px-0 md:mt-16 lg:mt-0 md:mx-auto lg:mx-0"
          />
        </div>
        {/* curious text */}
        <div
          className="col-span-12 lg:col-span-6 lg:ml-14 order-first lg:order-none md:px-16 lg:px-0 md:mt-16 lg:mt-0"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <h3 className="text-[#67748E] font-inter font-medium capitalize text-3xl lg:text-4xl mb-4 lg:mb-6 mt-12 md:mt-0 text-center md:text-left">
            Curious how it works?
          </h3>
          <p className="text-[#707070] font-inter text-center md:text-left capitalize mb-6 lg:mb-5">
            It's unbelievably flexible
          </p>
          <p className="text-[#67748E] font-inter lg:text-[1.2rem] lg:leading-[30px] lg:w-[420px] px-4 md:px-0">
            Create an account in 30 sec and experience it yourself. <br /> No
            credit cards needed. No commitment.Free for 45 days
          </p>
          <button className="bg-primary text-center rounded-lg px-8 py-[14px] text-white font-inter lg:tracking-[-0.205px] mt-6 lg:mt-4 ml-4 md:ml-0">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureAndCurious;
