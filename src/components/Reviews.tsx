'use client';

import Image from 'next/image';
import reviewimg from '../../public/assets/images/reviewimg.png';
import Slider from './Slider';

const Reviews = () => {
  return (
    <section className="mt-24 lg:mt-52 main-container">
      <h2 className="text-center text-cyan font-roboto text-3xl lg:text-4xl font-medium letterGap hidden lg:block">
        Don't just take out only our words for it
      </h2>
      <div className="grid grid-cols-12 lg:mt-20 items-center">
        {/* review slider */}
        <Slider />
        {/* review image */}
        <div className="reviewimage col-span-12 lg:col-span-6">
          <Image
            src={reviewimg}
            alt="review image"
            className="h-[400px] w-[90vh] md:h-[500px] md:w-[500px] object-contain mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
