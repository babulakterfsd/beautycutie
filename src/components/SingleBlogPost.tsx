import Image from 'next/image';
import Link from 'next/link';
import arrowupright from '../../public/assets/images/arrow-up-right.png';
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
      <h2
        className="mt-32 lg:mt-44 text-center text-primary font-inter font-semibold text-sm md:text-[1rem]"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        Article
      </h2>
      <h3
        className="text-cyan text-center font-inter text-4xl lg:text-5xl font-bold md:font-semibold lg:leading-[60px] lg:tracking-[-.96px] mt-3 mb-6"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        We care about your skin
      </h3>
      <p
        className="text-cyan text-center text-lg font-medium mb-6"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        May 31, 2024
      </p>
      {/* share section */}
      <div
        className="flex justify-center items-center"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
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
        className="mt-14 mb-24 hidden sm:block"
        data-aos="fade-up"
        data-aos-duration="1500"
      />
      <Image
        src={singleblogimgmob}
        alt="single blog image"
        className="mt-10 mb-16 sm:hidden mx-auto"
        data-aos="fade-up"
        data-aos-duration="1500"
      />
      {/* content */}
      <div
        className="main-container grid grid-cols-12"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
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
      <div
        className="main-container grid grid-cols-12"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
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

      {/* recent posts */}
      <div className="py-16 lg:py-24 bg-gray-50 mt-12 lg:-mb-44">
        <div className="main-container">
          {/* header */}
          <div className="header flex justify-between items-start">
            <div className="textcontent">
              <h5 className="text-primary font-inter font-medium text-sm md:text-[1rem]">
                Our blog
              </h5>
              <h6 className="text-cyan font-medium md:font-semibold text-3xl lg:text-4xl lg:leading-[44px] lg:tracking-[-.72px] font-inter mt-2">
                Lastest blog posts
              </h6>
              <p className="text-cyan mt-3 font-inter">
                All useful information for beauty industry
              </p>
            </div>
            <Link href="/blog" className="hidden md:inline-block">
              <button className="bg-primary text-white font-inter font-normal py-3 px-5 rounded focus:outline-none focus:shadow-outline mt-2">
                View all posts
              </button>
            </Link>
          </div>
          {/* posts */}
          <div className="grid grid-cols-12 md:gap-x-16 gap-y-16 mt-16">
            {RecentPostData.map((rpost) => {
              return (
                <div
                  className="col-span-12 md:col-span-6 lg:col-span-4 cursor-pointer"
                  key={rpost.id}
                >
                  <Image
                    src={rpost.Image}
                    alt="recent"
                    width={500}
                    height={500}
                    className="mb-7"
                  />
                  <p className="text-[#3acce9] mb-3 font-roboto">{`${rpost.type}`}</p>
                  <div className="flex gap-x-7 items-center mb-3">
                    <h4 className="text-cyan font-inter font-medium md:font-semibold text-xl">
                      {`${rpost.title}`}
                    </h4>
                    <Image src={arrowupright} alt="link" />
                  </div>
                  <p className="text-cyan font-inter mb-4">{`${rpost.content}`}</p>
                  <div className="flex flex-row gap-x-5 mt-3">
                    <Image
                      src={rpost.author.image}
                      alt="author"
                      className="self-start object-contain rounded-full"
                      width={30}
                      height={30}
                    />
                    <div className="flex flex-col">
                      <h5 className="text-cyan font-medium md:font-semibold font-inter">
                        {`${rpost.author.name}`}
                      </h5>
                      <p className="text-cyan text-sm font-inter">
                        {`${rpost.author.date}`}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="pl-2 md:hidden">
              <Link href="/blog">
                <button className="bg-primary text-white font-inter font-normal py-3 px-5 rounded focus:outline-none focus:shadow-outline w-[320px]">
                  View all posts
                </button>
              </Link>
            </div>
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

const RecentPostData = [
  {
    id: 1,
    Image: 'https://i.ibb.co/zPz7T6z/rpost1.png',
    title: 'New anti-ageing massage ',
    type: 'skin',
    content:
      'How do you create compelling presentations that wow your colleagues and impress your managers?',
    author: {
      name: 'Olivia Rhye',
      image: 'https://i.ibb.co/wcth7wT/author.png',
      date: 'May 20, 2021',
    },
  },
  {
    id: 2,
    Image: 'https://i.ibb.co/xFSnPPm/rpost2.png',
    title: 'How to look after your hair ',
    type: 'hair',
    content:
      'How do you create compelling presentations that wow your colleagues and impress your managers?',
    author: {
      name: 'Olivia Rhye',
      image: 'https://i.ibb.co/wcth7wT/author.png',
      date: 'May 20, 2021',
    },
  },
  {
    id: 3,
    Image: 'https://i.ibb.co/smfJ3ry/rpost3.png',
    title: 'New product for your skin ',
    type: 'products',
    content:
      'How do you create compelling presentations that wow your colleagues and impress your managers?',
    author: {
      name: 'Olivia Rhye',
      image: 'https://i.ibb.co/wcth7wT/author.png',
      date: 'May 20, 2021',
    },
  },
];
