'use client';
import { Message } from '@/types/global.types';
import React, { useState } from 'react';
import { BsFillEyeFill, BsFillInfoCircleFill } from 'react-icons/bs';
import Input from './Input';
import Modal from './Modal';
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

  const timestamp = new Date(); // Replace this with your timestamp

  const formattedDate = formatDate(timestamp);

  console.log(formattedDate); // Output: "Thursday 12:29 PM" (or equivalent for the provided timestamp)
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
    <div className=" h-screen w-full overflow-y-scroll  md:w-11/12 mx-auto  shadow-md border border-slate-300 mt-3 md:mt-7 md:pb-4">
      <div className="flex w-full py-2 justify-around items-center border-b border-slate-600">
        <h1>User ID:</h1>
        <h1>USER NAME: </h1>
        <h1>MESSAGE: </h1>
        <h1>VIEW MORE:</h1>
      </div>
      {messages.map((message, index) => {
        return (
          <div
            key={index}
            className=" flex justify-around items-center border py-1 border-slate-300"
          >
            <h1>{message.userId}</h1>
            <h1>{message.username}</h1>
            <h1>{message.text}</h1>
            <BsFillEyeFill onClick={openModal} className=" cursor-pointer" />
          </div>
        );
      })}
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Similique!
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
  );
};

export default Messages;
