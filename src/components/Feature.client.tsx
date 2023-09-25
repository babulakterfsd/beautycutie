import Image from 'next/image';

import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dashboard from '../../public/assets/images/freature_last.png';
import MobileDasboard from '../../public/assets/images/mobile_feature.png';
import ultasurjo from '../../public/assets/images/ultashurjo.png';
import FeatureList from './FeatureList';
import FeaturePricing from './FeaturePricing';
import NewsletterHalf from './NewsletterHalf';

const Feature = () => {
  return (
    <>
      <section>
        <div className="mt-32 md:mt-32 lg:mt-44">
          <h4
            className="text-center text-primary font-inter font-semibold text-sm md:text-[1rem]"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            Our values
          </h4>
          <div
            className="flex justify-center items-center gap-x-0 mb-4 lg:mb-5"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <Image
              src={ultasurjo}
              alt="Ultasurjo"
              className="object-contain h-20 w-20 -mt-16 -ml-16"
            />
            <h5 className="text-cyan text-center text-4xl font-semibold lg:leading-[44px] lg:tracking-[-.72px] -ml-3">
              Why Us?
            </h5>
          </div>
          <p
            className="font-inter text-[1.2rem] leading-[30px] text-cyan px-4 md:px-16 text-center lg:w-4/6 lg:mx-auto"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Customers expect you to be perfect when it comes to their treatment,
            Why shouldn’t you expect a perfect application that does exactly
            what you need? Every functionality is built because it adds value
            either by reducing work or creating more bookings by providing new
            opportunities.
          </p>
        </div>
        <div className="main-container">
          <div className="">
            <FeatureList />
          </div>
        </div>
      </section>
      {/* feature price */}
      <FeaturePricing />

      <div
        className="px-6 md:px-16 lg:px-32 mb-16 lg:mb-24"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <NewsletterHalf />
      </div>
      <section className="mb-16 lg:mb-24">
        <div className="main-container">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div>
              <div className="text-cyan text-3xl mb-8 font-semibold text-center">
                Get started in 5 minutes
              </div>
              <div className="flex mb-5">
                <div className="w-6 h-6 rounded-xl flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary"
                  />
                </div>
                <div className="text-cyan text-base font-normal leading-normal ml-4">
                  45-day free trial
                </div>
              </div>
              <div className="flex mb-5">
                <div className="w-6 h-6 rounded-xl flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary"
                  />
                </div>
                <div className="text-cyan text-base font-normal leading-normal ml-4">
                  Peronalized onboarding
                </div>
              </div>
              <div className="flex mb-5">
                <div className="w-6 h-6 rounded-xl flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary"
                  />
                </div>
                <div className="text-cyan text-base font-normal leading-normal ml-4">
                  Access to all features
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-4 mt-10">
                <button
                  className="bg-[#F6F6F6] text-cyan font-normal font-inter py-3 px-5 rounded-md focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Learn More
                </button>
                <button
                  className="bg-primary text-white font-normal font-inter py-3 px-5 rounded-md focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Get Started
                </button>
              </div>
            </div>
            <div className="lg:-mr-28">
              <Image
                src={Dashboard}
                alt="Dashboard"
                width={600}
                height={600}
                className="object-contain hidden lg:block"
              />
              <Image
                src={MobileDasboard}
                alt="Dashboard"
                width={600}
                height={600}
                className="object-contain lg:hidden"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
