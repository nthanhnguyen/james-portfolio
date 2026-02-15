import React, { useState } from "react";
import Image from "next/image";
import SocialButton from "./SocialButton";
import { socialMediaData } from "../lib/data";
import ThemeSwitch from "./ThemeSwitch";
import { useSectionInView } from "../lib/motionSettings";
import gradientBg from "public/gradient-bg.jpg";
import me from "public/me-mac.png";

const Intro = () => {
  const { ref } = useSectionInView("About");
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 mb-4 pt-2 scroll-mt-28"
      ref={ref}
    >
      <div className="relative lg:min-h-[32rem] rounded-3xl bg-gray-50 dark:bg-navy-800 dark:outline dark:outline-2 dark:outline-navy-600">
        <Image
          src={gradientBg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="rounded-3xl dark:hidden"
          priority
        />
        <div className="relative h-full p-6 md:px-16 md:py-12 flex flex-col gap-8">
          <h1 className="text-4xl lg:text-6xl font-bold">
            Hi, I am{" "}
            <span className="text-gradient">Nguyen</span>
            <span className="block text-xl lg:text-2xl font-medium text-gray-500 dark:text-slate-muted mt-1">
              You can call me <span className="text-gradient font-semibold">James</span>
            </span>
          </h1>
          <div className="flex-1 flex flex-col justify-center">
            <ul
              className={`space-y-3 text-gray-700 dark:text-slate-muted list-none ${
                isExpanded ? "" : "line-clamp-3 md:line-clamp-4"
              }`}
            >
              <li className="flex gap-3">
                <span className="text-yellow-400 mt-1 shrink-0">▹</span>
                <span><strong className="text-gray-900 dark:text-slate-light font-semibold">2+ years</strong> of professional experience in <strong className="text-gray-900 dark:text-slate-light font-semibold">Backend development</strong>, specializing in building <strong className="text-gray-900 dark:text-slate-light font-semibold">RESTful APIs</strong> using <strong className="text-gray-900 dark:text-slate-light font-semibold">NodeJS</strong> and <strong className="text-gray-900 dark:text-slate-light font-semibold">NestJS</strong>, particularly for projects in the Insurance and Fintech sectors</span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-400 mt-1 shrink-0">▹</span>
                <span>Strong expertise in both <strong className="text-gray-900 dark:text-slate-light font-semibold">SQL</strong> and <strong className="text-gray-900 dark:text-slate-light font-semibold">NoSQL</strong> databases, with deep proficiency in <strong className="text-gray-900 dark:text-slate-light font-semibold">MongoDB</strong>, <strong className="text-gray-900 dark:text-slate-light font-semibold">MySQL</strong>, and <strong className="text-gray-900 dark:text-slate-light font-semibold">PostgreSQL</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-400 mt-1 shrink-0">▹</span>
                <span>Backend-focused with practical proficiency in building frontend interfaces using <strong className="text-gray-900 dark:text-slate-light font-semibold">NextJS</strong> and <strong className="text-gray-900 dark:text-slate-light font-semibold">ReactJS</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-400 mt-1 shrink-0">▹</span>
                <span>Solid understanding of <strong className="text-gray-900 dark:text-slate-light font-semibold">software design principles</strong>, <strong className="text-gray-900 dark:text-slate-light font-semibold">design patterns</strong>, and writing high-quality, testable code with <strong className="text-gray-900 dark:text-slate-light font-semibold">Jest</strong></span>
              </li>
            </ul>
            {/* <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-sm text-gray-500 dark:text-slate-muted hover:text-gray-800 dark:hover:text-slate-light mt-3 underline underline-offset-4 self-start"
            >
              {isExpanded ? "See less" : "See more"}
            </button> */}
          </div>
          <div className="flex flex-col lg:flex-row gap-4 justify-self-end">
            <button
              className="bg-black text-white font-medium py-3 px-10 rounded-full w-44 lg:w-auto dark:bg-navy-700 hover:scale-105"
              onClick={scrollToContact}
              aria-label="Contact me"
            >
              Contact me
            </button>
            <div className="flex items-center gap-4">
              {socialMediaData.map(({ name, icon: Icon, url }) => (
                <SocialButton key={name} bgColor={name} href={url}>
                  <Icon className="w-5 h-5" />
                </SocialButton>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-48 md:h-full lg:min-h-[32rem] rounded-3xl p-6 md:py-12 bg-gray-50 flex flex-row md:flex-col justify-items-end md:justify-between dark:bg-navy-800 dark:outline dark:outline-2 dark:outline-navy-600">
        <div className="relative h-[8rem] flex-1 md:w-auto">
          <Image src={me} alt="Me" fill className="object-contain" priority />
          <p className="text-2xl md:text-center dark:hidden">💭</p>
          <p className="text-2xl md:text-center hidden dark:block">💡</p>
        </div>
        <div className="flex-1 flex items-center justify-center text-center">
          <p className="text-2xl md:text-3xl font-medium tracking-wide text-gradient italic">
            Backend Developer
          </p>
        </div>
        <div
          className="flex items-center pl-4"
          aria-label="Click to switch theme"
        >
          <ThemeSwitch />
        </div>
      </div>
    </section>
  );
};

export default Intro;
