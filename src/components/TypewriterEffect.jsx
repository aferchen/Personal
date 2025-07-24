import React, { useEffect, useState, useRef } from "react";

export default function TypewriterName() {
  const nameText = "Alec Ferchen";
  const typingDelay = 200;
  const pauseDuration = 6000;

  const [text, setText] = useState("");
  const indexRef = useRef(0);
  const timerRef = useRef(null);

  const startTyping = () => {
    setText("");
    indexRef.current = 0;

    timerRef.current = setInterval(() => {
      const i = indexRef.current;
      if (i < nameText.length) {
        setText((prev) => prev + nameText[i]);
        indexRef.current += 1;
      } else {
        clearInterval(timerRef.current);
        // Restart after a pause
        setTimeout(startTyping, pauseDuration);
      }
    }, typingDelay);
  };

  useEffect(() => {
    startTyping();
    return () => clearInterval(timerRef.current); // Cleanup on unmount
  }, []);

  return (
    <h2 className="text-5xl md:text-6xl font-bold font-sans mb-4">
      <span className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 bg-clip-text text-transparent">
        {text}
      </span>
      <span className="text-indigo-600 animate-pulse ml-1">|</span>
    </h2>
  );
}