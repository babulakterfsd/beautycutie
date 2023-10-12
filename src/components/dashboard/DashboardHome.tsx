'use client';

import { useEffect, useState } from 'react';
import { FaArrowDownLong, FaEllipsisVertical } from 'react-icons/fa6';
import NewQueries from './NewQueries';
import Pagination from './Pagination';

type TableData = {
  name: string;
  status: 'Active' | 'Inactive';
  subscriptionDate: string;
  email: string;
  username: string;
};

const tableData: TableData[] = [
  {
    name: 'Alice',
    subscriptionDate: '10/12/2023',
    status: 'Active',
    email: 'alice@gmail.com',
    username: 'alice',
  },
  {
    name: 'Bob',
    subscriptionDate: '10/12/2023',
    status: 'Active',
    email: 'bob@gmail.com',
    username: 'bob',
  },
  {
    name: 'Charlie',
    subscriptionDate: '10/12/2023',
    status: 'Active',
    email: 'charlie@gmail.com',
    username: 'charlie',
  },
  {
    name: 'David',
    subscriptionDate: '10/12/2023',
    status: 'Active',
    email: 'david@gmail.com',
    username: 'david',
  },
  {
    name: 'Eve',
    subscriptionDate: '10/12/2023',
    status: 'Active',
    email: 'eve@gmail.com',
    username: 'eve',
  },
  {
    name: 'Frank',
    subscriptionDate: '10/12/2023',
    status: 'Active',
    email: 'frank@gmail.com',
    username: 'frank',
  },
  {
    name: 'Grace',
    subscriptionDate: '10/12/2023',
    status: 'Active',
    email: 'grace@gmail.com',
    username: 'grace',
  },
  {
    name: 'Hannah',
    subscriptionDate: '10/12/2023',
    status: 'Active',
    email: 'hannah@gmail.com',
    username: 'hannah',
  },
  {
    name: 'Isaac',
    subscriptionDate: '10/12/2023',
    status: 'Active',
    email: 'isaac@gmail.com',
    username: 'isaac',
  },
  {
    name: 'Jack',
    subscriptionDate: '10/12/2023',
    status: 'Active',
    email: 'jack@gmail.com',
    username: 'jack',
  },
  {
    name: 'Alice',
    subscriptionDate: '10/12/2023',
    status: 'Active',
    email: 'alice@gmail.com',
    username: 'alice',
  },
];
//nested data is ok, see accessorKeys in ColumnDef below

const DashboardHome = () => {
  const [isloading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
  }, []);

  return isloading ? (
    <div className="">
      <div className="dashboard-container w-screen flex flex-col gap-y-8 md:flex-row gap-x-[20px] md:h-screen md:mt-3">
        <div className="dashboard-content order-2 md:order-1  mx-auto  w-full  md:w-8/12  rounded-md h-screen overflow-y-scroll overflow-x-scroll  scrollbar-thumb-gray-400 scrollbar-track-gray-200 border-2 border-gray-100 shadow-lg px-2 md:px-0 pb-4 md:pb-0">
          <div className="flex justify-between items-center mt-[15px] md:mt-[20px] mb-[20px] md:p-3">
            <div className="flex pl-2 md:pl-0  gap-2 md:ml-[24px] items-center">
              <h1 className="font-inter text-cyan text-base font-semibold lg:text-[18px] lg:leading-[18px]">
                Subscriber
              </h1>
              <span className="text-[12px]  font-semibold leading-[18px] text-primary bg-red-50 rounded-full px-4 py-1">
                100 users
              </span>
            </div>
            <span className="cursor-pointer">
              <FaEllipsisVertical />
            </span>
          </div>

          <div className=" mx-auto ">
            <table className="min-w-full">
              <thead className="w-full bg-[#f9fafb]">
                <tr className="">
                  <th className="px-1 py-3 text-left text-xs font-medium  tracking-wider">
                    <div className="flex items-center md:ml-[24px]">
                      <div className="flex items-center pl-4 border-l-0 border-r-0 border-2 border-gray-100 rounded-md w-5 h-5"></div>
                      <span className="ml-2 block text-[12px] font-inter text-cyan font-medium lg:leading-[18px]">
                        Name
                      </span>
                    </div>
                  </th>
                  <th className="px-1 py-3 text-center  text-xs font-medium text-gray-500 tracking-wider">
                    <div className="flex items-center justify-center">
                      <span className=" mr-[3px] text-[12px] font-inter text-cyan font-medium lg:leading-[18px]">
                        Status
                      </span>
                      <FaArrowDownLong />
                    </div>
                  </th>

                  <th className="md:px-6 py-3 text-[12px] font-inter text-cyan font-medium lg:leading-[18px]">
                    Subscription Date
                  </th>
                  <th className="px-6 py-3 text-[12px] font-inter text-cyan font-medium lg:leading-[18px]">
                    Email address
                  </th>
                  <th className="px-6 py-3 text-[12px] font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((person, index) => (
                  <tr
                    key={index}
                    className="lg:py-32 border-l-0 border-r-0 border-2 border-gray-100"
                  >
                    <td className="px-1 md:ml-[24px] flex items-center gap-x-2 mt-1">
                      <div className="flex items-center pl-4 border border-gray-200 rounded-md w-5 h-5"></div>

                      <div className="flex flex-col">
                        <span className="font-medium text-[14px] font-inter text-cyan">
                          {person.name}
                        </span>
                        <span className="text-[12px] font-inter text-cyan">
                          {`@${person.username}`}
                        </span>
                      </div>
                    </td>

                    <td className="text-sm">
                      <div className="flex gap-x-2 items-center justify-center  bg-[#ECFDF3] rounded-3xl w-[75px] mx-auto">
                        <span className=" h-[8px] w-[8px] rounded-full bg-[#12B76A]" />
                        <span className=" text-[#027A48] font-medium text-[12px] font-inter">
                          {person.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4  text-center text-[13px] font-inter text-cyan">
                      {person.subscriptionDate}
                    </td>
                    <td className="px-6 py-4 text-center text-[13px] font-inter text-cyan">
                      {person.email}
                    </td>
                    <td className="px-6 flex items-center gap-x-5 py-4 text-sm text-cyan">
                      <svg
                        className=" cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M13.3333 4.99984V4.33317C13.3333 3.39975 13.3333 2.93304 13.1517 2.57652C12.9919 2.26292 12.7369 2.00795 12.4233 1.84816C12.0668 1.6665 11.6001 1.6665 10.6667 1.6665H9.33333C8.39991 1.6665 7.9332 1.6665 7.57668 1.84816C7.26308 2.00795 7.00811 2.26292 6.84832 2.57652C6.66667 2.93304 6.66667 3.39975 6.66667 4.33317V4.99984M8.33333 9.58317V13.7498M11.6667 9.58317V13.7498M2.5 4.99984H17.5M15.8333 4.99984V14.3332C15.8333 15.7333 15.8333 16.4334 15.5608 16.9681C15.3212 17.4386 14.9387 17.821 14.4683 18.0607C13.9335 18.3332 13.2335 18.3332 11.8333 18.3332H8.16667C6.76654 18.3332 6.06647 18.3332 5.53169 18.0607C5.06129 17.821 4.67883 17.4386 4.43915 16.9681C4.16667 16.4334 4.16667 15.7333 4.16667 14.3332V4.99984"
                          stroke="#67748E"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <svg
                        className=" cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M2.39637 15.0963C2.43466 14.7517 2.4538 14.5794 2.50594 14.4184C2.55219 14.2755 2.61753 14.1396 2.70021 14.0142C2.79339 13.8729 2.91596 13.7503 3.16112 13.5052L14.1664 2.49992C15.0868 1.57945 16.5792 1.57945 17.4997 2.49993C18.4202 3.4204 18.4202 4.91279 17.4997 5.83326L6.49445 16.8385C6.2493 17.0836 6.12672 17.2062 5.98541 17.2994C5.86005 17.3821 5.72408 17.4474 5.58121 17.4937C5.42018 17.5458 5.24789 17.5649 4.90331 17.6032L2.08301 17.9166L2.39637 15.0963Z"
                          stroke="#67748E"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="md:p-3">
              <Pagination />
            </div>
          </div>
        </div>
        <div className="dashboard-content order-1 overflow-x-scroll md:order-2 w-full md:w-1/3">
          <NewQueries />
        </div>
      </div>
    </div>
  ) : (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-400"></div>
      </div>
    </div>
  );
};

export default DashboardHome;
