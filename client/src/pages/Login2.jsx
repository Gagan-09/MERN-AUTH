import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import Navbar2 from "../components/Navbar2";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "../App.css"

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const response = await axios.post("/login", { email, password });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        setData({ email: "", password: "" }); // Clear form data
        toast.success("Login successful");
        navigate("/dashboard"); // Redirect to dashboard
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      {/* <Navbar2 /> */}
      {/* <MyComponent /> */}
      <section
        className="vh-100 bg-image"
        style={{
          backgroundImage:
            "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
        }}
        // { <img src="./assets/gym.jpg" alt="" />}
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card-name-2" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-4">Login</h2>

                    <form onSubmit={loginUser}>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                          value={data.email}
                          onChange={(e) =>
                            setData({ ...data, email: e.target.value })
                          }
                        />
                        <label className="form-label" htmlFor="form3Example3cg">
                          Email
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                          value={data.password}
                          onChange={(e) =>
                            setData({ ...data, password: e.target.value })
                          }
                        />
                        <label className="form-label" htmlFor="form3Example4cg">
                          Password
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Login
                        </button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">
                        Don't have an account?{" "}
                        <a href="/register" className="fw-bold text-body">
                          <u>Register here</u>
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
