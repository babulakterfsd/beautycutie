import Image from 'next/image';
import ContactForm from '../contact/ContactForm';
import NewsletterHalf from '../shared/NewsletterHalf';

const getintouchimg = '/assets/images/getintouch.png';
const getintouch2img = '/assets/images/getintouch2smallicon.png';
const visionimg = '/assets/images/ourvisiondesktop.png';
const ultasurjo = '/assets/images/ultashurjo.png';

const About = () => {
  return (
    <section>
      {/* story section */}
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
            width={80}
            height={80}
          />
          <h5 className="text-cyan text-center text-4xl font-semibold lg:leading-[44px] lg:tracking-[-.72px] -ml-3">
            Our story
          </h5>
        </div>
        <p
          className="font-inter text-[1.2rem] leading-[30px] text-cyan px-4 md:px-16 text-center lg:w-4/6 lg:mx-auto"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          "Picture this: once upon a time, there was a salon owner, let's call
          her Mrs. X, who's excellent at doing perfect brows and lashes but
          struggled with handling bookings. No shows, unanswered emails,
          WhatsApp messages from clients during off-hours, voice messages, late
          cancellations, no time to send emails for marketing - the list went on
          and on. Mrs. X tried different booking systems but found that each of
          them missed some crucial features. She couldn't believe that there was
          no perfect solution in the market. That's when Mr. X partner decided
          to take matters into his own hands and build a state-of-the-art
          booking system. The result? Bookitu - a booking system designed by
          salon owners, for salon owners. No more headaches and missed
          opportunities - just a system that works as hard as you do to make
          your salon run smoothly."
        </p>
      </div>
      {/* vision section */}
      <div className="mt-32 md:mt-32 lg:mt-44">
        <h4
          className="text-center text-primary font-inter font-semibold text-sm md:text-[1rem]"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          About us
        </h4>
        <h5
          className="text-cyan text-center text-4xl font-semibold lg:leading-[44px] lg:tracking-[-.72px] mb-4"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          Our vision
        </h5>
        <Image
          src={visionimg}
          alt="Vision"
          className="object-contain w-full hidden lg:block px-32 my-10"
          data-aos="fade-down"
          data-aos-duration="2500"
          width={1600}
          height={400}
        />
        <p
          className="font-inter text-[1.2rem] leading-[30px] text-cyan px-4 md:px-16 text-center lg:w-4/6 lg:mx-auto"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Running a service oriented business that works on appointments is hell
          of a work. The business model simply doesn’t leave much room to hire
          front desk staff till you grow substantially in number of staff.
          Besides, time is very important as you earn 1 to 1 in every hour. So a
          no-show can be very costly as well as an empty agenda or even worse
          customers not being able to book their appointment easily. Being a
          perfectionist and enjoying the interaction with clients, usually comes
          with a dislike for using computer. These are only a few difficulties
          of running a business like a hairdressing salon. Sadly a lot of people
          don't think of our business type to be so challenging. But we know it.
          We have experience it. And our goal is to make your life easier, to
          make our businesses more profitable and to help you take a bigger
          share home weather you are a one man business or a multi-location.
        </p>
      </div>
      {/* newsletter section */}
      <div
        className="px-6 md:px-16 lg:px-32 py-12"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <NewsletterHalf />
      </div>
      {/* contact section */}
      <div className="grid grid-cols-12 -mt-16 md:mt-10 lg:mt-28 px-4 lg:px-2">
        <div className="col-span-12 md:col-span-3 relative">
          <Image
            src={getintouchimg}
            alt="Get in touch"
            className="object-cover lg:w-[431px]"
            width={431}
            height={431}
          />
          <Image
            src={getintouch2img}
            alt="Get in touch"
            className="md:hidden absolute -bottom-20 left-52"
            width={80}
            height={80}
          />
        </div>
        <div className="col-span-12 md:col-span-6 mt-6 lg:mb-16">
          <ContactForm />
        </div>
        <div className="col-span-12 md:col-span-3">
          <Image
            src={getintouch2img}
            alt="Get in touch"
            className="hidden md:block md:-ml-36 lg:ml-0 lg:mt-60"
            width={80}
            height={80}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
