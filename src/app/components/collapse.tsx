"use client";

import React from "react";
import { motion } from "framer-motion";

interface CollapseProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Collapse: React.FC<CollapseProps> = ({ isOpen, children }) => {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={
        isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
      }
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{ overflow: "hidden" }}
    >
      {children}
    </motion.div>
  );
};

export default Collapse;
