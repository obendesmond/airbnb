import Image from "next/image";
import { BiSearch, BiGlobe } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { logo } from "../utils/ImgSources";

type Props = {};

const Header = ({}: Props) => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src={logo}
          style={{ objectFit: "contain", objectPosition: "left" }}
          fill
          alt="airbnb logo"
        />
      </div>

      {/* middle search */}
      <div className="rounded-full flex p-2 items-center sm:border-2 sm:shadow-sm">
        <input
          type="text"
          placeholder="Start your search"
          className="border-none bg-transparent px-2 outline-none flex-1 text-sm text-gray-600 placeholder-gray-400"
        />
        <BiSearch className="hidden h-8 w-8 bg-transparent text-gray-500 rounded-full p-0 cursor-pointer md:inline-flex md:text-white md:bg-red-500 sm:p-2" />
      </div>

      {/* right */}
      <div className="flex items-center justify-end gap-4">
        <p className="hidden md:inline-flex text-center cursor-pointer py-2 px-3 rounded-full hover:bg-gray-100 ">
          Become a host
        </p>
        <BiGlobe className="h-10 w-10 cursor-pointer p-2 text-gray-500 rounded-full hover:bg-gray-100" />
        <div className="flex items-center gap-2 border-2 p-2 rounded-full hover:shadow-md cursor-pointer">
          <AiOutlineMenu className="h-6 w-6 text-gray-500" />
          <FaUserCircle className="h-6 w-6 text-gray-500" />
        </div>
      </div>
    </header>
  );
};

export default Header;
