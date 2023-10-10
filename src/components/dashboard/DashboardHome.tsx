'use client';

import { useEffect, useState } from 'react';
import {
  FaArrowDownLong,
  FaEllipsisVertical,
  FaPencil,
  FaTrashCan,
} from 'react-icons/fa6';
import NewQueries from './NewQueries';

type TableData = {
  name: string;
  status: 'active' | 'inactive';
  subcriptionDate: string;
  email: string;
};

const tableData: TableData[] = [
  {
    name: 'John1',
    subcriptionDate: new Date().toLocaleDateString(),
    status: 'active',
    email: 'john1@gmail.com',
  },
  {
    name: 'John2',
    subcriptionDate: new Date().toLocaleDateString(),
    status: 'active',
    email: 'john2@gmail.com',
  },
  {
    name: 'John3',
    subcriptionDate: new Date().toLocaleDateString(),
    status: 'active',
    email: 'john3@gmail.com',
  },
  {
    name: 'John4',
    subcriptionDate: new Date().toLocaleDateString(),
    status: 'active',
    email: 'john4@gmail.com',
  },
  {
    name: 'John5',
    subcriptionDate: new Date().toLocaleDateString(),
    status: 'active',
    email: 'john5@gmail.com',
  },
  {
    name: 'John6',
    subcriptionDate: new Date().toLocaleDateString(),
    status: 'active',
    email: 'john6@gmail.com',
  },
  {
    name: 'John7',
    subcriptionDate: new Date().toLocaleDateString(),
    status: 'active',
    email: 'john7@gmail.com',
  },
  {
    name: 'John8',
    subcriptionDate: new Date().toLocaleDateString(),
    status: 'active',
    email: 'john8@gmail.com',
  },
  {
    name: 'John9',
    subcriptionDate: new Date().toLocaleDateString(),
    status: 'active',
    email: 'john1@gmail.com',
  },
  {
    name: 'John10',
    subcriptionDate: new Date().toLocaleDateString(),
    status: 'active',
    email: 'john10@gmail.com',
  },
  {
    name: 'John1',
    subcriptionDate: new Date().toLocaleDateString(),
    status: 'active',
    email: 'john1@gmail.com',
  },
  {
    name: 'John2',
    subcriptionDate: new Date().toLocaleDateString(),
    status: 'active',
    email: 'john2@gmail.com',
  },
  {
    name: 'John3',
    subcriptionDate: new Date().toLocaleDateString(),
    status: 'active',
    email: 'john3@gmail.com',
  },
  {
    name: 'John4',
    subcriptionDate: new Date().toLocaleDateString(),
    status: 'active',
    email: 'john4@gmail.com',
  },
  {
    name: 'John5',
    subcriptionDate: new Date().toLocaleDateString(),
    status: 'active',
    email: 'john5@gmail.com',
  },
  {
    name: 'John6',
    subcriptionDate: new Date().toLocaleDateString(),
    status: 'active',
    email: 'john6@gmail.com',
  },
  {
    name: 'John7',
    subcriptionDate: new Date().toLocaleDateString(),
    status: 'active',
    email: 'john7@gmail.com',
  },
  {
    name: 'John8',
    subcriptionDate: new Date().toLocaleDateString(),
    status: 'active',
    email: 'john8@gmail.com',
  },
  {
    name: 'John9',
    subcriptionDate: new Date().toLocaleDateString(),
    status: 'active',
    email: 'john1@gmail.com',
  },
  {
    name: 'John10',
    subcriptionDate: new Date().toLocaleDateString(),
    status: 'active',
    email: 'john10@gmail.com',
  },
];
//nested data is ok, see accessorKeys in ColumnDef below

const DashboardHome = () => {
  const [isloading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
  }, []);

  return isloading ? (
    <div className=" w-screen md:flex gap-x-[20px] h-screen md:mt-3 md:ml-3 ">
      <div className="  w-full  md:w-8/12 shadow-lg md:p-3 rounded-md h-screen overflow-y-scroll overflow-x-scroll md:overflow-x-hidden scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        <div className="flex justify-between items-center md:mt-[20px] mb-[12px]">
          <div className="flex  gap-3 md:ml-[24px]">
            <h1 className="  font-bold">Subscriber</h1>
            <span className=" text-base font-semibold text-[#FFAAA5]">
              100 users
            </span>
          </div>
          <FaEllipsisVertical />
        </div>

        <div className=" mx-auto ">
          <table className="min-w-full bg-white ">
            <thead className=" bg-[#EAECF0] w-full  rounded-lg">
              <tr className=" ">
                <th className="px-1 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                  <div className="flex items-center md:ml-[24px]">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600  "
                    />
                    <span className="  ml-2 block text-lg	"> Name</span>
                  </div>
                </th>
                <th className="px-1 py-3 text-center  text-xs font-medium text-gray-500 tracking-wider">
                  <div className="flex items-center justify-center">
                    <span className=" mr-[3px] text-lg	text-center">Status</span>
                    <FaArrowDownLong />
                  </div>
                </th>
                {/* <th className="px-1 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                  Status
                </th> */}
                <th className="px-6 py-3  font-medium text-gray-500 tracking-wider text-lg text-center">
                  Subscription Date
                </th>
                <th className="px-6 py-3 text-left  font-medium text-gray-500 tracking-wider text-lg	">
                  Email address
                </th>
                <th className="px-6 py-3 text-left  font-medium text-gray-500 tracking-wider text-lg	"></th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((person, index) => (
                <tr key={index} className=" leading-[73px]">
                  <td className="px-1 md:ml-[24px] flex items-center gap-x-1 py-4 whitespace-nowrap text-sm text-gray-900 ">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />

                    <span className="">{person.name}</span>
                  </td>

                  <td className=" whitespace-nowrap text-sm text-gray-900">
                    <div className="flex gap-x-2 px-2 py-2 items-center justify-center  bg-[#ECFDF3] rounded-3xl">
                      <span className=" h-[10px] w-[10px] rounded-full bg-[#12B76A]" />
                      <span className=" text-[#027A48]"> {person.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                    {person.subcriptionDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {person.email}
                  </td>
                  <td className="px-6 flex items-center gap-x-5 py-4 whitespace-nowrap text-sm text-gray-900">
                    <FaTrashCan color="#67748E" />
                    <FaPencil color="#67748E" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className=" w-full md:w-1/3 ">
        <NewQueries />
      </div>
    </div>
  ) : (
    <div>
      <h1>loading.............</h1>
    </div>
  );
};

export default DashboardHome;
