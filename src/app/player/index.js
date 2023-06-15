"use client";

import { useRef } from "react";

export default function Player({ source }) {
  const audioRef = useRef(null);

  return (
    <audio controls id="tts-audio" ref={audioRef} loop>
      <source src={source} type="audio/mpeg" />
    </audio>
  );
}
