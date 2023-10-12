import * as React from 'react';
interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  isContentTooLong: boolean;
  labelMax?: string;
  icon?: React.ReactNode;
}
const TextArea: React.FC<TextAreaProps> = ({
  label,
  labelMax,
  isContentTooLong,
  icon,
  ...textareaProps
}) => {
  return (
    <div>
      <div className="mb-[16px] dashboard-input">
        <div className="flex gap-x-1 items-center">
          <label
            htmlFor="content"
            className="block text-[12px] mb-[6px] text-cyan   md:text-[14px]  md:leading-[20px] font-medium font-inter"
          >
            {label}
          </label>
          {icon}
        </div>
        <textarea
          className={`w-full px-4 py-2 border ${
            isContentTooLong ? 'border-red-500' : 'border-2 border-gray-100'
          } rounded focus:outline-none focus:border-slate-400`}
          {...textareaProps}
        />
        <label
          htmlFor="content"
          className="block mb-[6px] text-[12px] md:text-[14px] md:leading-[20px] font-normal text-[#67748E] "
        >
          {labelMax}
        </label>
        {isContentTooLong && labelMax && (
          <p className="text-red-500 mt-1 text-sm">{labelMax}</p>
        )}
      </div>
    </div>
  );
};

export default TextArea;
