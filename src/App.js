import "./styles.css";
import { useState } from "react";
import { ProgressBar } from "./Component/ProgressBar";

export default function App() {
  const [pbList, setPbList] = useState([]);

  const addPB = () => {
    setPbList((prev) => [...prev, Date.now()]);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div>
        <button onClick={addPB}>Add</button>
        {pbList.map((pb) => (
          <ProgressBar key={pb} />
        ))}
      </div>
    </div>
  );
}
