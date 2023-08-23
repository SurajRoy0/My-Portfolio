import React from "react";

import "./Project.scss";
import ArrowIcon from "../../Call To Action/CallToAction";
import { Link } from "react-router-dom";
const BlogItem = ({ project }) => {
  return (
    <div className="blog-card">
      <div className="image-section">
        <img src={project?.imageRef?.imageUrl} alt={project.title} />
      </div>

      <div className="content-section">
        <div className="content">
          <h4>{project?.title}</h4>
          <div className="tech-stack">{project?.techStack}</div>
          <p>{project?.features}</p>
        </div>

        <div className="actions">
          <Link
            className="cta"
            to={project?.codeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text">Code</span>
            <ArrowIcon />
          </Link>
          <Link
            className="cta"
            to={project?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text">Live</span>
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
