import Image from 'next/image';
import easypricingicon from '../../public/assets/images/easypricingicon.png';
import fairpricingicon from '../../public/assets/images/fairpricingicon.png';
import msgicon from '../../public/assets/images/msgicon.png';

const WhyChoosingUs = () => {
  return (
    <section className="mt-28 lg:mt-36 main-container lg:px-24">
      <h2 className="text-[#67748E] text-center font-inter text-3xl font-semibold capitalize letterGap md:hidden">
        Why choose us?
      </h2>
      <h2 className="text-[#67748E] text-center font-roboto md:text-2xl lg:text-4xl font-medium capitalize letterGap hidden md:block">
        Why Choosing <span>Bookitu</span> Over Other Booking Systems?
      </h2>
      <div className="mt-12 lg:mt-20  grid grid-cols-12 gap-y-5 lg:gap-x-8">
        {/* programmatic approach */}
        <div className="col-span-12 md:col-span-4 flex flex-col md:justify-center md:items-center">
          <Image
            src={msgicon}
            alt="msgicon"
            className="h-10 w-10 md:h-12 md:w-12"
          />
          <h4 className="text-[#67748E] font-inter font-semibold lg:leading-[30px] mt-4 mb-2">
            Pragmatic approach
          </h4>
          <p className="text-[#67748E] font-inter lg:leading-[24px] md:text-center">
            We take work off your shoulders, instead of adding more work to
            manage an application
          </p>
        </div>
        {/* programmatic approach */}
        <div className="col-span-12 md:col-span-4 flex flex-col md:justify-center md:items-center">
          <Image
            src={fairpricingicon}
            alt="msgicon"
            className="h-10 w-10 md:h-12 md:w-12"
          />
          <h4 className="text-[#67748E] font-inter font-semibold lg:leading-[30px] mt-4 mb-2">
            Fair Pricing
          </h4>
          <p className="text-[#67748E] font-inter lg:leading-[24px] md:text-center">
            Do you work alone? We don't limit our features to only the
            highest-paid plan, unlike other booking systems.
          </p>
        </div>
        {/* Easy and Fun */}
        <div className="col-span-12 md:col-span-4 flex flex-col md:justify-center md:items-center">
          <Image
            src={easypricingicon}
            alt="msgicon"
            className="h-10 w-10 md:h-12 md:w-12"
          />
          <h4 className="text-[#67748E] font-inter font-semibold lg:leading-[30px] mt-4 mb-2">
            Easy and Fun
          </h4>
          <p className="text-[#67748E] font-inter lg:leading-[24px] md:text-center">
            We make it fun and easy for your clients to book and manage their
            appointments book and manage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoosingUs;
