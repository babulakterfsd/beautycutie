'use client';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useState } from 'react';
import Ajaira from '../../public/assets/images/ajaira.png';

const pricingData = [
  {
    name: 'Maverick',
    monthlyPrice: 10,
    annualPrice: 100,
    features: [
      'Access to basic features',
      'Basic reporting and analytics',
      'Up to 10 individual users',
      '20GB individual data each user',
      'Basic chat and email support',
    ],
  },
  {
    name: 'Squad',
    monthlyPrice: 20,
    annualPrice: 200,
    features: [
      'Access to basic features',
      'Basic reporting and analytics',
      'Up to 10 individual users',
      '20GB individual data each user',
      'Basic chat and email support',
    ],
  },
  {
    name: 'Society',
    monthlyPrice: 30,
    annualPrice: 300,
    features: [
      'Access to basic features',
      'Basic reporting and analytics',
      'Up to 10 individual users',
      '20GB individual data each user',
      'Basic chat and email support',
    ],
  },
];

function PriceCard() {
  const [isMonthly, setIsMonthly] = useState(true);

  const togglePricing = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <>
      <div className="">
        <div className="p-4">
          <div className="flex justify-center my-4">
            <div
              className="bg-gray-50 rounded-lg border border-gray-100 justify-start items-center gap-2 p-1 inline-flex"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <button
                onClick={togglePricing}
                className={`${
                  isMonthly ? 'bg-white shadow text-cyan' : ''
                } px-3.5 py-2.5 rounded-md justify-center items-center gap-2 flex`}
              >
                <p className="text-base font-semibold">Monthly Billing</p>
              </button>
              <button
                onClick={togglePricing}
                className={`${
                  isMonthly ? '' : 'bg-white text-cyan shadow'
                } px-3.5 py-2.5 rounded-md justify-center items-center gap-2 flex`}
              >
                <p className="text-base font-semibold">Annual Billing</p>
              </button>
            </div>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 gap-y-14 mt-6 md:mt-0">
          {pricingData.map((plan, index) => (
            <div
              className="card relative h-auto w-auto bg-gray-50 rounded-lg"
              key={index}
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div
                id="card_one_front"
                className="front px-7 py-8 rounded-lg border-2 border-solid border-color-gray h-full w-full relative"
              >
                <div className="text-center">
                  <h3 className="text-xl text-cyan font-bold pb-3 text-center">
                    {plan.name}
                  </h3>
                  <p className="text-6xl font-bold pb-3">
                    {isMonthly
                      ? `$${plan.monthlyPrice}`
                      : `$${plan.annualPrice}`}
                    <span className="text-sm text-cyan font-normal tracking-widest">
                      {isMonthly ? `/Per Month` : `/Per year`}
                    </span>
                  </p>
                  <p className="leading-relaxed text-base text-cyan">
                    Our most popular plan.
                  </p>
                </div>
                <ul className="space-y-4 mt-8 pb-10">
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="text-primary"
                      />
                      <span className="pl-3 text-cyan">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className="w-full bg-primary text-white font-normal font-inter py-3 px-5 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Get started
                </button>
              </div>
              <div className="text-center absolute -top-4 left-0 right-0">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-primary text-4xl inline-block"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Image
        src={Ajaira}
        alt="Ajaira"
        className="absolute hidden lg:block h-20 w-32 top-[54.25rem] right-[4.25rem] object-contain"
      />
    </>
  );
}

export default PriceCard;
