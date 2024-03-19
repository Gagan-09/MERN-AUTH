import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import Register from "./pages/Register";
import Register2 from "./pages/Register2";
// import Login from "./pages/Login";
import Login2 from "./pages/Login2";
import Dashboard from "./pages/Dashboard";
// import MyComponent from "./pages/Map_api";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/userContext"; // Adjust the path if necessary
import Logout from "./pages/Logout";

axios.defaults.baseURL = "http://localhost:8000"; //connecting to server
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <UserContextProvider>
      <Navbar />
        <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
        <Routes>
          <Route element={<Login2 />} />
          <Route path="/register" element={<Register2 />} />
          <Route path="/login" element={<Login2 />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/logout" element={<Logout />} />
          {/* <MapContainer /> */}
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
