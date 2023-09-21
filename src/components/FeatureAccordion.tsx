import { useState } from 'react';

export default function FAccordion() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(1 || null);

  const handleAccordionClick = (index: any) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  return (
    <div
      id="accordion-collapse"
      data-accordion="collapse"
      className="lg:mt-6 lg:h-[350px]"
    >
      {accordionData.map((item, index) => (
        <div key={index} className="lg:my-2">
          <h2 id={`accordion-collapse-heading-${index + 1}`}>
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5 font-medium rounded-2xl text-left text-gray-500  ${
                openAccordion === index ? 'bg-[#ccc]' : 'bg-[#F6F6F6]'
              }`}
              data-accordion-target={`#accordion-collapse-body-${index + 1}`}
              aria-expanded={openAccordion === index ? 'true' : 'false'}
              aria-controls={`accordion-collapse-body-${index + 1}`}
              onClick={() => handleAccordionClick(index)}
            >
              <span>{item.question}</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 rotate-180 shrink-0 ${
                  openAccordion === index ? 'transform rotate-0' : ''
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-collapse-body-${index + 1}`}
            className={`${openAccordion === index ? '' : 'hidden'}`}
            aria-labelledby={`accordion-collapse-heading-${index + 1}`}
          >
            <div className="p-5">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Define accordion data
const accordionData = [
  {
    question: 'Create and Sell Packages',
    answer: (
      <div>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          assign and track job withn your teams’s chat conversations
        </p>
      </div>
    ),
  },
  {
    question: 'Fill up your off peack hours',
    answer: (
      <div>
        <p className="mb-2 text-gray-500 dark:text-gray-400">Test Answer 2</p>
      </div>
    ),
  },
  {
    question: 'Ensure your clients ready your emails!',
    answer: (
      <div>
        <p className="mb-2 text-gray-500 dark:text-gray-400">Test Answer 3</p>
      </div>
    ),
  },
  {
    question: 'Sell Subscriptions',
    answer: (
      <div>
        <p className="mb-2 text-gray-500 dark:text-gray-400">Test Answer 4</p>
      </div>
    ),
  },
];
