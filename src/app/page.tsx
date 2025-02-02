"use client";

import { useEffect, useState } from "react";
import Loading from "./loading";
import "./home.css";
import Nav from "./components/Nav";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <div className="homepage">
        <Nav />
        <div className="details"></div>
      </div>
    </>
  );
}
