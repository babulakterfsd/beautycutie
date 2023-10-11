const NewQueries = () => {
  const now = new Date();

  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };

  const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
  return (
    <div className="w-full new-quer-content overflow-x-scroll shadow-lg relative md:w-4/5 px-2 mt-2 md:px-3">
      <h1 className="text-[14px] md:text-[18px]  font-semibold leading-[28px] text-[#67748E]">
        NewQueries
      </h1>
      <div className="h-[144px] w-full  border-b border-slate-300 ">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-[12px] md:text-[18px]  font-semibold leading-[28px] text-[#67748E]">
            Andi lane
          </h1>
          <p className=" bg-[#F9F5FF] text-[12px] px-4 md:text-[14px] font-medium leading-[20px] py-1 rounded-3xl text-[#A8DDE6]">
            Pre sale
          </p>
        </div>
        <h3 className=" text-[#67748E] mt-[4px] md:mt-[8px] text-[12px]  md:text-[16px] font-medium leading-[24px]  ">
          {timeString}
        </h3>
        <p className="mt-[9px] md:mt-[16px] text-[#67748E] text-[12px] md:text-[16px] font-medium leading-[24px]">
          How to access this feature
        </p>
      </div>
      <div className="h-[144px] w-full border-b border-slate-300">
        <div className="w-full p-3  md:p-0  md:mt-[32px]">
          <div className="flex justify-between items-center">
            <h1 className="text-[14px] md:text-[18px]  font-semibold leading-[18px] md:leading-[28px] text-[#67748E]">
              Andi lane
            </h1>
            <div className="flex bg-[#F9F5FF] px-4 py-1 rounded-3xl items-center gap-x-1">
              <p className="   text-[#FFAAA5] px-4 text-[12px] md:text-[14px] font-medium leading-[18px] md:leading-[20px] py-1 rounded-3xl ">
                After sale
              </p>
            </div>
          </div>
          <h3 className=" text-[#67748E] md:mt-[8px] text-[12px] md:text-[16px] font-medium leading-[18px] md:leading-[24px]  ">
            {timeString}
          </h3>
          <p className="mt-[9px] md:mt-[16px] text-[#67748E] text-[16px] font-medium leading-[24px]">
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
