import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import "../App.css"


export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = data;
    try {
      if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }

      const response = await axios.post("/register", { name, email, password });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        setData({ name: "", email: "", password: "", confirmPassword: "" });
        toast.success("Registration successful, Please log in");
        navigate("/login");
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div>
      {/* <Navbar /> */}
      <section
        className="vh-100 bg-image"
        style={{
          backgroundImage:
            "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
          
        }}
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card-name" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-4">
                      Create an account
                    </h2>

                    <form onSubmit={registerUser}>
                      <div className="form-outline mb-3">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          value={data.name}
                          onChange={(e) =>
                            setData({ ...data, name: e.target.value })
                          }
                        />
                        <label className="form-label" htmlFor="form3Example1cg">
                          Your Name
                        </label>
                      </div>

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
                          Your Email
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

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                          value={data.confirmPassword}
                          onChange={(e) =>
                            setData({
                              ...data,
                              confirmPassword: e.target.value,
                            })
                          }
                        />
                        <label
                          className="form-label"
                          htmlFor="form3Example4cdg"
                        >
                          Repeat your password
                        </label>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3g"
                        >
                          I agree to all statements in{" "}
                          <a
                            href="#!"
                            className="text-body"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Terms of service
                          </a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Register
                        </button>
                      </div>

                      <p className="login-btn">
                        Have already an account?{" "}
                        <Link to="/login" className="fw-bold text-body">
                          <u>Login here</u>
                        </Link>
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
