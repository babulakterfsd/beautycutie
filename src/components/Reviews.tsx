'use client';

import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import reviewerimg from '../../public/assets/images/reviewavatar.png';
import reviewimg from '../../public/assets/images/reviewimg.png';
import staricon from '../../public/assets/images/staricon.png';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Reviews = () => {
  return (
    <section className="mt-24 lg:mt-52 main-container">
      <h2 className="text-center text-cyan font-roboto text-3xl lg:text-4xl font-medium letterGap hidden md:block">
        Don't just take out only our words for it
      </h2>
      <div className="grid grid-cols-12 lg:mt-20 items-center">
        {/* review slider */}
        <div className="reviewslider col-span-12 lg:col-span-6 flex justify-center pl-2.5 pr-1 mx-auto md:px-0 md:mx-0 my-4 md:my-0">
          <div className="swipercontainer w-full lg:w-4/5">
            <Swiper
              scrollbar
              navigation
              direction="horizontal"
              modules={[Pagination]}
              threshold={2}
              slidesPerView={1}
              spaceBetween={0}
              pagination={{
                clickable: true,
              }}
            >
              {[1, 2, 3].map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="flex items-center justify-center w-full h-full"
                >
                  <div className="flex flex-col">
                    <div className="flex gap-x-0.5 mb-4 lg:mb-10">
                      <Image src={staricon} alt="star icon" />
                      <Image src={staricon} alt="star icon" />
                      <Image src={staricon} alt="star icon" />
                      <Image src={staricon} alt="star icon" />
                      <Image src={staricon} alt="star icon" />
                    </div>
                    <h2 className="text-cyan text-shadow font-inter text-3xl lg:text-4xl lg:font-medium lg:leading-[52px] lg:tracking-[-.96px] w-[90vw] md:w-auto mb-6">
                      We've really sped up our workflow using{' '}
                      <span className="gradientText">Bookitu</span> and haven't
                      looked back.
                    </h2>
                    <div className="flex justify-between items-center lg:mt-12">
                      {/* reviewer */}
                      <div className="flex gap-x-3">
                        <Image src={reviewerimg} alt="reviewer image" />
                        <div>
                          <h4 className="text-cyan font-inter lg:text-[1.1rem] lg:font-semibold lg:leading-[28px]">
                            Katherine Moss
                          </h4>
                          <p className="text-cyan font-inter">
                            Project Manager, Layers
                          </p>
                        </div>
                      </div>
                      {/* navigation arrow */}
                      <div className="flex gap-x-4"></div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/* review image */}
        <div className="reviewimage col-span-12 lg:col-span-6">
          <Image
            src={reviewimg}
            alt="review image"
            className="h-[400px] w-[90vw] md:h-[500px] md:w-[500px] object-contain mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
