import React from 'react';
interface IButton {
  handleClick?: () => void;
  icon?: React.ReactNode;
  style?: string;
  textStyle?: string;
  type?: 'button' | 'submit' | 'reset';
}
const Button: React.FC<React.PropsWithChildren<IButton>> = ({
  handleClick,
  children,
  icon,
  style,
  textStyle,
}) => {
  return (
    <div
      onClick={handleClick}
      className={` flex w-full py-3 gap-x-2  ${style} justify-center items-center rounded-md cursor-pointer`}
    >
      {icon}
      <button type="submit" className={`text-base font-semibold ${textStyle}`}>
        {children}
      </button>
    </div>
  );
};

export default Button;
