import "./App.css";
import useOS from "./hooks/useOS";

function App() {
  const { isIphone, launchOnAndroidDevice, launchOnIosDevice } = useOS();

  return (
    <div className="App">
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        {isIphone ? (
          <button
            onClick={launchOnIosDevice}
            style={{ backgroundColor: "cyan" }}
          >
            iOS Device
          </button>
        ) : (
          <button onClick={launchOnAndroidDevice}>Android Device</button>
        )}
      </div>
    </div>
  );
}

export default App;
