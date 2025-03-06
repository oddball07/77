"use client";

import React, { useState } from "react";
import { PrismicRichText, PrismicLink } from "@prismicio/react";
import Collapse from "./collapse";

const ProjectItem = ({ project }: { project: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="project">
      {/* Clickable Summary */}
      <div className="summary" onClick={() => setIsOpen((prev) => !prev)}>
        <PrismicLink field={project.data.project_link}>
          {project.data.project_link?.text || "Link Not Available"}
        </PrismicLink>
        {project.data.title || "Project Name"}
      </div>

      {/* Animated Collapse Component */}
      <Collapse isOpen={isOpen}>
        <div className="content">
          <PrismicRichText field={project.data.description} />
        </div>
      </Collapse>

      <div className="line"></div>
    </div>
  );
};

export default ProjectItem;
