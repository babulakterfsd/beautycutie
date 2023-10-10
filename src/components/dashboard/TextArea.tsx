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
      <div className="mb-[16px]">
        <div className="flex gap-x-1 items-center">
          <label
            htmlFor="content"
            className="block text-sm mb-[6px] text-[#67748E]  font-semibold"
          >
            {label}
          </label>
          {icon}
        </div>
        <textarea
          className={`w-full px-4 py-2 border ${
            isContentTooLong ? 'border-red-500' : 'border-gray-300'
          } rounded focus:outline-none focus:border-slate-400`}
          {...textareaProps}
        />
        <label htmlFor="content" className="block mb-[6px] text-[#67748E] ">
          Blog Content (Max 400 characters)
        </label>
        {isContentTooLong && labelMax && (
          <p className="text-red-500 mt-1 text-sm">{labelMax}</p>
        )}
      </div>
    </div>
  );
};

export default TextArea;
