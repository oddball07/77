"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./loading.css";

const Loading: React.FC = () => {
  const [progress, setProgress] = useState(0); // Progress bar state
  const [count, setCount] = useState(0); // Counter state
  const [isLoading, setIsLoading] = useState(true); // Track if loading is active

  useEffect(() => {
    // Synchronize progress and count
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 10; // Increment progress
        const newCount = Math.round((newProgress / 100) * 77); // Map progress to count (0 to 77)
        setCount(newCount);

        if (newProgress >= 100) {
          clearInterval(interval); // Stop interval at 100% progress
          setTimeout(() => setIsLoading(false), 500); // Wait a bit before hiding
          return 100;
        }

        return newProgress;
      });
    }, 200); // Update every 200ms

    return () => {
      clearInterval(interval); // Cleanup interval on unmount
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loading-container"
          initial={{ opacity: 1, y: 0 }} // Start fully visible
          animate={{ opacity: 1, y: 0 }} // While loading
          exit={{ opacity: 0, y: -50 }} // Slide up and fade out when done
          transition={{ duration: 0.2 }} // Transition duration
        >
          <h2>{count}</h2> {/* Display count (0 to 77) */}
          <div
            className="loading-bar"
            style={{ width: `${progress / 4}%` }}
          ></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;
