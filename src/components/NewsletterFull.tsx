'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import lotsoficons from '../../public/assets/images/lotsoficonsglobal.png';

const NewsletterFull = () => {
  const [email, setEmail] = useState('');

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`You have entered ${email}`);
    setEmail('');
  };

  return (
    <section className={`lg:mt-44 lg:w-full gradientBg`}>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-4 hidden md:block"></div>
        <div className="col-span-12 md:col-span-4 flex justify-center items-center flex-col">
          <h2 className="text-center text-cyan font-inter lg:text-3xl lg:font-semibold lg:leading-[44px] lg:tracking-[-.72px] lg:mb-5">
            Join our newsletter
          </h2>
          <p className="text-cyan font-inter text-center lg:text-[1.2rem] lg:mb-10">
            Be the first to know when new jobs are posted!
          </p>
          <form className="flex lg:gap-x-4 self-start" onSubmit={formHandler}>
            <div>
              <input
                type="email"
                id="email"
                aria-describedby="helper-text-explanation"
                className="bg-white text-cyan text-sm rounded-lg focus:outline-none w-full lg:w-[350px] lg:px-4 lg:py-3"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p
                id="helper-text-explanation"
                className="mt-2 text-sm text-[#475467]"
              >
                We care about your in our{' '}
                <Link href="/" className="underline">
                  privacy policy
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="bg-[#A8DDE6] lg:h-[42px] flex items-center text-center rounded-lg lg:px-4 lg:py-[8px] text-white font-inter lg:tracking-[-0.205px] font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="col-span-12 md:col-span-4 hidden md:flex justify-end lg:mr-2">
          <Image src={lotsoficons} alt="lots of icons" />
        </div>
      </div>
    </section>
  );
};

export default NewsletterFull;
