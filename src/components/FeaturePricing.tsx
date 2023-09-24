import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Feature1 from '../../public/assets/images/feature1.png';
import Feature2 from '../../public/assets/images/feature2.png';
import Feature3 from '../../public/assets/images/feature3.png';

const FeaturePricing = () => {
  return (
    <section className="lg:bg-[#F9FAFB]">
      <div className="main-container">
        <div className="mt-16 lg:pt-24 lg:mt-24">
          <div className="hidden lg:block lg:pb-16">
            <div className="flex justify-start">
              <div>
                <p className="text-sm leading-5 lg:text-base lg:leading-6 font-semibold font-inter text-primary">
                  Pricing
                </p>
                <h1 className="text-4xl leading-10 lg:text-5xl lg:leading-[60px] font-semibold font-inter text-cyan mt-3">
                  Pricing as simple as our cards
                </h1>
                <p className="text-sm leading-7 lg:text-xl lg:leading-7 font-inter font-normal text-cyan mt-3">
                  Simple, transparent pricing that grows with you. Try any plan
                  free for 45 days.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-16 lg:pb-24 lg:mb-24">
          <div className="flex flex-col lg:flex-row lg:gap-24 justify-between">
            <div className="flex items-center">
              <div className="hidden lg:block">
                <div className="flex flex-col lg:flex-row items-center justify-start">
                  <Image
                    src={Feature1}
                    alt="phone"
                    width={40}
                    height={40}
                    className="object-contain text-center mx-auto mb-4 lg:mb-[80px] shadow-lg rounded-full"
                  />
                  <div className="ml-4">
                    <h5 className="text-xl leading-8 font-semibold text-cyan font-inter">
                      Share team inboxes
                    </h5>
                    <p className="text-base leading-6 font-normal text-cyan font-inter mb-4 lg:mb-5">
                      Whether you have a team of 2 or 200, our shared team
                      inboxes keep everyone on the same page and in the loop.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-start">
                  <Image
                    src={Feature2}
                    alt="phone"
                    width={40}
                    height={40}
                    className="object-contain text-center mx-auto mb-4 lg:mb-[60px] shadow-lg rounded-full"
                  />
                  <div className="ml-4">
                    <h5 className="text-xl leading-8 font-semibold text-cyan font-inter">
                      Deliver instant answers
                    </h5>
                    <p className="text-base leading-6 font-normal text-cyan font-inter mb-4 lg:mb-5">
                      An all-in-one customer service platform that helps you
                      balance everything your customers need to be happy.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-start">
                  <Image
                    src={Feature3}
                    alt="phone"
                    width={40}
                    height={40}
                    className="object-contain text-center mx-auto mb-4 lg:mb-[80px] shadow-lg rounded-full"
                  />
                  <div className="ml-4">
                    <h5 className="text-xl leading-8 font-semibold text-cyan font-inter">
                      Manage your team with reports
                    </h5>
                    <p className="text-base leading-6 font-normal text-cyan font-inter mb-4 lg:mb-5">
                      Measure what matters with Untitled’s easy-to-use reports.
                      You can filter, export, and drilldown on the data in a
                      couple clicks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex justify-center">
              <div className="bg-white rounded-2xl shadow-md border border-gray-200 w-full md:w-[576px]">
                <div className="flex flex-col-reverse justify-between lg:flex-row p-2 lg:p-8 pb-6 border-b border-gray-200">
                  <div className="text-cyan text-2xl font-semibold font-inter leading-loose">
                    Squad
                    <span className="px-2.5 py-0.5 text-primary text-sm font-medium leading-tight bg-purple-50 rounded-2xl font-inter">
                      Popular
                    </span>
                    <div className="text-cyan text-base font-normal font-inter leading-normal">
                      Our most popular plan for small teams.
                    </div>
                  </div>
                  <div className="flex justify-start items-end gap-0.5 text-cyan text-base font-normal leading-normal">
                    <div className="pb-5 flex-col justify-start items-start gap-2.5">
                      <div className="text-cyan text-4xl font-semibold">$</div>
                    </div>
                    <div className="text-cyan text-5xl font-semibold">43.5</div>
                    <div className="pb-2 justify-start items-start">
                      <div className="text-cyan text-base font-medium leading-normal">
                        per month
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8 pb-10 border-b border-gray-200">
                  <div className="text-cyan text-base font-semibold leading-normal">
                    FEATURES
                  </div>
                  <div className="text-cyan text-base font-normal leading-normal">
                    Everything in our{' '}
                    <span className="font-semibold">free plan</span> plus....
                  </div>

                  {/* feature item */}
                  <div className="mt-6 flex lg:flex-row flex-col justify-between gap-4">
                    <div>
                      <div className="flex mb-4">
                        <div className="w-6 h-6 rounded-xl flex justify-center items-center">
                          <FontAwesomeIcon
                            icon={faCircleCheck}
                            className="text-primary"
                          />
                        </div>
                        <div className="text-cyan text-base font-normal leading-normal ml-4">
                          Access to basic features oimI
                        </div>
                      </div>
                      <div className="flex mb-4">
                        <div className="w-6 h-6 rounded-xl flex justify-center items-center">
                          <FontAwesomeIcon
                            icon={faCircleCheck}
                            className="text-primary"
                          />
                        </div>
                        <div className="text-cyan text-base font-normal leading-normal ml-3">
                          Basic reporting + analytics
                        </div>
                      </div>
                      <div className="flex mb-4">
                        <div className="w-6 h-6 rounded-xl flex justify-center items-center">
                          <FontAwesomeIcon
                            icon={faCircleCheck}
                            className="text-primary"
                          />
                        </div>
                        <div className="text-cyan text-base font-normal leading-normal ml-3">
                          Up to 10 individual users
                        </div>
                      </div>
                      <div className="flex mb-4">
                        <div className="w-6 h-6 rounded-xl flex justify-center items-center">
                          <FontAwesomeIcon
                            icon={faCircleCheck}
                            className="text-primary"
                          />
                        </div>
                        <div className="text-cyan text-base font-normal leading-normal ml-3">
                          20GB individual data
                        </div>
                      </div>
                      <div className="flex mb-4">
                        <div className="w-6 h-6 rounded-xl flex justify-center items-center">
                          <FontAwesomeIcon
                            icon={faCircleCheck}
                            className="text-primary"
                          />
                        </div>
                        <div className="text-cyan text-base font-normal leading-normal ml-3">
                          Basic chat support
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex mb-4">
                        <div className="w-6 h-6 rounded-xl flex justify-center items-center">
                          <FontAwesomeIcon
                            icon={faCircleCheck}
                            className="text-primary"
                          />
                        </div>
                        <div className="text-cyan text-base font-normal leading-normal ml-4">
                          Access to basic features oimI
                        </div>
                      </div>
                      <div className="flex mb-4">
                        <div className="w-6 h-6 rounded-xl flex justify-center items-center">
                          <FontAwesomeIcon
                            icon={faCircleCheck}
                            className="text-primary"
                          />
                        </div>
                        <div className="text-cyan text-base font-normal leading-normal ml-3">
                          Basic reporting + analytics
                        </div>
                      </div>
                      <div className="flex mb-4">
                        <div className="w-6 h-6 rounded-xl flex justify-center items-center">
                          <FontAwesomeIcon
                            icon={faCircleCheck}
                            className="text-primary"
                          />
                        </div>
                        <div className="text-cyan text-base font-normal leading-normal ml-3">
                          Up to 10 individual users
                        </div>
                      </div>
                      <div className="flex mb-4">
                        <div className="w-6 h-6 rounded-xl flex justify-center items-center">
                          <FontAwesomeIcon
                            icon={faCircleCheck}
                            className="text-primary"
                          />
                        </div>
                        <div className="text-cyan text-base font-normal leading-normal ml-3">
                          20GB individual data
                        </div>
                      </div>
                      <div className="flex mb-4">
                        <div className="w-6 h-6 rounded-xl flex justify-center items-center">
                          <FontAwesomeIcon
                            icon={faCircleCheck}
                            className="text-primary"
                          />
                        </div>
                        <div className="text-cyan text-base font-normal leading-normal ml-3">
                          Basic chat support
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-start items-center gap-3">
                    <button
                      className="w-full bg-primary text-white font-normal font-inter py-3 px-5 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturePricing;
