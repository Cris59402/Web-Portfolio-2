"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#36363a17] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="/" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/blackhole.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            CH-WebPortfolio
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20 pl-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          <a
            href="https://www.instagram.com/paraschiv_christian/"
            className="flex flex-row items-center"
          >
            <Image
              src="/instagram.png"
              alt="logo"
              width={45}
              height={50}
              className="cursor-pointer hover:animate-slowspin"
            />
          </a>
          <a
            href="https://github.com/Cris59402"
            className="flex flex-row items-center"
          >
            <Image
              src="/github.png"
              alt="logo"
              width={50}
              height={50}
              className="cursor-pointer hover:animate-slowspin"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/christian-paraschiv-milea-86404b242/"
            className="flex flex-row items-center"
          >
            <Image
              src="/linkedin.png"
              alt="logo"
              width={45}
              height={50}
              className="cursor-pointer hover:animate-slowspin"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
