import React from "react";
import { createClient } from "@/prismicio";
import ProjectItem from "./ProjectItem"; // Import Client Component

const Projects = async () => {
  const client = createClient();
  const projects = await client.getAllByType("projects"); // Fetch all projects

  return (
    <div className="projects">
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} /> // Pass project data
      ))}
    </div>
  );
};

export default Projects;
