import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import Project01 from "public/project-1.png";
// import Project02 from "public/project-2.png";
import DigitalWallet from "public/digital-wallet.jpg";
import OcrSystem from "public/ocr-system.jpg";
import BodyCheckSystems from "public/body-check-systems.png";
import ClinicPortal from "public/clinic-portal.jpg";

export const links = [
  { name: "Home", href: "#about" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const projectData = [
  {
    name: "Body Check Systems",
    description:
      "A customer-centric Body Check Mall platform enabling users to browse, purchase body check-up plans, and track their appointment history.",
    badges: [
      "NodeJS",
      "NestJS",
      "ReactJS",
      "NextJS",
      "MySQL",
      "Jest",
      "Cypress",
    ],
    bgColor: "#ffe3a4",
    imgSrc: BodyCheckSystems,
  },
  {
    name: "Clinic & Admin Portal",
    description:
      "A clinic management portal that enables medical staff to verify clients from partnered insurance providers, while supporting doctor management, appointment scheduling, medical service fee configuration, and administrative operations.",
    badges: [
      "NodeJS",
      "NestJS",
      "ReactJS",
      "NextJS",
      "MySQL",
      "Microservice",
    ],
    bgColor: "#c5ded5",
    imgSrc: ClinicPortal,
  },
  {
    name: "OCR Systems",
    description:
      "An automated medical document processing system leveraging OCR technology to classify multiple document types, apply rule-based logic for specific scenarios, and transform extracted text into structured JSON outputs.",
    badges: [
      "NodeJS",
      "NestJS",
      "ReactJS",
      "NextJS",
      "MySQL",
      "Google Gemini API",
    ],
    bgColor: "#ffd0c3",
    imgSrc: OcrSystem,
  },
  {
    name: "Insurance Digital Wallet",
    description:
      "Developed a Minimum Viable Product (MVP) for an insurance digital wallet that streamlines the pre-hospital process. The system allows users to request medical coverage, receive virtual cards for real-time hospital payments, and submit the claim reconciliation and settlement process.",
    badges: [
      "NodeJS",
      "NestJS",
      "ReactJS",
      "PostgreSQL",
      "Airwallex Issuing API"
    ],
    imgSrc: DigitalWallet,
    bgColor: "#f3e8ff",
  },
];

export const experienceData = [
  // {
  //   title: "HCMC University of Technology and Education",
  //   date: "2020 - 2025",
  //   description:
  //     "Bachelor of Engineering In Information Technology.",
  //   icon: React.createElement(LuGraduationCap),
  //   iconStyle: {
  //     background: "#f15a23",
  //     color: "#fff",
  //   },
  // },
  {
    title: "Full Stack Developer - Modelty Strategy & Consulting",
    date: "Jul 2024 – Present",
    description:
      "Build and maintain web applications using NestJS, ReactJS, and MySQL, specializing in feature development and database modeling for the Insurance and Fintech sectors. Apply TDD and automation testing with Scrum methodology while integrating OCR AI capabilities to ensure high code quality and system stability.",
    icon: React.createElement(FaShieldAlt),
    iconStyle: {
      background: "#0e7c61",
      color: "#fff",
    },
  },
  {
    title: "Backend Developer (Intern) - ASOFT Corporation",
    date: "Sep 2023 – Dec 2023",
    description:
      "Researched and applied C# and ASP.NET along with SQL Server to develop web solutions and manage databases. Contributed to the research and practical development of ASOFT ERP products to support business operational needs",
    icon: React.createElement(FaBuilding),
    iconStyle: {
      background: "#1E4BF2",
      color: "#fff",
    },
  },
  {
    title: "HCMC University of Technology and Education",
    date: "Aug 2020 – Jan 2025",
    description:
      "Graduated with a Bachelor of Engineering In Information Technology.",
    icon: React.createElement(LuGraduationCap),
    iconStyle: {
      background: "#0600ff",
      color: "#fff",
    },
  },
];

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "NodeJS",
  "NestJS",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "SQL Server",
  "ReactJS",
  "NextJS",
  "RESTful API",
  "Git/Github",
  "Docker",
  "AWS",
  "Jest",
  "Cypress"
];

export const socialMediaData = [
  { name: "NguyenThanhNguyen - Backend", icon: FaRegFileAlt, url: "/NguyenThanhNguyen - Backend.pdf" },
  {
    name: "linkedin",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/nguyen-thanh-nguyen-34201627b/",
  },
  { name: "github", icon: FaGithub, url: "https://github.com/nthanhnguyen" },
];
