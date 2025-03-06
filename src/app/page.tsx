"use client";

import { useEffect, useState } from "react";
import Loading from "./loading";
import "./home.css";
import Image from "next/image";
import homePageImage from "./assets/home-page-photo.png";

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
      <Image
        src={homePageImage}
        style={{ width: "100%", height: "100%" }}
        alt="spider image"
      ></Image>
    </>
  );
}
