import Image from 'next/image';
import Link from 'next/link';
import author from '../../public/assets/images/author.png';
import fb from '../../public/assets/images/fb.png';
import insta from '../../public/assets/images/insta.png';
import linkedin from '../../public/assets/images/linkedin.png';
import singleblogimg from '../../public/assets/images/singleblogimg.png';
import singleblogimgmob from '../../public/assets/images/singleblogimgmob.png';
import twitter from '../../public/assets/images/twitter.png';
import NewsletterFull from './NewsletterFull';

const SingleBlogPost = () => {
  return (
    <section className="mt-20">
      <h2 className="mt-32 lg:mt-44 text-center text-primary font-inter font-semibold text-sm md:text-[1rem]">
        Article
      </h2>
      <h3 className="text-cyan text-center font-inter text-4xl lg:text-5xl font-bold md:font-semibold lg:leading-[60px] lg:tracking-[-.96px] mt-3 mb-6">
        We care about your skin
      </h3>
      <p className="text-cyan text-center text-lg font-medium mb-6">
        May 31, 2024
      </p>
      {/* share section */}
      <div className="flex justify-center items-center">
        <h4 className="text-cyan font-medium mr-3">Share Blog On</h4>
        <div className="flex flex-row justify-center gap-x-4 items-center">
          <Link href="https://facebook.com/babulakterfsd2" target="_blank">
            <Image src={fb} alt="facebook" className="cursor-pointer h-5 w-5" />
          </Link>
          <Link href="https://instagram.com/babulakterfsd2" target="_blank">
            <Image
              src={insta}
              alt="Instagram"
              className="cursor-pointer h-5 w-5"
            />
          </Link>
          <Link href="https://linkedin.com/in/babulakterfsd" target="_blank">
            <Image
              src={linkedin}
              alt="linkedin"
              className="cursor-pointer h-5 w-5"
            />
          </Link>
          <Link href="https://twitter.com/babulakterfsd" target="_blank">
            <Image
              src={twitter}
              alt="twitter"
              className="cursor-pointer h-5 w-5"
            />
          </Link>
        </div>
      </div>
      <Image
        src={singleblogimg}
        alt="single blog image"
        className="mt-14 mb-24 hidden md:block"
      />
      <Image
        src={singleblogimgmob}
        alt="single blog image"
        className="mt-10 mb-16 md:hidden mx-auto"
      />
      {/* content */}
      <div className="main-container grid grid-cols-12">
        <div className="col-span-12 md:col-span-8 lg:col-span-6 md:col-start-3 lg:col-start-4 mb-10 flex justify-center flex-col gap-y-6">
          <h3 className="text-cyan text-3xl lg:text-4xl font-medium">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="text-cyan font-medium">
            Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla
            odio nisl vitae. In aliquet pellentesque aenean hac vestibulum
            turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada
            fringilla. Elit nisi in eleifend sed nisi. Pulvinar at orci, proin
            imperdiet commodo consectetur convallis risus. Sed condimentum enim
            dignissim adipiscing faucibus consequat, urna. Viverra purus et erat
            auctor aliquam. Risus, volutpat vulputate posuere purus sit congue
            convallis aliquet. Arcu id augue ut feugiat donec porttitor neque.
            Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor
            lacus, eget nunc lectus in tellus, pharetra, porttitor. Ipsum sit
            mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non
            pellentesque congue eget consectetur turpis. Sapien, dictum molestie
            sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit
            eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh
            orci.
          </p>
          <h3 className="text-cyan text-3xl lg:text-4xl font-medium">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="text-cyan font-medium">
            Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla
            odio nisl vitae. In aliquet pellentesque aenean hac vestibulum
            turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada
            fringilla. Elit nisi in eleifend sed nisi. Pulvinar at orci, proin
            imperdiet commodo consectetur convallis risus. Sed condimentum enim
            dignissim adipiscing faucibus consequat, urna. Viverra purus et erat
            auctor aliquam. Risus, volutpat vulputate posuere purus sit congue
            convallis aliquet. Arcu id augue ut feugiat donec porttitor neque.
            Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor
            lacus, eget nunc lectus in tellus, pharetra, porttitor. Ipsum sit
            mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non
            pellentesque congue eget consectetur turpis. Sapien, dictum molestie
            sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit
            eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh
            orci.
          </p>
          <h3 className="text-cyan text-3xl lg:text-4xl font-medium">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="text-cyan font-medium">
            Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla
            odio nisl vitae. In aliquet pellentesque aenean hac vestibulum
            turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada
            fringilla. Elit nisi in eleifend sed nisi. Pulvinar at orci, proin
            imperdiet commodo consectetur convallis risus. Sed condimentum enim
            dignissim adipiscing faucibus consequat, urna. Viverra purus et erat
            auctor aliquam. Risus, volutpat vulputate posuere purus sit congue
            convallis aliquet. Arcu id augue ut feugiat donec porttitor neque.
            Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor
            lacus, eget nunc lectus in tellus, pharetra, porttitor. Ipsum sit
            mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non
            pellentesque congue eget consectetur turpis. Sapien, dictum molestie
            sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit
            eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh
            orci.
          </p>
        </div>
      </div>
      {/* author */}
      <div className="main-container grid grid-cols-12">
        <div className="col-span-12 md:col-span-10 md:col-start-2 rounded-lg px-4 py-6 md:py-8 md:px-10 lg:px-16 gradientBgReverse flex flex-col md:flex-row gap-x-5 md:mt-3 lg:mt-6 mb-10">
          <Image src={author} alt="author" className="self-start" />
          <div className="flex flex-col">
            <h5 className="text-cyan text-2xl font-medium font-inter">
              Olivia Rhye
            </h5>
            <p className="text-[#795151] font-medium text-sm mb-4 font-inter">
              Content and marketing team
            </p>
            <p className="font-inter text-cyan lg:text-[18px]">
              Sagittis et eu at elementum, quis in. Proin praesent volutpat
              egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac.
              Auctor rutrum lacus malesuada massa ornare et. Vulputate
              consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu
              sit dignissim massa erat cursus vulputate gravida id. Sed quis
              auctor vulputate hac elementum gravida cursus dis.
            </p>
          </div>
        </div>
      </div>

      {/* newsletter */}
      <div className="px-4 md:px-0">
        <NewsletterFull />
      </div>
    </section>
  );
};

export default SingleBlogPost;
