"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row item-center justify-center pl-[100px] pt-[50px] mt-20 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col pl-15 pt-20  gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromRight(0.5)}
          className="flex flex-col gap-6 text-6xl  text-white max-w-[600px]  "
        >
          <span className="font-extrabold">
            I&apos; m
            <span className="py-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Christian Paraschiv
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px] font-bold"
        >
          I am a beginner developer with experience in web and software
          development gained from projects and courses, where I learned to work
          with both Frontend and Backend technologies, and here you can see both
          details about me and my projects!
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          href="/CV.pdf"
          download
        >
          Take my CV!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center pt-[50px] pl-[150px]"
      >
        <Image src="/CH.png" alt="work icons" height={400} width={700} />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
