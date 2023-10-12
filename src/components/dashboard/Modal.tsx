import React from 'react';
import { FaPrint } from 'react-icons/fa';
import { Button } from './blog-post';
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  info: string;
}

const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({
  isOpen,
  onClose,
  children,
  title,
  info,
}) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center h-full justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="z-50  h-5/6 relative bg-white p-4 rounded-md shadow-md w-full md:w-1/2 md:h-4/5">
            <div className="flex justify-between items-center mb-2">
              <div>
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className=" font-semibold text-sm">{info}</p>
              </div>
              <button
                className="text-gray-500 hover:text-gray-700 text-[18px] font-semibold text-cyan font-inter"
                onClick={onClose}
              >
                x
              </button>
            </div>
            <div className="overflow-y-auto  h-3/4">{children}</div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className=" z-50 flex items-center gap-x-3">
                {/* <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 rounded-full p-2 outline-none"
                />
                <button className="ml-2 text-blue-500">
                  <BsFillCursorFill />
                </button> */}
                {/* <Button></Button> */}

                <Button
                  textStyle=" text-[#67748E]"
                  icon={<FaPrint className=" text-[#67748E]" size={13} />}
                  style=" border border-slate-300"
                >
                  Save as draft
                </Button>
                <Button textStyle=" text-white" style=" bg-[#FFAAA5]">
                  Send message
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
