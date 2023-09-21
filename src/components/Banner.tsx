import Image from 'next/image';
import catmuche from '../../public/assets/images/catmuschehomebanner.png';

const Banner = () => {
  return (
    <section className="">
      <div className="flex flex-row justify-center">
        <h1 className="lg:mt-20 capitalize lg:text-7xl lg:font-medium text-center lg:leading-[5.5rem]">
          designed by salon owner <br />
          for <span className="gradientText">Salon owners</span>
        </h1>
        <Image
          src={catmuche}
          alt="catmuche"
          width={132}
          height={153}
          className="object-contain lg:-mt-28"
        />
      </div>
    </section>
  );
};

export default Banner;
