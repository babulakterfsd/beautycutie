import Image from 'next/image';

const notFoundImg = '/assets/images/404.png';

export default function NotFound() {
  return (
    <section className="flex h-screen justify-center items-center flex-col main-container">
      <p className="text-primary font-semibold">404 error</p>
      <h2 className="text-cyan text-3xl lg:text-5xl font-inter font-semibold lg:leading-[72px] lg:tracking-[-1.2px] my-3 lg:my-4">
        Page not found...
      </h2>
      <p className="font-inter text-cyan lg:text-[1.2rem] lg:w-[500px] text-center">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Image src={notFoundImg} alt="404" width={350} height={350} />
    </section>
  );
}
