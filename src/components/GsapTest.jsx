import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GsapTest() {
  const boxRef = useRef();

  useEffect(() => {
    gsap.to(boxRef.current, {
      x: 200,
      rotation: 360,
      duration: 2,
      backgroundColor: "#ff3366",
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div
        ref={boxRef}
        className="w-24 h-24 bg-green-400 rounded-lg"
      ></div>
    </div>
  );
}
