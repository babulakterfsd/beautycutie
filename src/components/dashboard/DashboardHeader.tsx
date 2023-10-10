import useAppContext from '@/hooks/useAppContext';

const DashboardHeader = () => {
  const { isDashboardOpen, setIsDashboardOpen } = useAppContext();
  const today = new Date();
  const day = today.getDate(); // Get the day of the month
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = monthNames[today.getMonth()];
  return (
    <div className=" hidden md:flex    w-full mx-auto leading-[60px] relative">
      <div className="items-center mx-auto mt-3">
        <h1 className="  text-[#2C3E50]  font-bold text-base text-center">
          Today is {day}th {month}
        </h1>
      </div>
    </div>
  );
};

export default DashboardHeader;
