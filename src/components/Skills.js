import {SiPython, SiJavascript, SiHtml5, SiCss3, SiLatex, SiMysql, SiMongodb, SiNodedotjs, SiExpress, SiReact, SiNodemon, SiTailwindcss, SiGithub, SiGitlab, SiAndroidstudio, SiPostman} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import pygame from "../assets/pygame_logo.svg";
import python from "../assets/python.png";
import assembly from "../assets/assembly3.png";
import C from "../assets/C.png";

export const skills = {
  languages: [
    {
      name: "Python",
      logo: python,
      description: "High-level programming language",
    },
    {
      name: "Java",
      logo: FaJava,
      color: "#007396",
      description: "Object-Oriented Programming",
    },
    {
      name: "JavaScript",
      logo: SiJavascript,
      color: "#F7DF1E",
      description: "Web development language",
    },
    {
      name: "C",
      logo: C,
      description: "General-purpose language",
    },
    {
      name: "HTML",
      logo: SiHtml5,
      color: "#E34F26",
      description: "Markup language for web",
    },
    {
      name: "CSS",
      logo: SiCss3,
      color: "#2965f1",
      description: "Stylesheet language for web",
    },
    {
      name: "Assembly",
      logo: assembly,
      description: "Machine level coding",
    },
    {
      name: "LaTeX",
      logo: SiLatex,
      color:"rgb(55, 126, 127)",
      description: "Typesetting system for documents",
    },
    
  ],
  databases: [
    {
      name: "MySQL",
      logo: SiMysql,
      color:"rgb(125, 154, 182)",
      description: "Relational database",
    },
    {
      name: "Mongo DB",
      logo: SiMongodb,
      color:"rgb(96, 160, 83)",
      description: "NoSQL database",
    },
  ],
  frameworks: [
    {
      name: "React",
      logo: SiReact,
      color:"rgb(130, 216, 247)",
      description: "JavaScript UI library",
    },
    {
      name: "Node.js",
      logo: SiNodedotjs,
      color:"rgb(117, 159, 105)",
      description: "JavaScript runtime for backend",
    },
    {
      name: "Tailwind",
      logo: SiTailwindcss,
      color:"rgb(82, 179, 209)",
      description: "CSS framework",
    },
    {
      name: "Nodemon",
      logo: SiNodemon,
      color:"rgb(140, 206, 95)",
      description: "Auto-restart Node.js server",
    },
    {
      name: "Express.js",
      logo: SiExpress,
      color:"rgb(55, 126, 127)",
      description: "Node.js application framework",
    },
    {
      name: "PyGame",
      logo: pygame,
      description: "Python game building library",
    },
  ],
  codeShare: [
    {
      name: "GitHub",
      logo: SiGithub,
      color:"rgb(100, 112, 188)",
      description: "Version control & collaboration",
    },
    {
      name: "GitLab",
      logo: SiGitlab,
      color:"rgb(239, 165, 67)",
      description: "Open Source code repository",
    },
  ],
  mobile: [
    {
      name: "Android Studio",
      logo: SiAndroidstudio,
      color:"rgb(113, 217, 140)",
      description: "Mobile OS by Google",
    },
    {
      name: "Postman",
      logo: SiPostman,
      color:"rgb(238,117,71)",
      description: "API testing",
    },
  ],
};
