import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const launchOnAndroidDevice = () => {
    const url =
      "intent://vitereact.netlify.com/#Intent;scheme=com.seamless_hrms;package=com.seamless_hrms;end";
    window.location.href = url;
  };

  const launchOnIosDevice = () => {
    const url = "com.seamless_hrms://";
    window.location.href = url;
  };

  return (
    <div className="App">
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <button onClick={launchOnAndroidDevice}>Android Device</button>
        <button onClick={launchOnIosDevice}>iOS Device</button>
      </div>
    </div>
  );
}

export default App;
