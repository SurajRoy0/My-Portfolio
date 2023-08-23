import React, { useState } from "react";
import "./SkillDropdown.scss"; 
import { FaAngleDown } from 'react-icons/fa';

const SkillDropdown = ({topic}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        <div className="topic-name">
        {topic.name} <FaAngleDown />
        </div>
      </button>
      {isOpen && (
        <div className="dropdown-content">
         {topic.skills.map((skill)=> <p className="item">{skill}</p>)}
        </div>
      )}
    </div>
  );
};

export default SkillDropdown;
