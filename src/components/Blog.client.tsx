'use client';

import Link from 'next/link';
import { useState } from 'react';

const Blog = () => {
  const [email, setEmail] = useState('');

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      `${email ? `You have subscribed with ${email}` : 'Input correct email'}`
    );
    setEmail('');
  };

  return (
    <section>
      <div className="bg-gray-200">
        {/* blogs header */}
        <div className="main-container bg-gray-200 py-16 lg:py-24">
          <p className="text-sm leading-5 lg:text-base lg:leading-6 font-semibold font-inter text-primary">
            Resources
          </p>
          <h3 className="font-inter text-cyan text-4xl lg:text-5xl lg:font-semibold lg:leading-[60px] lg:tracking-[-.96px] mt-3">
            Untitled blog
          </h3>
          <p className="my-4 text-cyan font-inter lg:text-[1.2rem] lg:leading-[30px]">
            Tool and strategies modern teams need to help their companies grow.
          </p>
          {/* form */}
          <form
            className="flex flex-col gap-y-3 md:flex-row lg:gap-x-4 mt-8"
            onSubmit={formHandler}
          >
            <div>
              <input
                type="email"
                id="email"
                aria-describedby="helper-text-explanation"
                className="bg-white text-cyan text-sm rounded-lg focus:outline-none w-full md:w-[280px] lg:w-[350px] p-4 md:p-3 font-semibold md:font-normal"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p
                id="helper-text-explanation"
                className="mt-2 text-sm text-[#475467]"
              >
                We care about your in our{' '}
                <Link href="/blog" className="underline">
                  privacy policy
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="bg-primary md:h-[42px] lg:h-[42px] hidden md:flex items-center text-center rounded-lg md:px-3 lg:px-4 md:py-5 lg:py-[8px] text-white font-inter lg:tracking-[-0.205px] font-semibold md:ml-4 lg:ml-0"
            >
              Get Started
            </button>
            <button
              type="submit"
              className="bg-[#FFAAA5] text-[1rem] md:hidden items-center text-center rounded-lg p-3 text-white font-inter font-medium"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Blog;
