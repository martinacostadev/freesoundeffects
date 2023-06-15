"use client";

import { useRef } from "react";

export default function Player({ source, loop }) {
  const audioRef = useRef(null);

  return (
    <audio controls id="tts-audio" ref={audioRef} loop={loop}>
      <source src={source} type="audio/mpeg" />
    </audio>
  );
}
