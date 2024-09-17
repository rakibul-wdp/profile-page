import { FaHome, FaPlus, FaTrophy } from "react-icons/fa";

const FooterNav = () => {
  return (
    <div className="fixed bottom-0 w-full bg-blue-600 p-3 flex justify-around items-center lg:hidden">
      <FaHome aria-label="Home" className="text-white text-2xl" />
      <FaPlus aria-label="Add" className="text-white text-2xl" />
      <FaTrophy aria-label="Leaderboard" className="text-white text-2xl" />
    </div>
  );
};

export default FooterNav;
