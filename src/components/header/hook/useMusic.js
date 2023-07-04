"use client";
import React, { useState, useRef, useEffect } from "react";
import { musicAPI } from "@/components/constents/musicList";

export const useMusic = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicTotalLength, setMusicTotalLength] = useState("04 : 38");
  const [musicCurrentTime, setMusicCurrentTime] = useState("00 : 00");
  const [audioProgress, setAudioProgress] = useState(0);

  // useEffect(() => {
  //   setIsPlaying(!isPlaying);
  // });

  const currentAudio = useRef();
  const handleMusicProgressBar = (e) => {
    setAudioProgress(e.target.value);
    currentAudio.current.currentTime =
      (e.target.value * currentAudio.current.duration) / 100;
  };

  const playPauseTrack = () => {
    if (!isPlaying) {
      var audio = document.getElementById("a1");
      audio.pause();

      setIsPlaying(!isPlaying);
    } else {
      var audio = document.getElementById("a1");
      audio.play();
      setIsPlaying(!isPlaying);
    }
  };

  const playNextTrack = () => {
    setIsPlaying(true);
    const nextTrackIndex = (currentTrackIndex + 1) % musicAPI.length;
    setCurrentTrackIndex(nextTrackIndex);
  };

  const playPreviousTrack = () => {
    setIsPlaying(true);
    const previousTrackIndex =
      (currentTrackIndex - 1 + musicAPI.length) % musicAPI.length;
    setCurrentTrackIndex(previousTrackIndex);
  };

  const handleAudioUpdate = () => {
    let minutes = Math.floor(currentAudio.current.duration / 60);
    let seconds = Math.floor(currentAudio.current.duration % 60);
    let musicTotalLength0 = `${minutes < 10 ? `0${minutes}` : minutes} : ${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
    setMusicTotalLength(musicTotalLength0);

    let currentMin = Math.floor(currentAudio.current.currentTime / 60);
    let currentSec = Math.floor(currentAudio.current.currentTime % 60);
    let musicCurrentT = `${currentMin < 10 ? `0${currentMin}` : currentMin} : ${
      currentSec < 10 ? `0${currentSec}` : currentSec
    }`;
    setMusicCurrentTime(musicCurrentT);

    const progress = parseInt(
      (currentAudio.current.currentTime / currentAudio.current.duration) * 100
    );
    setAudioProgress(isNaN(progress) ? 0 : progress);
  };

  return {
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
    setIsPlaying,
  };
};
