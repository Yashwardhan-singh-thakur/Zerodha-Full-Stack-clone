import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Snackbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import googleLogo from "../assets/google-logo.webp";
// import { useNavigate } from "react-router-dom";

import axios from "axios";
import Or from "../commonComponents/Or";
import FormError from "../commonComponents/FormError";

export default function AuthForm({ formType }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoadding, setIsLoadding] = useState(false);
  const [serverError, setServerError] = useState("");
  // const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      window.location.href = "http://localhost:5174/";
    }
  }, []);

  async function sendData(e) {
    try {
      setIsLoadding(true);
      const baseURL = import.meta.env.VITE_API_URL || "http://localhost:3000";
      let url = formType === "login" ? "login" : "signup";
      let response = await axios.post(`${baseURL}/${url}`, {
        username,
        email,
        password,
      });
      if (response.data.message) {
        setMessage(response.data.message);
        setOpen(true);
      }
      if (response.data.message && response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      setIsLoadding(false);
      window.location.href = "http://localhost:5174/";
    } catch (err) {
      setServerError(err.response.data.message);
      setIsLoadding(false);
    }
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100 mt-5 "
      style={{ backgroundColor: "#faf5ff" }}
    >
      <div
        className="bg-white text-center shadow-lg mx-2 px-4 py-4 mt-5"
        style={{
          width: "420px",
          borderRadius: "1rem",
        }}
      >
        <button
          type="button"
          className="btn w-100 d-flex align-items-center justify-content-center gap-2 mb-2 fw-medium"
          style={{ backgroundColor: "#e5e7eb", borderRadius: "999px" }}
        >
          <img
            src={googleLogo}
            alt="Google Logo"
            style={{ width: "32px", height: "32px" }}
          />
          {formType === "login" ? "Log in" : "Sign Up"} with Google
        </button>
        <Or />
        <form onSubmit={handleSubmit(sendData)}>
          <div className="text-start">
            {formType === "signup" && (
              <div className="mb-3">
                <label htmlFor="username" className="form-label fw-medium">
                  Username
                </label>
                <input
                  type="text"
                  {...register("username", {
                    required: "Please enter a username",
                    minLength: {
                      value: 3,
                      message: "Username must be at least 3 characters",
                    },
                    maxLength: {
                      value: 40,
                      message: "Username must be at most 40 characters",
                    },
                  })}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Eg: Username"
                  className={`form-control py-2 ${errors.username ? "is-invalid" : ""}`}
                  style={{ borderRadius: "999px" }}
                />
                {errors.username && (
                  <FormError
                    styles="small"
                    errorsMessage={errors.username.message}
                  />
                )}
              </div>
            )}
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-medium">
                Email
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Please use a valid email address",
                  maxLength: {
                    value: 40,
                    message: "Email must be at most 40 characters",
                  },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@gmail.com"
                className={`form-control py-2 ${errors.email ? "is-invalid" : ""}`}
                style={{ borderRadius: "999px" }}
              />
              {errors.email && (
                <FormError
                  styles="small"
                  errorsMessage={errors.email.message}
                />
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-medium">
                Password
              </label>
              <input
                type="password"
                value={password}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password must be at most 20 characters",
                  },
                })}
                onChange={(e) => setPassword(e.target.value)}
                className={`form-control py-2 ${errors.password ? "is-invalid" : ""}`}
                style={{ borderRadius: "999px" }}
              />
              {errors.password && (
                <FormError
                  styles="small"
                  errorsMessage={errors.password.message}
                />
              )}
              <p className="small mt-2 text-secondary">At least 8 characters</p>
            </div>
          </div>
          <button
            disabled={isLoadding}
            type="submit"
            className="btn text-white fw-semibold w-100 py-2 mt-2 mb-2"
            style={{
              backgroundColor: isLoadding ? "black" : "blue",
              borderRadius: "999px",
            }}
          >
            {formType === "login"
              ? isLoadding
                ? "Logging in..."
                : "Log in"
              : isLoadding
                ? "Signing up..."
                : "Sign up"}
          </button>
          <FormError styles="fs-6" errorsMessage={serverError} />
        </form>
        <Or />

        <p className="text-secondary">
          {formType === "login"
            ? "Don't have an account? "
            : "Already have an account?"}
          <Link
            to={formType === "login" ? "/signup" : "/login"}
            className="fw-semibold text-decoration-none ms-1"
          >
            {formType === "login" ? "Sign up" : "Log in"}
          </Link>
        </p>
      </div>
      <div>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          message={message}
          onClose={() => setOpen(false)}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </IconButton>
          }
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          ContentProps={{
            sx: {
              backgroundColor: "#e8f5e9", // Light green background
              color: "green", // Green text
              fontWeight: "bold", // Bold text
            },
          }}
        />
      </div>
    </div>
  );
}
