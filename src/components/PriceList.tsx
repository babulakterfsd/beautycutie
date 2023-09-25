import Image from 'next/image';
import Feature1 from '../../public/assets/images/feature1.png';
import Feature2 from '../../public/assets/images/feature2.png';
import Feature3 from '../../public/assets/images/feature3.png';
import Feature4 from '../../public/assets/images/feature4.png';
import Feature5 from '../../public/assets/images/feature5.png';
import Feature6 from '../../public/assets/images/feature6.png';

const PriceList = () => {
  return (
    <div className="mt-16 md:mt-16 lg:mt-16">
      <div className="flex flex-col text-start gap-10 lg:flex-row justify-between">
        <div className="lg:w-1/3" data-aos="fade-up" data-aos-duration="1500">
          <Image
            src={Feature1}
            alt="phone"
            width={40}
            height={40}
            className="object-contain text-start mb-4 lg:mb-5 shadow-lg rounded-full"
          />
          <h5 className="text-xl leading-8 font-semibold text-cyan font-inter">
            Is there a free trial available?
          </h5>
          <p className="text-base leading-6 font-normal text-cyan font-inter mb-4 lg:mb-5">
            Yes, you can try us for free for 30 days. Our friendly team will
            work with you to get you up and running as soon as possible.
          </p>
        </div>
        <div className="lg:w-1/3" data-aos="fade-up" data-aos-duration="1500">
          <Image
            src={Feature2}
            alt="phone"
            width={40}
            height={40}
            className="object-contain mb-4 lg:mb-5 shadow-lg rounded-full"
          />
          <h5 className="text-xl leading-8 font-semibold text-cyan font-inter">
            Can I change my plan later?
          </h5>
          <p className="text-base leading-6 font-normal text-cyan font-inter mb-4 lg:mb-5">
            Of course. Our pricing scales with your company. Chat to our
            friendly team to find a solution that works for you.
          </p>
        </div>
        <div className="lg:w-1/3" data-aos="fade-up" data-aos-duration="1500">
          <Image
            src={Feature3}
            alt="phone"
            width={40}
            height={40}
            className="object-contain mb-4 lg:mb-5 shadow-lg rounded-full"
          />
          <h5 className="text-xl leading-8 font-semibold text-cyan font-inter">
            What is your cancellation policy?
          </h5>
          <p className="text-base leading-6 font-normal text-cyan font-inter mb-4 lg:mb-5">
            We understand that things change. You can cancel your plan at any
            time.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-10 mt-12 lg:flex-row lg:mt-16 justify-between">
        <div className="lg:w-1/3" data-aos="fade-up" data-aos-duration="1500">
          <Image
            src={Feature4}
            alt="phone"
            width={40}
            height={40}
            className="object-contain mb-4 lg:mb-5 shadow-lg rounded-full"
          />
          <h5 className="text-xl leading-8 font-semibold text-cyan font-inter">
            Can other info be added to an invoice?
          </h5>
          <p className="text-base leading-6 font-normal text-cyan font-inter mb-4 lg:mb-5">
            At the moment, the only way to add additional information to
            invoices is to add the information to the workspace's name.
          </p>
        </div>
        <div className="lg:w-1/3" data-aos="fade-up" data-aos-duration="1500">
          <Image
            src={Feature5}
            alt="phone"
            width={40}
            height={40}
            className="object-contain mb-4 lg:mb-5 shadow-lg rounded-full"
          />
          <h5 className="text-xl leading-8 font-semibold text-cyan font-inter">
            How does billing work?
          </h5>
          <p className="text-base leading-6 font-normal text-cyan font-inter mb-4 lg:mb-5">
            Plans are per workspace, not per account. You can upgrade one
            workspace, and still have any number of free workspaces.
          </p>
        </div>
        <div className="lg:w-1/3" data-aos="fade-up" data-aos-duration="1500">
          <Image
            src={Feature6}
            alt="phone"
            width={40}
            height={40}
            className="object-contain mb-4 lg:mb-5 shadow-lg rounded-full"
          />
          <h5 className="text-xl leading-8 font-semibold text-cyan font-inter">
            How do I change my account email?
          </h5>
          <p className="text-base leading-6 font-normal text-cyan font-inter mb-4 lg:mb-5">
            You can change the email address associated with your account by
            going to untitled.com/account from a laptop or desktop.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
