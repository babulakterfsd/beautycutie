import Image from 'next/image';
import visionimg from '../../public/assets/images/ourvisiondesktop.png';
import ultasurjo from '../../public/assets/images/ultashurjo.png';

const About = () => {
  return (
    <section>
      {/* story section */}
      <div className="mt-32 md:mt-32 lg:mt-44">
        <h4 className="text-center text-primary font-inter font-semibold text-sm md:text-[1rem]">
          Our values
        </h4>
        <div className="flex justify-center items-center gap-x-0 mb-4 lg:mb-5">
          <Image
            src={ultasurjo}
            alt="Ultasurjo"
            className="object-contain h-20 w-20 -mt-16 -ml-16"
          />
          <h5 className="text-cyan text-center text-4xl font-semibold lg:leading-[44px] lg:tracking-[-.72px] -ml-3">
            Our story
          </h5>
        </div>
        <p className="font-inter text-[1.2rem] leading-[30px] text-cyan px-4 md:px-16 text-center lg:w-4/6 lg:mx-auto">
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
        <h4 className="text-center text-primary font-inter font-semibold text-sm md:text-[1rem]">
          About us
        </h4>
        <h5 className="text-cyan text-center text-4xl font-semibold lg:leading-[44px] lg:tracking-[-.72px] mb-4">
          Our vision
        </h5>
        <Image
          src={visionimg}
          alt="Vision"
          className="object-contain w-full hidden lg:block px-32 my-10"
        />
        <p className="font-inter text-[1.2rem] leading-[30px] text-cyan px-4 md:px-16 text-center lg:w-4/6 lg:mx-auto">
          Running a service oriented business that works on appointments is hell
          of a work. The business model simply doesn’t leave much room to hire
          front desk staff till you grow substantially in number of staff.
          Besides, time is very important as you earn 1 to 1 in every hour. So a
          no-show can be very costly as well as an empty agenda or even worse
          customers not being able to book their appointment easily. Being a
          perfectionist and enjoying the interaction with clients, usually comes
          with a dislike for using computer. These are only a few difficulties
          of running a business like a hairdressing salon. Sadly a lot of people
          don’t think of our business type to be so challenging. But we know it.
          We have experience it. And our goal is to make your life easier, to
          make our businesses more profitable and to help you take a bigger
          share home weather you are a one man business or a multi-location.
        </p>
      </div>
    </section>
  );
};

export default About;
