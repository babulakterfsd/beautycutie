'use client';
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
interface ICustomSelect {
  options: string[];
  title: string;
  bottomTitle: string;
}
const CustomSelect: React.FC<ICustomSelect> = ({
  options,
  title,
  bottomTitle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([
    options[0],
    options[1],
    options[2],
  ]);
  const [searchValue, setSearchValue] = useState('');

  const toggleDropdown = (payload: boolean) => {
    setIsOpen(payload);
  };

  const toggleOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="relative">
      <p className=" mb-[6px] text-cyan text-[12px] leading-[18px] md:text-[14px] md:leading-[20px] font-[500] ">
        {title}
      </p>
      <div className="select-input relative w-full  md:w-2/5   md:mb-[16px]  rounded">
        <div
          className="flex items-center justify-between cursor-pointer"
          //   onClick={toggleDropdown}
        >
          <input
            onFocus={() => toggleDropdown(true)}
            // onBlur={() => toggleDropdown(false)}

            onChange={handleSearchChange}
            placeholder={filteredOptions.length !== 0 ? '' : 'Search...'}
            className="w-full px-4 py-2 border-2 border-gray-100 rounded focus:outline-none"
            type="text"
            name=""
            id=""
          />
          <div className=" absolute right-1 h-[20px] w-[20px]  flex justify-center items-center  border-2 border-slate-400 rounded-full">
            <p className="">?</p>
          </div>
          <div className="flex flex-wrap absolute ">
            {selectedOptions.map((option) => (
              <div
                key={option}
                className="flex items-center   text-sm rounded-lg border border-slate-400 px-1 py-1 m-1"
              >
                <p className="text-[12px] md:text-[14px] font-normal md:leading-[20px]">
                  {option}
                </p>
                <button
                  className="ml-1 focus:outline-none"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleOption(option);
                  }}
                >
                  <FaTimes className="text-[#475467] text-sm" color=" " />
                </button>
              </div>
            ))}
          </div>
        </div>
        {isOpen && (
          <div className="  mt-2 p-2 bg-white border border-gray-300 rounded shadow-lg w-64">
            {filteredOptions.map((option) => (
              <label
                key={option}
                className="  flex items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedOptions.includes(option)}
                  onChange={() => toggleOption(option)}
                  className="mr-2 cursor-pointer py-4"
                />
                <span className="text-[12px] md:text-[13px] font-normal md:leading-[20px]">
                  {option}
                </span>
              </label>
            ))}
          </div>
        )}
        <p className=" mt-[5px] text-[12px] md:text-[13px] font-normal md:leading-[20px]  text-cyan font-inter">
          {/* This is a hint text to help user. */}
          {bottomTitle}
        </p>
      </div>
    </div>
  );
};

export default CustomSelect;
