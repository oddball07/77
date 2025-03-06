import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ProjectImages`.
 */
export type ProjectImagesProps =
  SliceComponentProps<Content.ProjectImagesSlice>;

/**
 * Component for "ProjectImages" Slices.
 */
const ProjectImages: FC<ProjectImagesProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for project_images (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ProjectImages;
