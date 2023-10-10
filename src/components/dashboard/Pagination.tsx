'use client';

const Pagination = () => {
  // Number of total items
  const totalItems = 100;

  // Number of items to show on each "side" of the middle section
  const sideItemCount = 3;

  // Current page (for demonstration, you can adjust this as needed)
  const currentPage = 1;

  // Calculate the start and end index for the middle section
  const middleStart = Math.max(1, currentPage - sideItemCount);
  const middleEnd = Math.min(totalItems, currentPage + sideItemCount);

  // Create an array of numbers for the middle section
  const middleItems = Array.from(
    { length: middleEnd - middleStart + 1 },
    (_, index) => middleStart + index
  );

  return (
    <nav className="flex flex-wrap justify-center mt-4 pb-14">
      <ul className="flex space-x-2 items-center flex-wrap">
        <li>
          <button className="px-3 py-2 rounded-full bg-slate-600 text-white">
            Previous
          </button>
        </li>
        {middleStart > 1 && (
          <li>
            <span className="px-3 py-2 rounded-full bg-slate-600 text-gray-600 hover:bg-blue-500 hover:text-white">
              1
            </span>
          </li>
        )}
        {middleStart > 2 && (
          <li>
            <span className="px-3 py-2 rounded-full bg-slate-600 text-gray-600 hover:bg-blue-500 hover:text-white">
              ...
            </span>
          </li>
        )}
        {middleItems.map((pageNumber) => (
          <li key={pageNumber}>
            <button
              className={`px-6 py-1 rounded-md ${
                currentPage === pageNumber
                  ? 'bg-slate-600 text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {pageNumber}
            </button>
          </li>
        ))}
        {middleEnd < totalItems - 1 && (
          <li>
            <span className="px-3 py-2 rounded-md bg-gray-200 text-gray-600 hover:bg-slate-800 hover:text-white">
              ...
            </span>
          </li>
        )}
        {middleEnd < totalItems && (
          <li>
            <span className="px-3 py-2 rounded-md bg-gray-200 text-gray-600 hover:bg-slate-800 hover:text-white">
              {totalItems}
            </span>
          </li>
        )}
        <li>
          <button className="px-3 py-2 rounded-full bg-slate-600 text-white">
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
