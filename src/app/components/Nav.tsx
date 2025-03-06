"use client";

import React from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./Nav.css";
import { motion } from "framer-motion";
import { useState } from "react";
import ThreeScene from "./ThreeScene";

const inter = Inter({
  subsets: ["latin"],
});

const Nav = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className={`navbar ${inter.className}`}>
      <div className="links">
        <ul>
          {[
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: "About Us", path: "/about" },
            { name: "Contact Us", path: "/contact" },
          ].map((item, index) => (
            <motion.li
              key={index}
              className="list-item"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{
                color: "white",
                x: 5,
              }}
              transition={{ duration: 0.3 }}
            >
              <Link href={item.path} className="list-link">
                {hoveredIndex === index && (
                  <motion.div
                    className="circle"
                    initial={{ scale: 0 }}
                    animate={{ scale: 250 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.6 }}
                  ></motion.div>
                )}
                <p>{item.name}</p>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="empty-row"></div>
      <div className="logo">
        {/* <svg
          width="142"
          height="124"
          viewBox="0 0 142 124"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8182 124L48.3636 49.6364V49.0455H4.45455V30.9091H71.6364V49.1818L33.9545 124H10.8182Z"
            fill="black"
          />
          <path
            d="M131.182 124L93.6364 49.6364V49.0455H137.545V30.9091H70.3636V49.1818L108.045 124H131.182Z"
            fill="black"
          />
        </svg> */}
        <ThreeScene></ThreeScene>
      </div>
    </div>
  );
};

export default Nav;
