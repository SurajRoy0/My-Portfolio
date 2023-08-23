import React, { useEffect, useState } from "react";

import "./Portfolio.scss";
import Project from "./Project";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const projectsData = [];
    const unsub = onSnapshot(collection(db, "projects"), (querySnapshot) => {
      projectsData.length = 0;
      querySnapshot.forEach((doc) => {
        projectsData.push({ id: doc?.id, ...doc?.data() });
      });
      setProjects(projectsData);
    });
    return () => unsub;
  }, []);
  console.log(projects);
  return (
    <div className="projects-wrapper" id="portfolio">
      <h1 className="title">PROJECTS</h1>
      <div className="project-container">
        {projects?.map((project) => {
          return <Project project={project} />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
