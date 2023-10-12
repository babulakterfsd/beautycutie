import React, { InputHTMLAttributes } from 'react';
import { GrLayer } from 'react-icons/gr';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isCliphboard: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  isCliphboard,
  ...inputProps
}) => {
  return (
    <div className="mb-[16px] dashboard-input w-full relative">
      {label && (
        <label
          htmlFor="category"
          className="block leading-[14px] text-[12px] md:text-[14px] font-medium md:leading-[18px] mb-[6px] text-cyan font-inter"
        >
          {label}
        </label>
      )}
      <div className="flex  justify-between relative">
        <input
          className="w-full px-4 py-2 border-2 border-gray-100 rounded focus:outline-none "
          {...inputProps}
        />
        {isCliphboard && (
          <div className=" absolute right-3  top-[10px]">
            <GrLayer
              className=" h-[16px] w-[16px] cursor-pointer"
              color="red"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
