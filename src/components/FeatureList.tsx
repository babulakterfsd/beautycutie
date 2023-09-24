import Image from 'next/image';
import Feature1 from '../../public/assets/images/feature1.png';
import Feature2 from '../../public/assets/images/feature2.png';
import Feature3 from '../../public/assets/images/feature3.png';
import Feature4 from '../../public/assets/images/feature4.png';
import Feature5 from '../../public/assets/images/feature5.png';
import Feature6 from '../../public/assets/images/feature6.png';

const FeatureList = () => {
  return (
    <div className="mt-12 md:mt-12 lg:mt-16">
      <div className="flex flex-col text-center gap-10 lg:flex-row justify-between">
        <div className="lg:w-1/3">
          <Image
            src={Feature1}
            alt="phone"
            width={40}
            height={40}
            className="object-contain text-center mx-auto mb-4 lg:mb-5 shadow-lg rounded-full"
          />
          <h5 className="text-xl leading-8 font-semibold text-cyan font-inter">
            No shows limit
          </h5>
          <p className="text-base leading-6 font-normal text-cyan font-inter mb-4 lg:mb-5">
            We Say limit your no-shows as much as you like instead of saying.
            Say goodbye to no-shows, even with reminder emails
          </p>
        </div>
        <div className="lg:w-1/3">
          <Image
            src={Feature2}
            alt="phone"
            width={40}
            height={40}
            className="object-contain text-center mx-auto mb-4 lg:mb-5 shadow-lg rounded-full"
          />
          <h5 className="text-xl leading-8 font-semibold text-cyan font-inter">
            Create and sell
          </h5>
          <p className="text-base leading-6 font-normal text-cyan font-inter mb-4 lg:mb-5">
            Create and Sell packages and track booked sessions effortlessly
          </p>
        </div>
        <div className="lg:w-1/3">
          <Image
            src={Feature3}
            alt="phone"
            width={40}
            height={40}
            className="object-contain text-center mx-auto mb-4 lg:mb-5 shadow-lg rounded-full"
          />
          <h5 className="text-xl leading-8 font-semibold text-cyan font-inter">
            Subscribe
          </h5>
          <p className="text-base leading-6 font-normal text-cyan font-inter mb-4 lg:mb-5">
            Build subscriptions out of your treatments and sell them online
          </p>
        </div>
      </div>
      <div className="flex flex-col text-center gap-10 mt-12 lg:flex-row lg:mt-16 justify-between">
        <div className="lg:w-1/3">
          <Image
            src={Feature4}
            alt="phone"
            width={40}
            height={40}
            className="object-contain text-center mx-auto mb-4 lg:mb-5 shadow-lg rounded-full"
          />
          <h5 className="text-xl leading-8 font-semibold text-cyan font-inter">
            Off Pick Hours
          </h5>
          <p className="text-base leading-6 font-normal text-cyan font-inter mb-4 lg:mb-5">
            Automatically fill up your off-peak hours
          </p>
        </div>
        <div className="lg:w-1/3">
          <Image
            src={Feature5}
            alt="phone"
            width={40}
            height={40}
            className="object-contain text-center mx-auto mb-4 lg:mb-5 shadow-lg rounded-full"
          />
          <h5 className="text-xl leading-8 font-semibold text-cyan font-inter">
            Discounts
          </h5>
          <p className="text-base leading-6 font-normal text-cyan font-inter mb-4 lg:mb-5">
            Offer last minute discounts
          </p>
        </div>
        <div className="lg:w-1/3">
          <Image
            src={Feature6}
            alt="phone"
            width={40}
            height={40}
            className="object-contain text-center mx-auto mb-4 lg:mb-5 shadow-lg rounded-full"
          />
          <h5 className="text-xl leading-8 font-semibold text-cyan font-inter">
            We are innovative
          </h5>
          <p className="text-base leading-6 font-normal text-cyan font-inter mb-4 lg:mb-5">
            We make it fun and easy for your clients to book and manage their
            appointments
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureList;
