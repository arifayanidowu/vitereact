import "./App.css";
import useOS from "./hooks/useOS";

function App() {
  const { isIphone, isMobile, launchOnAndroidDevice, launchOnIosDevice } =
    useOS();

  console.log(isMobile);

  return (
    <div className="App">
      {isMobile && (
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {isIphone ? (
            <button
              onClick={launchOnIosDevice}
              style={{ backgroundColor: "pink" }}
            >
              iOS Device
            </button>
          ) : (
            <button onClick={launchOnAndroidDevice}>Android Device</button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
