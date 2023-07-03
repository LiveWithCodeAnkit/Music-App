"use client";
import Image from "next/image";
import React from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import {
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
} from "react-icons/tb";
import SocialMedia from "../SocialMedia/SocialMedia";

const Header = () => {
  const [audioProgress, setAudioProgress] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [musicIndex, setMusicIndex] = useState(0);
  const [musicTotalLength, setMusicTotalLength] = useState('04 : 38');
  const [musicCurrentTime, setMusicCurrentTime] = useState('00 : 00');
  return (
    <>
      <>
        <div className="relative flex flex-col justify-center items-center p-28 font-Pacifico ">
          <div className=" flex flex-col  p-14 bg-white dark:bg-[#444352] rounded-xl shadow-blue-800 shadow-2xl gap-8">
            <div className="flex flex-col  w-auto justify-center items-center gap-3">
              <label className="dark:text-[#FCB514] text-2xl">Song Name</label>
              <label className="dark:text-[#FCB514] text-2xl">
                Artist name
              </label>
            </div>
            <div>
              <div className="relative w-52 h-52 ">
                <Image
                  src="/musicappimg.jpg"
                  fill
                  alt={"Np Image Found"}
                  className="rounded-full animate-spin-slow bg-cover"
                />
              </div>
            </div>
            <div className="flex justify-center items-center gap-5">
              <button>
                <TbPlayerTrackPrevFilled className="text-4xl dark:text-[#FCB514]" />
              </button>
              <button>
                <BsPlayCircleFill className="text-4xl dark:text-[#FCB514]" />
              </button>
              <button>
                <TbPlayerTrackNextFilled className="text-4xl dark:text-[#FCB514]" />
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
