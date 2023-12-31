import Link from "next/link";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithubAlt } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <>
      <div className="flex flex-col  justify-center items-start p-2">
        <Link
          href="https://www.instagram.com/_live_ankit/"
          className="flex justify-center items-center text-red-600 text-xl gap-2 animate-bounce "
        >
          <AiFillInstagram className="text-4xl text-[#E4405F]" />
          _live_ankit
        </Link>

        <Link
          href="https://github.com/LiveWithCodeAnkit"
          className="animate-bounce flex justify-center items-center text-blue-700 text-xl gap-2 font-bold"
        >
          <FaGithubAlt className="text-4xl text-blue-700" />
          LiveWithCodeAnkit
        </Link>
      </div>
    </>
  );
};

export default SocialMedia;
