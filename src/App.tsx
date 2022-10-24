import "./App.css";

function App() {
  const launchOnAndroidDevice = () => {
    const url =
      "intent://viteweb.netlify.app//#Intent;scheme=com.seamless_hrms;package=com.seamless_hrms;end";
    window.location.href = url;
  };

  const launchOnIosDevice = () => {
    const url = "org.reactjs.native.example.Seamless-HRMS://";
    window.location.href = url;
  };

  return (
    <div className="App">
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <button onClick={launchOnAndroidDevice}>Android Device</button>
        <button
          onClick={launchOnIosDevice}
          style={{ backgroundColor: "brown" }}
        >
          iOS Device
        </button>
      </div>
    </div>
  );
}

export default App;
