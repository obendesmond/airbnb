import Image from "next/image";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

type Props = {};

const Header = ({}: Props) => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          style={{ objectFit: "contain", objectPosition: "left" }}
          fill
          alt="airbnb logo"
        />
      </div>

      {/* middle search */}
      <div className="rounded-full flex p-2 items-center md:border-2 sm:shadow-sm">
        <input
          type="text"
          placeholder="Start your search"
          className="border-none bg-transparent px-2 outline-none flex-1 text-sm text-gray-600 placeholder-gray-400"
        />
        <MagnifyingGlassIcon className="hidden h-8 bg-transparent text-gray-500  rounded-full p-0 cursor-pointer rotate-[135deg] sm:inline-flex sm:text-white sm:bg-red-500 sm:p-2" />
      </div>
      {/* right */}
      <div className="flex items-center justify-end gap-4">
        <p className="hidden md:inline-flex text-center cursor-pointer">
          Become a host
        </p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center gap-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
