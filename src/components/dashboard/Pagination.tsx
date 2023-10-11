'use client';

import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Pagination = () => {
  return (
    <>
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
    </>
  );
};

export default Pagination;
