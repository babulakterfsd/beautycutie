'use client';
import { Message } from '@/types/global.types';
import React, { useState } from 'react';
import { BsFillEyeFill, BsFillInfoCircleFill } from 'react-icons/bs';
import Input from './Input';
import Modal from './Modal';
import NewQueries from './NewQueries';
import Pagination from './Pagination';
import TextArea from './TextArea';
const Messages: React.FC<{ messages: Message[] }> = ({ messages }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [replay, setReplay] = useState('');
  const [adminNote, setAdminNote] = useState('');
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };

    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  const timestamp = new Date();

  const formattedDate = formatDate(timestamp);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    setReplay(value);
  };
  const handleChangeAdminNote = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    setAdminNote(value);
  };

  const isContentTooLong = replay.length > 400;
  const isAdminContentTooLong = adminNote.length > 400;

  return (
    <div className="dashboard-container w-screen flex flex-col md:flex-row gap-x-[20px] h-screen md:mt-3 md:ml-3 ">
      <div className="dashboard-content order-2 md:order-1  mx-auto  w-full  md:w-8/12 shadow-lg md:p-3 rounded-md h-screen overflow-y-scroll overflow-x-scroll  scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        <div className=" mx-auto ">
          <table className="min-w-full bg-white ">
            <thead className="  w-full  rounded-lg">
              <tr className=" ">
                <th className="px-1 py-3 text-left text-xs font-medium  tracking-wider">
                  <div className="flex items-center md:ml-[24px]">
                    <span className="   md:ml-2 block  md:leading-[18px]	 text-[12px] font-medium">
                      User Id
                    </span>
                  </div>
                </th>
                <th className="px-1 py-3 text-center  text-xs font-medium text-gray-500 tracking-wider">
                  <div className="flex items-center justify-center">
                    <span className="ml-[3px] md:mr-[3px] md:leading-[18px]	 text-[#67748E)] text-[12px] font-medium">
                      User Name
                    </span>
                  </div>
                </th>
                {/* <th className="px-1 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                  Status
                </th> */}
                <th className="px-6 py-3 md:leading-[18px]  text-[12px] font-medium">
                  Message
                </th>

                <th className="px-6 py-3 text-left  font-medium text-gray-500 tracking-wider text-lg	"></th>
              </tr>
            </thead>
            <tbody>
              {messages.map((message, index) => (
                <tr key={index} className=" leading-[73px]">
                  <td className="px-1 md:ml-[24px] flex items-center gap-x-2 ">
                    <span className="leading-[20px] font-medium text-[14px]">
                      {message.userId}
                    </span>
                  </td>

                  <td className=" whitespace-nowrap text-sm text-gray-900">
                    <div className="flex gap-x-2 px-2 py-2 items-center justify-center  bg-[#ECFDF3] rounded-3xl">
                      <span className=" h-[10px] w-[10px] rounded-full bg-[#12B76A]" />
                      <span className=" text-[#027A48] leading-[20px] font-medium text-[12px]">
                        {message.username}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap  text-center leading-[20px] font-normal text-[14px]">
                    {message.text}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap  text-center leading-[20px] font-normal text-[14px]">
                    <BsFillEyeFill
                      onClick={openModal}
                      className=" cursor-pointer"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Modal
          title="User queries"
          isOpen={isModalOpen}
          onClose={closeModal}
          info="Reply to queries and check the message history"
        >
          {/* Modal Content */}
          <div className="">
            {/* <div className=" ">
            <h1 className="text-lg font-semibold "></h1>
            <p className=" text-sm">
              Reply to queries and check the message history
            </p>
          </div> */}
            <div className="modal-body">
              <div className="h">
                <h2 className=" text-lg md:mb-4 text-[#FFAAA5]">
                  Message history
                </h2>
                <div className="messages">
                  {messages.slice(0, 13).map((message, index) => {
                    return index < 10 ? (
                      <div
                        className={` flex mb-2 ${
                          index % 2 !== 0 ? ' justify-end ' : ' justify-start '
                        }`}
                        key={index}
                      >
                        <div className="">
                          <div className="flex justify-between mb-[6px]">
                            <p className=" font-semibold text-sm text-[#67748E]">
                              {index % 2 !== 0
                                ? `You (${message.username})`
                                : `${message.username}`}
                            </p>
                            <p className=" font-semibold text-sm text-[#67748E]">
                              {formattedDate}
                            </p>
                          </div>
                          <div
                            className={`p-3 rounded-lg mb-3 md:h-[92px] md:w-[272px] ${
                              index % 2 !== 0 ? 'bg-[#A8DDE6]' : ' bg-gray-300'
                            }`}
                          >
                            <p className=" text-sm font-semibold">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Similique!
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <h2
                          className={`${
                            index == 11 ? '' : ' hidden'
                          } text-lg md:mb-4 text-[#FFAAA5]`}
                        >
                          New Message
                        </h2>

                        <div
                          className={` flex mb-2 ${
                            index % 2 !== 0
                              ? ' justify-end '
                              : ' justify-start '
                          }`}
                          key={index}
                        >
                          <div className="">
                            <div className="flex justify-between mb-[6px]">
                              <p className=" font-semibold text-sm text-[#67748E]">
                                {index % 2 !== 0
                                  ? `You (${message.username})`
                                  : `${message.username}`}
                              </p>
                              <p className=" font-semibold text-sm text-[#67748E]">
                                {formattedDate}
                              </p>
                            </div>
                            <div
                              className={`p-3 rounded-lg mb-3 md:h-[92px] md:w-[272px] ${
                                index % 2 !== 0
                                  ? 'bg-[#A8DDE6]'
                                  : ' bg-gray-300'
                              }`}
                            >
                              <p className=" text-sm font-semibold">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Similique!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="flex gap-x-2">
                    <Input
                      isCliphboard
                      label="User email address"
                      placeholder="Aitai.habibi@gmail.con"
                    />
                    <Input
                      isCliphboard
                      label="User phone number"
                      placeholder="07702010749"
                    />
                  </div>
                  <div className="teaxtArea">
                    <TextArea
                      label="Your reply*"
                      labelMax="400 characters left"
                      onChange={handleChange}
                      isContentTooLong={isContentTooLong}
                      placeholder="e.g. I joined Stripe’s Customer Success team to help them scale their checkout product. I focused mainly on onboarding new customers and resolving complaints."
                    />
                    <TextArea
                      icon={<BsFillInfoCircleFill size={10} color="#A8DDE6" />}
                      label="Admin note"
                      labelMax="400 characters left"
                      onChange={handleChangeAdminNote}
                      placeholder="Costumer needs attention"
                      isContentTooLong={isAdminContentTooLong}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
        <Pagination />
      </div>
      <div className="dashboard-content order-1 overflow-x-scroll md:order-2 w-full md:w-1/3 ">
        <NewQueries />
      </div>
    </div>
  );
};

export default Messages;