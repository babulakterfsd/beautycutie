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
    <div className="mb-[16px]  w-full relative">
      {label && (
        <label
          htmlFor="category"
          className="block text-sm mb-[6px] text-[#67748E]  font-semibold"
        >
          {label}
        </label>
      )}
      <div className="flex  justify-between relative">
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-slate-400"
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
