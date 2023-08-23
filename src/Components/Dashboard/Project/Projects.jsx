import React, { useState, useEffect } from "react";
import "./Projects.scss";
import { db } from "../../../firebase/firebase";
import { uploadImageHandler } from "../../Utils/helpers";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import ShowAvailableProjects from "./ShowAvailableProjects";

const Projects = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [slNumber, setSlNumber] = useState("");
  const [techStack, setTechStack] = useState("");
  const [features, setFeatures] = useState("");
  const [codeLink, setCodeLink] = useState("");
  const [url, setURL] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const imageRef = await uploadImageHandler(image);

      const docRef = await addDoc(collection(db, "projects"), {
        slNumber,
        title,
        imageRef,
        techStack,
        features,
        codeLink,
        url,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };

  return (
    <>
      <div className="projects">
        <form className="project-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="file"
            placeholder="Image"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <input
            type="number"
            placeholder="Serial number"
            value={slNumber}
            onChange={(e) => setSlNumber(e.target.value)}
          />
          <input
            type="text"
            placeholder="Tech Stack"
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
          />
          <textarea
            placeholder="Features"
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
          ></textarea>
          <input
            type="text"
            placeholder="Code Link"
            value={codeLink}
            onChange={(e) => setCodeLink(e.target.value)}
          />
          <input
            type="text"
            placeholder="Project URL"
            value={url}
            onChange={(e) => setURL(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="show-project">
        <ul>
          {projects?.map((project) => {
            return <ShowAvailableProjects key={project.id} project={project} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default Projects;
