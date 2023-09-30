import Image from 'next/image';
import GetInTouch from '../../public/assets/images/getintouch.png';
import MobileDasboard from '../../public/assets/images/mobile_feature.png';
import ultasurjo from '../../public/assets/images/price_sun.png';
import PriceCard from './PriceCard';
import PriceList from './PriceList';

const Pricing = () => {
  return (
    <>
      <section>
        <div className="mt-32 md:mt-32 lg:mt-44">
          <h4
            className="text-center text-primary font-inter font-semibold text-sm md:text-[1rem]"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            Pricing
          </h4>
          <div className="flex justify-center items-center gap-x-0 mb-4 lg:mb-5">
            <h5
              className="hidden lg:block text-cyan text-center text-4xl px-2 font-semibold lg:leading-[44px] lg:tracking-[-.72px] -ml-3"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              Your time matters to us
            </h5>
            <Image
              src={ultasurjo}
              alt="Ultasurjo"
              className=" hidden lg:block h-20 w-20 object-contain -mt-16 -ml-4"
              data-aos="fade-down"
              data-aos-duration="1500"
            />
            <h5
              className="block lg:hidden text-cyan text-center text-4xl px-2 font-semibold lg:leading-[44px] lg:tracking-[-.72px] -ml-3"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              Plans that fit your scale
            </h5>
          </div>
          <p
            className="font-inter lg:text-[1.2rem] text-lg leading-[30px] text-cyan px-4 md:px-16 text-center lg:w-4/6 lg:mx-auto"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            Simple, transparent pricing that grows with you. Try any plan free
            for 45 days.
          </p>
        </div>
      </section>
      <section className="">
        <div className="main-container">
          <PriceCard />
        </div>
      </section>

      <section className="mt-8">
        <div className="main-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 items-center">
            <Image
              src={GetInTouch}
              alt="Get In Touch"
              className="object-contain"
              data-aos="fade-up"
              data-aos-duration="1500"
            />
            <div
              className="text-left lg:text-start mt-4 mb-6 md:mt-0 md:mb-0"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h4 className="text-cyan mb-2 font-inter font-semibold text-2xl lg:text-4xl">
                Need support?
              </h4>
              <p className="text-cyan">We are here to help you</p>
              <button className="bg-primary text-white font-inter font-normal py-3 px-5 rounded focus:outline-none focus:shadow-outline mt-2">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16 mt-8">
        <div className="main-container">
          <div className="lg:pb-16">
            <div className="">
              <div data-aos="fade-down" data-aos-duration="1500">
                <h1 className="text-4xl leading-10 lg:text-5xl lg:leading-[60px] font-semibold font-inter text-cyan">
                  FAQS
                </h1>
                <p className="text-sm leading-7 lg:text-xl lg:leading-7 font-inter font-normal lg:w-[44rem] text-cyan mt-3">
                  Everything you need to know about the product and billing.
                  Can’t find the answer you’re looking for? Please{' '}
                  <span className="underline cursor-pointer">
                    chat to our friendly team.
                  </span>
                </p>
              </div>
            </div>
            <PriceList />
            {/* still help */}
            <div
              className="flex flex-col lg:flex-row p-8 bg-gray-50 rounded-2xl justify-start lg:justify-between lg:items-center mt-8"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-cyan text-lg md:text-xl font-bold md:font-semibold font-inter leading-[30px]">
                  Still have questions?
                </div>
                <div className=" text-cyan text-lg font-normal font-inter leading-7">
                  Can’t find the answer you’re looking for? Please chat with our
                  friendly team.
                </div>
              </div>
              <div className="flex justify-start items-start gap-3 mt-3 lg:mt-0 text-start">
                <div className="px-5 py-3 bg-red-300 rounded-lg shadow border border-red-300 justify-start items-start gap-2 flex">
                  <div className="text-white text-base font-semibold font-inter leading-normal">
                    Get in touch
                  </div>
                </div>
              </div>
            </div>
            {/* last part */}
            <hr className="mt-8 lg:mt-16 mb-8" />
            <div className="flex flex-col lg:flex-row bg-gray-50 rounded-3xl justify-start items-center lg:mt-16">
              <div className="flex-col justify-center items-start lg:gap-10 flex px-6 py-8 lg:p-16">
                <div className="self-stretch  flex-col justify-start items-start gap-5 flex">
                  <div className="self-stretch text-cyan text-xl lg:text-4xl font-semibold font-inter leading-[30px] lg:leading-[44px]">
                    Join us to grow your business
                  </div>
                  <div className=" text-cyan text-sm lg:text-xl font-normal font-inter leading-[30px]">
                    Start your 45 days free trial today.
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 w-full mt-6 lg:mt-3">
                  <div className="px-5 py-3 bg-white rounded-lg shadow border border-gray-300 justify-center items-center gap-2 flex cursor-pointer">
                    <div className="text-cyan text-base font-semibold font-inter leading-normal">
                      Learn more
                    </div>
                  </div>
                  <div className="px-5 py-3 bg-red-300 rounded-lg shadow border border-red-300 justify-center items-center gap-2 flex cursor-pointer">
                    <div className="text-white text-base font-semibold font-inter leading-normal">
                      Get started
                    </div>
                  </div>
                </div>
              </div>
              <Image
                src={MobileDasboard}
                alt="Dashboard"
                width={600}
                height={600}
                className="object-contain mt-5 md:mt-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
