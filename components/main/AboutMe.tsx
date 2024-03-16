"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full phone_me">
      <div id="about-me" className="absolute w-auto h-auto top-5 z-[5]">
        <div className="text-[40px] font-medium text-center text-gray-200 py-[80px] phone_title">
          About Me
        </div>
      </div>

      <div className="flex flex-col items-center justify-center absolute z-[20] w-auto h-auto">
        <div className="Welcome-box px-[50px] py-[10px] z-[20]  my-[5px] border-[#ffffff8b] br">
          <p className="text-lg my-5 max-w-[1000px] phone_about">
            I am a student at UPB, Faculty of Electronics, Telecommunications
            and Information Technology. Me I consider myself a creative, dynamic
            and flexible, open to challenges and novelties, who is can easily
            adapt to the working environment and communication. In my spare time
            I am passionate about IT field, keeping up to date with the latest
            advances in Hardware Components and Development of
            applications/software.
          </p>
        </div>
      </div>

      <div className="absolute z-[20] bottom-[50px] px-[5px]">
        <div className="cursive text-[25px] font-medium text-center text-gray-300 phone_about">
          I hope you enjoyed it, don&apos;t forget to work every day!
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
