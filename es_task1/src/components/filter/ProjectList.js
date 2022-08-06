import React from "react";

function ProjectList({ projects }) {
  return (
    <div className="projects_container">
      {projects.map((item) => 
        <img src={item.img} alt="image" className="image" />
      )}
    </div>
  );
}

export default ProjectList;
