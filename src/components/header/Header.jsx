"use client";
import { Pacifico } from "next/font/google";
import { BsPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";
import {
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
} from "react-icons/tb";
import Image from "next/image";
import SocialMedia from "../SocialMedia/SocialMedia";
import { useMusic } from "./hook/useMusic";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["cyrillic"],
  display: "auto",
});

const Header = () => {
  const {
    handleAudioUpdate,
    playPreviousTrack,
    playNextTrack,
    playPauseTrack,
    handleMusicProgressBar,
    currentTrackIndex,
    musicTotalLength,
    musicCurrentTime,
    audioProgress,
    musicAPI,
    currentAudio,
    isPlaying,
  } = useMusic();



  return (
    <>
      <>
        <div
          className={`relative flex flex-col justify-center items-center p-28 ${pacifico.className}`}
        >
          <div className=" flex flex-col  p-14 bg-white dark:bg-[#444352] rounded-xl shadow-blue-800 shadow-2xl gap-8">
            <div className="flex flex-col  w-auto justify-center items-center gap-3">
              <label className="dark:text-[#FCB514] text-2xl">
                {musicAPI[currentTrackIndex].songName}
              </label>
              <label className="dark:text-[#FCB514] text-2xl">
                {musicAPI[currentTrackIndex].songArtist}
              </label>
            </div>

            <audio
              src={musicAPI[currentTrackIndex].songSrc}
              onEnded={playNextTrack}
              id="a1"
              ref={currentAudio}
              onTimeUpdate={handleAudioUpdate}
              className="hidden"
            />

            <div>
              <div className="relative w-52 h-52 ">
                <Image
                  src={musicAPI[currentTrackIndex].songAvatar}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={false || true}
                  quality={75}
                  alt={"Np Image Found"}
                  className={`rounded-full ${
                    isPlaying ? "" : "animate-spin-slow"
                  } bg-cover`}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <input
                type="range"
                value={audioProgress}
                onChange={handleMusicProgressBar}
              />
              <div className="flex justify-between">
                <p>{musicCurrentTime}</p>
                <p>{musicTotalLength}</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-5">
              <button onClick={playPreviousTrack}>
                <TbPlayerTrackPrevFilled className="text-4xl dark:text-[#FCB514]" />
              </button>
              <button onClick={playPauseTrack}>
                {isPlaying ? (
                  <BsPlayCircleFill className="text-4xl dark:text-[#FCB514]" />
                ) : (
                  <BsFillPauseCircleFill className="text-4xl dark:text-[#FCB514]" />
                )}
              </button>
              <button onClick={playNextTrack}>
                <TbPlayerTrackNextFilled className="text-4xl dark:text-[#FCB514]" />
              </button>
            </div>
          </div>
        </div>
        <div className={`absolute left-3 bottom-10 z-20 ${pacifico.className}`}>
          <SocialMedia />
        </div>
      </>
    </>
  );
};

export default Header;
