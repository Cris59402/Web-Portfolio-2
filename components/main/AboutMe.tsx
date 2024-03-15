"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div id="about-me" className="absolute w-auto h-auto top-5 z-[5]">
        <div className="text-[40px] font-medium text-center text-gray-200 py-[80px]">
          About Me
        </div>
      </div>

      <div className="flex flex-col items-center justify-center absolute z-[20] w-auto h-auto">
        <div className="Welcome-box px-[50px] py-[10px] z-[20] brder my-[5px] border-[#ffffff8b]">
          <p className="text-lg my-5 max-w-[1000px]">
            I am a student at the Polytechnic University of Bucharest, Faculty
            of Electronics, Telecommunications and Information Technology,
            majoring in Telecommunications Systems Technologies. I consider
            myself a creative, dynamic and flexible person, open to challenges
            and novelties, who can easily adapt to the working and communication
            environment. In my spare time I am passionate about the IT field,
            keeping up to date with the latest developments in Hardware
            components and Application/software Development. As a freelance
            activity, I am currently studying various programming languages for
            the web domain (both frontend and backend), with the help of which I
            have learned to do better on the application development side.
            Overall I like to gather as much knowledge as possible and I am
            looking forward to working in the field.
          </p>
        </div>
      </div>

      <div className="absolute z-[20] bottom-[50px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          I hope you enjoyed it, don&apos;t forget to work every day
        </div>
      </div>
    </div>
  );
};

export default Encryption;
