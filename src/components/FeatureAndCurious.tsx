'use client';

import Image from 'next/image';
import Bluishimg from '../../public/assets/images/bluishfeaturehomeimg.png';
import Reddishimg from '../../public/assets/images/reddishfeaturehomeimg.png';
import Styles from '../styles/home.module.css';
import FAccordion from './FeatureAccordion';

const FeatureAndCurious = () => {
  return (
    <section
      className={`${Styles.featureandcuriousBg} lg:mt-32 min-h-screen  lg:py-20`}
    >
      <div className="features grid grid-cols-12 justify-center">
        {/* feature text */}
        <div className="col-span-12 lg:col-span-6 lg:pl-24">
          <h3 className="text-[#67748E] font-inter lg:font-medium capitalize lg:text-4xl lg:mb-4">
            Features
          </h3>
          <p className="text-[#707070] font-inter capitalize">
            Each made to save time or max sales
          </p>
          <FAccordion />
          <button className="bg-primary text-center rounded-lg lg:px-8 lg:py-[14px] text-white font-inter lg:tracking-[-0.205px] lg:mt-8">
            See Full List
          </button>
        </div>
        {/* feature image */}
        <div className="col-span-12 lg:col-span-6">
          <Image
            src={Bluishimg}
            alt="bluish feature image"
            width={700}
            height={500}
            className="object-contain  lg:absolute lg:-right-24"
          />
        </div>
      </div>
      <div className="curious grid grid-cols-12 justify-center lg:gap-x-20 lg:mt-52">
        {/* curious image */}
        <div className="col-span-12 lg:col-span-6">
          <Image
            src={Reddishimg}
            alt="reddish feature image"
            width={700}
            height={500}
            className="object-contain"
          />
        </div>
        {/* curious text */}
        <div className="col-span-12 lg:col-span-6">
          <h3 className="text-[#67748E] font-inter lg:font-medium capitalize lg:text-4xl lg:mb-6">
            Curious how it works?
          </h3>
          <p className="text-[#707070] font-inter capitalize lg:mb-5">
            It’s unbelievably flexible
          </p>
          <p className="text-[#67748E] font-inter lg:text-[1.2rem] lg:leading-[30px] lg:w-[420px]">
            Create an account in 30 sec and experience it yourself. <br /> No
            credit cards needed. No commitment.Free for 45 days
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureAndCurious;
