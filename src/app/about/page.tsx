import React from "react";
import "./about.css";
import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";

const AboutUs = async () => {
  try {
    const client = createClient();
    const about = await client.getSingle("about_us");

    return (
      <div className="about-us">
        <h2>About Us</h2>
        <div className="content">
          <PrismicRichText
            field={
              about?.data?.about_us_content?.length
                ? about.data.about_us_content
                : [{ type: "paragraph", text: "Hello", spans: [] }]
            }
          />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching Prismic content:", error);
    return (
      <div className="about-us">
        <h2>About Us</h2>
        <div className="content">
          <p>Error loading content. Please try again later.</p>
        </div>
      </div>
    );
  }
};

export default AboutUs;
