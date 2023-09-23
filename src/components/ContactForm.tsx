const ContactForm = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full lg:w-[600px]">
        <div className="mb-16 lg:mb-24">
          <p className="text-base leading-6 font-semibold font-inter text-primary text-center">
            Contact Us
          </p>
          <h1 className="text-4xl leading-10 lg:text-5xl lg:leading-[60px] font-semibold font-inter text-center text-cyan mt-3">
            Get in touch
          </h1>
          <p className="text-xl leading-7 font-inter font-normal text-center text-cyan mt-3">
            We'd love to hear from you. Please fill out this form.
          </p>
        </div>
        <form action="" className="mb-16 md:mb-24 lg:mb-0">
          <div className="md:flex md:justify-between md:space-x-4">
            <div className="mb-4 md:w-1/2">
              <label
                className="block font-normal text-cyan font-inter mb-2"
                htmlFor="first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none border rounded w-full py-2.5 px-3.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="first-name"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="mb-4 md:w-1/2">
              <label
                className="block font-normal text-cyan font-inter mb-2"
                htmlFor="last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none border rounded w-full py-2.5 px-3.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="last-name"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="4"
              className="block font-normal text-cyan font-inter mb-2"
            >
              Phone
            </label>
            <div className="relative flex items-center">
              <input
                id="4"
                type="number"
                className="peer relative pl-24 pr-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out appearance-none border rounded w-full py-2.5 px-3.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="+1 054584545"
              />
              <select className="material-symbols-outlined absolute left-2 transition-all duration-200 ease-in-out outline-none">
                <option value="1">Us</option>
                <option value="2">Uk</option>
                <option value="3">Aus</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block font-normal text-cyan font-inter mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2.5 px-3.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>

          <div className="mb-4">
            <label
              className="block font-normal text-cyan font-inter mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2.5 px-3.5 font-normal text-cyan font-inter leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows={6}
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="mb-4 md:mb-8">
            {/* checkbox with lebel */}

            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block font-normal text-cyan font-inter"
              >
                You agree to our friendly{' '}
                <a href="#" className="text-primary hover:text-primary">
                  Privacy Policy
                </a>
              </label>
            </div>
          </div>
          <div className="mb-6 text-center">
            <button
              className="w-full bg-primary text-white font-normal font-inter py-3 px-5 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
