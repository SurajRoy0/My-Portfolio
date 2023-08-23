import React from "react";
import "./Skills.scss";
import api from "../../../Assets/Images/skills/API.png";
import bootstrap from "../../../Assets/Images/skills/Bootsrtap.png";
import css from "../../../Assets/Images/skills/CSS.png";
import esLint from "../../../Assets/Images/skills/ES Lint.png";
import firebase from "../../../Assets/Images/skills/Firebase.png";
import github from "../../../Assets/Images/skills/Github.png";
import html from "../../../Assets/Images/skills/HTML.png";
import javaScript from "../../../Assets/Images/skills/Java Script.png";
import json from "../../../Assets/Images/skills/JSON.png";
import materialUi from "../../../Assets/Images/skills/Meterial UI.png";
import mongoDb from "../../../Assets/Images/skills/Mongo DB.png";
import nextJs from "../../../Assets/Images/skills/Next Js.png";
import npm from "../../../Assets/Images/skills/NPM.png";
import postman from "../../../Assets/Images/skills/Postman.png";
import reactjs from "../../../Assets/Images/skills/React Js.png";
import redux from "../../../Assets/Images/skills/Redux.png";
import tailwind from "../../../Assets/Images/skills/Tailwind CSS.png";
import reactRouter from "../../../Assets/Images/skills/React Router.png";
import SkillDropdown from "./SkillDropdown";

const skills = [
  {
    id: 1,
    url: reactjs,
    name: "React JS",
  },
  {
    id: 2,
    url: redux,
    name: "Redux JS",
  },
  {
    id: 3,
    url: html,
    name: "HTML",
  },
  {
    id: 4,
    url: css,
    name: "CSS",
  },
  {
    id: 5,
    url: bootstrap,
    name: "Bootstrap",
  },
  {
    id: 6,
    url: api,
    name: "API",
  },
  {
    id: 7,
    url: esLint,
    name: "ES Lint",
  },
  {
    id: 8,
    url: firebase,
    name: "Firebase",
  },
  {
    id: 9,
    url: github,
    name: "GitHub",
  },
  {
    id: 10,
    url: javaScript,
    name: "JavaScript",
  },
  {
    id: 11,
    url: materialUi,
    name: "Material UI",
  },
  {
    id: 12,
    url: json,
    name: "JSON",
  },
  {
    id: 13,
    url: mongoDb,
    name: "MongoDB",
  },
  {
    id: 14,
    url: nextJs,
    name: "NEXT JS",
  },
  {
    id: 15,
    url: npm,
    name: "NPM",
  },
  {
    id: 16,
    url: postman,
    name: "Postman",
  },
  {
    id: 17,
    url: reactRouter,
    name: "React Router",
  },
  {
    id: 18,
    url: tailwind,
    name: "Tailwind CSS",
  },
];

const skillsTopics = [
  {
    name: "HTML",
    skills: ["All basic tags", "Tags Attributes", "Others"],
  },
  {
    name: "CSS",
    skills: [
      "Inline Styling",
      "Selectors",
      "Positions",
      "Pseudo Class",
      "Flex",
      "Grid",
      "Media Queries",
      "Animations",
      "Sass",
      "CSS Module",
      "Others",
    ],
  },
  {
    name: "Javascript",
    skills: [
      "DOM",
      "HOF",
      "Event Listener",
      "Forms Handling",
      "Local Storage",
      "Asynchronous Programming",
      "Promises",
      "Fetch API",
      "Crud Operations",
      " Debouncing",
      "Import / Export",
      "JSON",
      "Others",
    ],
  },
  {
    name: "React JS",
    skills: [
      "Components",
      "Props",
      "Hooks",
      "Fetch API",
      "Pagination",
      "Forms Handling",
      "Context API",
      "React Router",
      "Dynamic Routing",
      "Axios",
      "Redux",
      "State Management",
      "Others",
    ],
  },
  {
    name: "NEXT JS",
    skills: [
      "Components",
      "Fundamentals",
      "Server-Side Rendering",
      "Routing and Navigation",
      "Data Fetching",
      "Styling",
      "Working with APIs",
      "State Management",
      "App Router",
      "Others",
    ],
  },
  {
    name: "Tools/Library/Framework",
    skills: [
      "Bootstrap",
      "Tailwind CSS",
      "Material UI",
      "Postman",
      "Firebase",
      "npm",
      "Github",
      "Axios",
      "Others",
    ],
  },
];

const Skills = () => {
  return (
    <div className="skills-content-wrapper" id="skills">
      <h1>SKILLS</h1>
      <div className="top-col">
        <div className="skills-logos">
          {skills?.map((skill) => (
            <span className="skill" key={skill.id}>
              <img className="skill-logo" src={skill.url} alt={skill.name} />
              <span className="skill-name">{skill.name}</span>
            </span>
          ))}
        </div>
        <div className="skills-logos">
          {skills?.map((skill) => (
            <span className="skill" key={skill.id}>
              <img className="skill-logo" src={skill.url} alt={skill.name} />
              <span className="skill-name">{skill.name}</span>
            </span>
          ))}
        </div>
      </div>
      <div className="bottom-col">
        <div className="dropdown-skills_container">
          {skillsTopics?.map((topic) => (
            <SkillDropdown topic={topic} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
