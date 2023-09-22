export default function Footer() {
  return (
    <>
      <footer className="grid grid-cols-12 gap-y-12 bg-[#67748E] px-2 pb-4 pt-16 md:px-16 md:pt-16 lg:gap-x-2 xl:px-40">
        <div className="col-span-12 grid grid-cols-12 justify-around gap-y-12 px-1 lg:gap-x-8 lg:px-0 text-secondary">
          {/* first part */}
          <div className="col-span-6 flex flex-col gap-4 md:col-span-3">
            <h4 className="lg:text-[.9rem] lg:font-semibold lg:leading-[1.2rem] text-primary">
              Bookitu
            </h4>
            <div className="flex flex-col gap-y-3">
              <span className="text-secondary lg:font-semibold lg:leading-[1.5rem] cursor-pointer">
                Pricing
              </span>
              <span className="text-secondary lg:font-semibold lg:leading-[1.5rem] cursor-pointer">
                Reviews
              </span>
              <span className="text-secondary lg:font-semibold lg:leading-[1.5rem] cursor-pointer">
                Sign up
              </span>
              <span className="text-secondary lg:font-semibold lg:leading-[1.5rem] cursor-pointer">
                Contact us
              </span>
              <span className="text-secondary lg:font-semibold lg:leading-[1.5rem] cursor-pointer">
                Terms and condtions
              </span>
              <span className="text-secondary lg:font-semibold lg:leading-[1.5rem] cursor-pointer">
                Privacy statement
              </span>
            </div>
          </div>

          {/* second part */}
          <div className="col-span-6 flex flex-col gap-4 md:col-span-3">
            <h4 className="lg:text-[.9rem] lg:font-semibold lg:leading-[1.2rem] text-primary lg:mb-4">
              Features
            </h4>
            <div className="flex flex-col gap-y-3 lg:-mt-3">
              <span className="text-secondary lg:font-semibold lg:leading-[1.5rem] cursor-pointer">
                Online calendar
              </span>
              <span className="text-secondary lg:font-semibold lg:leading-[1.5rem] cursor-pointer">
                Online scheduling
              </span>
              <span className="text-secondary lg:font-semibold lg:leading-[1.5rem] cursor-pointer">
                Reports and insights
              </span>
              <span className="text-secondary lg:font-semibold lg:leading-[1.5rem] cursor-pointer">
                Marketing
              </span>
            </div>
          </div>

          {/* third part */}
          <div className="col-span-6 flex flex-col gap-4 md:col-span-3">
            <h4 className="lg:text-[.9rem] lg:font-semibold lg:leading-[1.2rem] text-primary">
              About us
            </h4>
            <div className="flex flex-col gap-y-3">
              <span className="text-secondary lg:font-semibold lg:leading-[1.5rem] cursor-pointer">
                Our story
              </span>
              <span className="text-secondary lg:font-semibold lg:leading-[1.5rem] cursor-pointer">
                News
              </span>
              <span className="text-secondary lg:font-semibold lg:leading-[1.5rem] cursor-pointer">
                Contact
              </span>
              <span className="text-secondary lg:font-semibold lg:leading-[1.5rem] cursor-pointer">
                Help center
              </span>
              <span className="text-secondary lg:font-semibold lg:leading-[1.5rem] cursor-pointer">
                Support
              </span>
            </div>
          </div>

          {/* last part */}
          <div className="col-span-6 flex flex-col gap-4 md:col-span-3">
            <h4 className="lg:text-[.9rem] lg:font-semibold lg:leading-[1.2rem] text-primary">
              Social
            </h4>
            <div className="flex flex-col gap-y-3">
              <span className="text-secondary lg:font-semibold lg:leading-[1.5rem] cursor-pointer">
                Twitter
              </span>
              <span className="text-secondary lg:font-semibold lg:leading-[1.5rem] cursor-pointer">
                LinkedIn
              </span>
              <span className="text-secondary lg:font-semibold lg:leading-[1.5rem] cursor-pointer">
                Facebook
              </span>
            </div>
          </div>
        </div>

        {/* footer bottom */}
        <div className="main-container col-span-12 flex flex-col items-center justify-center gap-4 border-t-2 border-gray-100 bg-[#67748E]">
          <div className="flex flex-col items-center justify-around gap-y-2.5 lg:flex-row lg:gap-x-44">
            <p className="py-2 text-center lg:order-first lg:mt-2 lg:pb-3 lg:font-[400] text-secondary">
              © {new Date().getFullYear()} Bookitu. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
