import Image from "next/image";
import React from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import {
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
} from "react-icons/tb";
import SocialMedia from "../SocialMedia/SocialMedia";

const Header = () => {
  return (
    <>
      <>
        <div className="relative flex flex-col justify-center items-center  font-Pacifico dark:bg-slate-800 ">
          <div className="flex flex-col  p-14 bg-white rounded-xl shadow-blue-800 shadow-2xl gap-8">
            <div className="flex flex-col  w-auto justify-center items-center gap-3">
              <label>Song Name</label>
              <label>Artist name</label>
            </div>
            <div>
              <div className="relative w-52 h-52 ">
                <Image
                  src="/musicappimg.jpg"
                  fill
                  alt={"Np Image Found"}
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="flex justify-center items-center gap-5">
              <button>
                <TbPlayerTrackPrevFilled className="text-4xl" />
              </button>
              <button>
                <BsPlayCircleFill className="text-4xl" />
              </button>
              <button>
                <TbPlayerTrackNextFilled className="text-4xl" />
              </button>
            </div>
          </div>
          <div className="absolute left-3 bottom-10 z-20">
            <SocialMedia />
          </div>
        </div>
      </>
    </>
  );
};

export default Header;
