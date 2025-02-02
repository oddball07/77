"use client";

import React from "react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import "./home.css";

const Sidebar = ({ className }: { className: string }) => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const thirdText = useRef(null);
  const fourthText = useRef(null);
  let yPercent = 0;
  const direction = -1;

  useEffect(() => {
    requestAnimationFrame(animation);
  }, []);

  const animation = () => {
    if (yPercent <= -100) {
      yPercent = 0;
    }

    gsap.set(firstText.current, { yPercent: yPercent });
    gsap.set(secondText.current, { yPercent: yPercent });
    gsap.set(thirdText.current, { yPercent: yPercent });
    gsap.set(fourthText.current, { yPercent: yPercent });

    yPercent += 0.15 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <div className={className}>
      <div className="slider">
        <div className="svg-container" ref={firstText}>
          <svg
            width="116"
            height="526"
            viewBox="0 0 116 526"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 517.886L78.7727 489.727H79.2159V522.659H92.8182V472.273H79.1136L23 500.534V517.886Z"
              fill="black"
            />
            <path
              d="M23 8.11364L78.7727 36.2727H79.2159V3.34091H92.8182V53.7273H79.1136L23 25.4659V8.11364ZM23 63.1278H92.8182V111.81H79.1136V80.0028H64.7955V109.321H51.0568V80.0028H36.7045V111.81H23V63.1278ZM92.8182 138.23L41.6818 153.844V154.423L92.8182 170.037V188.923L23 165.366V142.901L92.8182 119.344V138.23ZM23 196.44H92.8182V245.122H79.1136V213.315H64.7955V242.634H51.0568V213.315H36.7045V245.122H23V196.44ZM92.8182 315.111H23V300.793L63.2955 273.009V272.565H23V255.69H92.8182V270.213L52.5909 297.69V298.27H92.8182V315.111ZM79.1136 323.438H92.8182V382.449H79.1136V361.278H23V344.642H79.1136V323.438ZM92.8182 387.213V406.065L63.6023 420.827V421.44L92.8182 436.202V455.054L46.3182 429.52H23V412.747H46.3182L92.8182 387.213Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="svg-container" ref={secondText}>
          <svg
            width="116"
            height="526"
            viewBox="0 0 116 526"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 517.886L78.7727 489.727H79.2159V522.659H92.8182V472.273H79.1136L23 500.534V517.886Z"
              fill="black"
            />
            <path
              d="M23 8.11364L78.7727 36.2727H79.2159V3.34091H92.8182V53.7273H79.1136L23 25.4659V8.11364ZM23 63.1278H92.8182V111.81H79.1136V80.0028H64.7955V109.321H51.0568V80.0028H36.7045V111.81H23V63.1278ZM92.8182 138.23L41.6818 153.844V154.423L92.8182 170.037V188.923L23 165.366V142.901L92.8182 119.344V138.23ZM23 196.44H92.8182V245.122H79.1136V213.315H64.7955V242.634H51.0568V213.315H36.7045V245.122H23V196.44ZM92.8182 315.111H23V300.793L63.2955 273.009V272.565H23V255.69H92.8182V270.213L52.5909 297.69V298.27H92.8182V315.111ZM79.1136 323.438H92.8182V382.449H79.1136V361.278H23V344.642H79.1136V323.438ZM92.8182 387.213V406.065L63.6023 420.827V421.44L92.8182 436.202V455.054L46.3182 429.52H23V412.747H46.3182L92.8182 387.213Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="svg-container" ref={thirdText}>
          <svg
            width="116"
            height="526"
            viewBox="0 0 116 526"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 517.886L78.7727 489.727H79.2159V522.659H92.8182V472.273H79.1136L23 500.534V517.886Z"
              fill="black"
            />
            <path
              d="M23 8.11364L78.7727 36.2727H79.2159V3.34091H92.8182V53.7273H79.1136L23 25.4659V8.11364ZM23 63.1278H92.8182V111.81H79.1136V80.0028H64.7955V109.321H51.0568V80.0028H36.7045V111.81H23V63.1278ZM92.8182 138.23L41.6818 153.844V154.423L92.8182 170.037V188.923L23 165.366V142.901L92.8182 119.344V138.23ZM23 196.44H92.8182V245.122H79.1136V213.315H64.7955V242.634H51.0568V213.315H36.7045V245.122H23V196.44ZM92.8182 315.111H23V300.793L63.2955 273.009V272.565H23V255.69H92.8182V270.213L52.5909 297.69V298.27H92.8182V315.111ZM79.1136 323.438H92.8182V382.449H79.1136V361.278H23V344.642H79.1136V323.438ZM92.8182 387.213V406.065L63.6023 420.827V421.44L92.8182 436.202V455.054L46.3182 429.52H23V412.747H46.3182L92.8182 387.213Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="svg-container" ref={fourthText}>
          <svg
            width="116"
            height="526"
            viewBox="0 0 116 526"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 517.886L78.7727 489.727H79.2159V522.659H92.8182V472.273H79.1136L23 500.534V517.886Z"
              fill="black"
            />
            <path
              d="M23 8.11364L78.7727 36.2727H79.2159V3.34091H92.8182V53.7273H79.1136L23 25.4659V8.11364ZM23 63.1278H92.8182V111.81H79.1136V80.0028H64.7955V109.321H51.0568V80.0028H36.7045V111.81H23V63.1278ZM92.8182 138.23L41.6818 153.844V154.423L92.8182 170.037V188.923L23 165.366V142.901L92.8182 119.344V138.23ZM23 196.44H92.8182V245.122H79.1136V213.315H64.7955V242.634H51.0568V213.315H36.7045V245.122H23V196.44ZM92.8182 315.111H23V300.793L63.2955 273.009V272.565H23V255.69H92.8182V270.213L52.5909 297.69V298.27H92.8182V315.111ZM79.1136 323.438H92.8182V382.449H79.1136V361.278H23V344.642H79.1136V323.438ZM92.8182 387.213V406.065L63.6023 420.827V421.44L92.8182 436.202V455.054L46.3182 429.52H23V412.747H46.3182L92.8182 387.213Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
