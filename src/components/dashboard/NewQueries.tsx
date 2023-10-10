import { FaVimeoV } from 'react-icons/fa6';

const NewQueries = () => {
  const now = new Date();

  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };

  const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
  return (
    <div className="w-full  shadow-lg relative md:w-4/5 px-2 mt-2 md:px-3">
      <h1 className="">NewQueries</h1>
      <div className="h-[144px] w-full  border-b border-slate-300 ">
        <div className="w-full md:flex justify-between items-center">
          <h1 className=" font-semibold text-[#67748E]">Andi lane</h1>
          <p className=" bg-[#F9F5FF] px-4 py-1 rounded-3xl text-[#A8DDE6]">
            Pre sale
          </p>
        </div>
        <h3 className=" text-[#67748E] text-base mt-[10px] font-semibold">
          {timeString}
        </h3>
        <p className="mt-[16px] text-[#67748E] text-base">
          How to access this feature
        </p>
      </div>
      <div className="h-[144px] w-full border-b border-slate-300">
        <div className="w-full p-3  md:p-0  md:mt-[32px]">
          <div className="flex justify-between items-center">
            <h1 className=" font-semibold text-[#67748E]">Andi lane</h1>
            <div className="flex bg-[#F9F5FF] px-4 py-1 rounded-3xl items-center gap-x-1">
              <FaVimeoV className="text-[#FFAAA5]" />
              <p className="   text-[#FFAAA5]">After sale</p>
            </div>
          </div>
          <h3 className=" text-[#67748E] text-base mt-[10px] font-semibold">
            {timeString}
          </h3>
          <p className="mt-[16px] text-[#67748E] text-base">
            How to access this feature
          </p>
        </div>
      </div>
      <div className="flex justify-end p-[16px]">
        <p className=" text-[#3699FF] font-semibold cursor-pointer">View all</p>
      </div>
    </div>
  );
};

export default NewQueries;
