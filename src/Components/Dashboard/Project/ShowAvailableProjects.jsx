import { db } from "../../../firebase/firebase";
import "./ShowAvailableProjects.scss";
import { doc, deleteDoc } from "firebase/firestore";
const ShowAvailableProjects = ({ project }) => {
  const deleteProjectHandler = async () => {
    await deleteDoc(doc(db, "projects", project.id));
  };
  return (
    <li className="project-list">
      <span>{project.slNumber}</span>
      <h5>{project.title}</h5>
      <button onClick={deleteProjectHandler}>Delete</button>
    </li>
  );
};

export default ShowAvailableProjects;
