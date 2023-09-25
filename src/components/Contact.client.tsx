import Image from 'next/image';
import Link from 'next/link';
import Phone from '../../public/assets/images/contactphone.png';
import GetInTouch from '../../public/assets/images/getintouch.png';
import Email from '../../public/assets/images/pricemailicon.png';
import ContactForm from './ContactForm';
import NewsletterFull from './NewsletterFull';

const Contact = () => {
  return (
    <>
      <section id="contact_breadcrumbs">
        <div className="main-container">
          <div className="py-16 lg:py-24">
            <div className="flex justify-center">
              <div>
                <p
                  className="text-sm leading-5 lg:text-base lg:leading-6 font-semibold font-inter text-primary text-center"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
                  Contact Us
                </p>
                <h1
                  className="text-4xl leading-10 lg:text-5xl lg:leading-[60px] font-semibold font-inter text-center text-cyan mt-3"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
                  We’d love to hear from you
                </h1>
                <p
                  className="text-sm leading-7 lg:text-xl lg:leading-7 font-inter font-normal text-center text-cyan mt-3"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
                  Our friendly team is always here to chat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact_info">
        <div className="main-container">
          <div className="px-4 pb-16 lg:px-20 lg:pb-24">
            <div className="flex flex-col text-center gap-10 lg:flex-row justify-between">
              <div data-aos="fade-up" data-aos-duration="1500">
                <Image
                  src={Email}
                  alt="phone"
                  width={40}
                  height={40}
                  className="object-contain text-center mx-auto mb-4 lg:mb-5 shadow-lg rounded-full"
                />
                <h5 className="text-xl leading-8 font-semibold text-cyan font-inter">
                  Email
                </h5>
                <p className="text-base leading-6 font-normal text-cyan font-inter     mb-4 lg:mb-5">
                  Our friendly team is here to help.
                </p>
                <Link
                  href="mailto:Ahmad@gmail.com"
                  className="text-base leading-6 font-normal text-primary font-inter"
                >
                  Ahmad@gmail.com
                </Link>
              </div>
              <div data-aos="fade-up" data-aos-duration="1500">
                <Image
                  src={Phone}
                  alt="phone"
                  width={40}
                  height={40}
                  className="object-contain text-center mx-auto mb-4 lg:mb-5 shadow-lg rounded-full"
                />
                <h5 className="text-xl leading-8 font-semibold text-cyan font-inter">
                  What’s app
                </h5>
                <p className="text-base leading-6 font-normal text-cyan font-inter     mb-4 lg:mb-5">
                  Send message to say hello.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-duration="1500">
                <Image
                  src={Phone}
                  alt="phone"
                  width={40}
                  height={40}
                  className="object-contain text-center mx-auto mb-4 lg:mb-5 shadow-lg rounded-full"
                />
                <h5 className="text-xl leading-8 font-semibold text-cyan font-inter">
                  Phone
                </h5>
                <p className="text-base leading-6 font-normal text-cyan font-inter     mb-4 lg:mb-5">
                  Mon-Fri from 8am to 5pm.
                </p>
                <Link
                  href="callto:+1 (555) 000-0000"
                  className="text-base leading-6 font-normal text-primary font-inter"
                >
                  +1 (555) 000-0000
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact_form">
        <div className="main-container">
          <div className="mb-16 lg:mb-24">
            <div className="flex justify-center">
              <div>
                <Image
                  src={GetInTouch}
                  alt="contact us"
                  width={400}
                  height={400}
                  className="object-contain text-center mx-auto"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                />
              </div>
            </div>
          </div>
          {/* contact form */}
          <ContactForm />
        </div>
        <div className="px-4 md:px-0">
          <NewsletterFull />
        </div>
      </section>
    </>
  );
};

export default Contact;
