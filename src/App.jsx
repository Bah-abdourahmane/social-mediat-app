import "./App.css";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Home />
      {/* <Profile /> */}
      {/* <Auth /> */}
      <div className="custom__blur1"></div>
      <div className="custom__blur2"></div>
    </div>
  );
}

export default App;
