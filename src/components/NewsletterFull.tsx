'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import lotsoficons from '../../public/assets/images/lotsoficonsglobal.png';

const NewsletterFull = () => {
  const [email, setEmail] = useState('');

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`You have entered ${email ? email : 'nothing'}`);
    setEmail('');
  };

  return (
    <section
      className={`mb-16 md:mb-0 lg:mt-44 lg:w-full gradientBg rounded-3xl md:rounded-none`}
    >
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-4 hidden lg:block"></div>
        {/* main content */}
        <div className="col-span-12 lg:col-span-4 flex justify-center items-center flex-col px-7 md:px-0 py-10 md:py-8 lg:py-0">
          <h2 className="text-center text-cyan font-inter text-3xl font-semibold lg:leading-[44px] lg:tracking-[-.72px] mb-4 lg:mb-5">
            Join our newsletter
          </h2>
          <p className="text-cyan font-inter text-center text-[1.2rem] mb-8  lg:mb-10">
            Be the first to know when new jobs are posted!
          </p>
          <form
            className="flex flex-col gap-y-3 md:flex-row lg:gap-x-4 md:self-center lg:self-start mt-3 md:mt-0"
            onSubmit={formHandler}
          >
            <div>
              <input
                type="email"
                id="email"
                aria-describedby="helper-text-explanation"
                className="bg-white text-cyan text-sm rounded-lg focus:outline-none w-[280px] lg:w-[350px] p-4 md:p-3 font-semibold md:font-normal"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p
                id="helper-text-explanation"
                className="mt-2 text-sm text-[#475467] hidden md:block"
              >
                We care about your in our{' '}
                <Link href="/" className="underline">
                  privacy policy
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="bg-[#A8DDE6] md:h-[42px] lg:h-[42px] hidden md:flex items-center text-center rounded-lg md:px-3 lg:px-4 md:py-5 lg:py-[8px] text-white font-inter lg:tracking-[-0.205px] font-semibold md:ml-4 lg:ml-0"
            >
              Subscribe
            </button>
            <button
              type="submit"
              className="bg-[#FFAAA5] text-[1.1rem] md:hidden items-center text-center rounded-lg p-3 text-white font-inter font-semibold "
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="col-span-12 lg:col-span-4 hidden lg:flex justify-end lg:mr-2">
          <Image src={lotsoficons} alt="lots of icons" />
        </div>
      </div>
    </section>
  );
};

export default NewsletterFull;
