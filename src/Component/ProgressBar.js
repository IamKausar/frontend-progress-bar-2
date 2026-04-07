import { useState, useEffect } from "react";

export const ProgressBar = (key) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
    }, 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="Outerbar" key={key}>
      <div
        className="Innerbar"
        style={{
          transform: `translateX(${progress - 100}%)`,
        }}
      ></div>
    </div>
  );
};
