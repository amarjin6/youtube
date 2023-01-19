import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Channel from "./components/Channel/Channel";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      {/* <Home /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/channel" element={<Channel />} />
      </Routes>
    </Router>
  );
}

export default App;
