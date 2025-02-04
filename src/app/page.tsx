"use client";

import { useEffect, useState } from "react";
import Loading from "./loading";
import "./home.css";
import Nav from "./components/Nav";
import Image from "next/image";
import spiderImage from "./assets/new spider.jpg";

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
        <div className="details">
          <Image
            src={spiderImage}
            style={{ width: "100%", height: "100%" }}
            alt="spider image"
          ></Image>
        </div>
      </div>
    </>
  );
}
