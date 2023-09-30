'use client';

import { BlogData } from '@/lib/BlogData';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Blog = () => {
  const [email, setEmail] = useState('');
  const [activeCategory, setActiveCategory] = useState('View all');

  let blogCategories: string[] = ['View all'];
  for (const blog of BlogData) {
    if (!blogCategories.includes(blog.category)) {
      blogCategories.push(blog.category);
    }
  }

  const subscribeFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      `${email ? `You have subscribed with ${email}` : 'Input correct email'}`
    );
    setEmail('');
  };

  const blogSearchFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('We are working on this feature');
  };

  return (
    <section>
      <div className="bg-gray-200">
        {/* blogs header */}
        <div className="main-container bg-gray-200 py-16 lg:py-24">
          <p
            className="text-sm leading-5 lg:text-base lg:leading-6 font-semibold font-inter text-primary"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            Resources
          </p>
          <h3
            className="font-inter text-cyan text-4xl lg:text-5xl lg:font-semibold lg:leading-[60px] lg:tracking-[-.96px] mt-3"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            Untitled blog
          </h3>
          <p
            className="my-4 text-cyan font-inter lg:text-[1.2rem] lg:leading-[30px]"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            Tool and strategies modern teams need to help their companies grow.
          </p>
          {/* form */}
          <form
            className="flex flex-col gap-y-3 md:flex-row lg:gap-x-4 mt-8"
            onSubmit={subscribeFormHandler}
            data-aos="fade-up"
            data-aos-duration="1500"
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
              Get started
            </button>
            <button
              type="submit"
              className="bg-[#FFAAA5] text-[1rem] md:hidden items-center text-center rounded-lg p-3 text-white font-inter font-medium"
            >
              Get started
            </button>
          </form>
        </div>
      </div>
      {/* main blog contents */}
      <div className="main-container py-16 lg:py-24 grid grid-cols-12">
        {/* menu */}
        <div
          className="col-span-12 md:col-span-3"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <form onSubmit={blogSearchFormHandler} className="hidden md:block">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-cyan sr-only"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 items-center pl-5 pointer-events-none hidden lg:flex">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-center border border-gray-200 text-cyan text-sm rounded-lg focus:outline-none  md:p-3 font-semibold md:font-normal"
                placeholder="Search Blogs ..."
                required
              />
            </div>
          </form>
          <p className="text-sm leading-5 lg:leading-6 font-medium mt-4 mb-3 font-inter text-primary">
            Blog Categories
          </p>
          <div className="blogcategorymenu grid grid-cols-12 mb-10 md:mb-0">
            {blogCategories.map((categoryName) => {
              return (
                <div
                  className="col-span-12 my-3"
                  key={Math.ceil(Math.random() * 999)}
                >
                  <p
                    className={`${
                      activeCategory === categoryName
                        ? 'text-primary bg-gray-100 py-3'
                        : 'text-cyan'
                    }  font-inter font-bold md:font-semibold cursor-pointer px-2`}
                    onClick={() => setActiveCategory(categoryName)}
                  >
                    {categoryName}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/* blog cards */}
        <div className="col-span-12 md:col-span-9">
          <div className="grid grid-cols-12 md:ml-10 lg:ml-20 gap-4 md:gap-x-6 gap-y-14 md:gap-y-16">
            {BlogData.map((blog) => {
              return (
                <div
                  className="col-span-12 md:col-span-6"
                  key={blog.id}
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <Image src={blog.image} alt={blog.title} />
                  <h4 className="text-cyan font-inter lg:text-[1.5rem] font-bold md:font-semibold lg:leading-[32px] mt-5 md:mt-8">
                    {blog.title}
                  </h4>
                  <p className="text-cyan font-inter lg:leading-[24px] mt-3 md:mt-4">
                    {blog.content}
                  </p>
                  <p className="mt-4">
                    <Link
                      href={`/blog/${blog.id}/${blog.title
                        .replace(/\s/g, '-')
                        .toLowerCase()}`}
                      className="text-primary font-semibold"
                    >
                      Read Post{' '}
                      <span className="transform -rotate-45 origin-center inline-block">
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </Link>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* after blog cards contents */}
      <div className="main-container mb-16">
        <hr className="w-full bg-gray-200" />
        {/* pagination tabs and desktop */}
        <div className="hidden md:flex justify-between items-center mt-4">
          <button className="border border-gray-200 py-1.5 px-3 rounded-lg text-cyan font-semibold">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Previous
          </button>
          <div className="flex gap-x-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
              return (
                <button
                  key={item}
                  className="bg-gray-200 w-8 h-8 rounded-md flex items-center justify-center"
                >
                  {item}
                </button>
              );
            })}
          </div>
          <button className="border border-gray-200 py-1.5 px-3 rounded-lg text-cyan font-semibold">
            Next <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </button>
        </div>
        {/* pagination mobile */}
        <div className="flex md:hidden justify-between items-center mt-4">
          <button className="border border-gray-200 py-1.5 px-3 rounded-lg text-cyan font-semibold">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <p className="text-cyan font-bold md:font-semibold">Page 1 of 9</p>
          <button className="border border-gray-200 py-1.5 px-3 rounded-lg text-cyan font-semibold">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        {/* free trial section */}
        <div className="px-4 py-8 md:p-8 lg:p-16 bg-gray-200 flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start rounded-xl mt-20 lg:mt-24">
          <div>
            <h3 className="font-inter text-cyan text-3xl md:text-2xl lg:text-3xl font-semibold lg:leading-[38px] mb-4 md:mb-2 lg:mb-4">
              Start your <span className="hidden md:inline-block">30-day</span>{' '}
              free trial
            </h3>
            <p className="font-inter text-cyan text-[1.2rem] lg:leading-[30px] w-[300px] lg:w-auto">
              Join over 4,000+ startups already growing with Untitled.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-x-3 gap-y-2 items-start mt-12 md:mt-0">
            <button
              className="bg-[#F6F6F6] text-cyan font-medium font-inter py-2 lg:py-3 px-3 lg:px-5 rounded-md focus:outline-none focus:shadow-outline w-[300px] md:w-auto border border-gray-400 md:border-none"
              type="button"
            >
              Learn More
            </button>
            <button
              className="bg-primary text-white font-medium font-inter py-2 lg:py-3 px-3 lg:px-5 rounded-md focus:outline-none focus:shadow-outline w-[300px] md:w-auto order-first md:order-none"
              type="button"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
