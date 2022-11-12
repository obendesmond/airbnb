import Image from "next/image";
import React from "react";
import { banner } from "../utils/ImgSources";

type Props = {};

function Banner({}: Props) {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src={banner}
        alt="airbnb banner"
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="absolute w-full top-1/2 text-center">
        <p className="text-sm sm:text-xl">Not sure where to go? Perfect.</p>
        <button className="text-purple-500 px-6 py-3 font-bold my-3 bg-white shadow-md rounded-full md:px-10 md:py-4 hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
