import Image from 'next/image';
import ultasurjo from '../../public/assets/images/ultashurjo.png';

const About = () => {
  return (
    <section className="mt-32 md:mt-32 lg:mt-44">
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
        "Picture this: once upon a time, there was a salon owner, let's call her
        Mrs. X, who's excellent at doing perfect brows and lashes but struggled
        with handling bookings. No shows, unanswered emails, WhatsApp messages
        from clients during off-hours, voice messages, late cancellations, no
        time to send emails for marketing - the list went on and on. Mrs. X
        tried different booking systems but found that each of them missed some
        crucial features. She couldn't believe that there was no perfect
        solution in the market. That's when Mr. X partner decided to take
        matters into his own hands and build a state-of-the-art booking system.
        The result? Bookitu - a booking system designed by salon owners, for
        salon owners. No more headaches and missed opportunities - just a system
        that works as hard as you do to make your salon run smoothly."
      </p>
    </section>
  );
};

export default About;
