import React, { useState, useContext } from "react";
import { LoaderContext } from "../contexts/loaderContext";
import { useNavigate } from "react-router-dom";
import TextInput from "../components/TextInput";
import { callSignupApi } from "../apis/auth";
import {
  ERRORS,
  validateEmail,
  validatePassword,
  validateName,
} from "../utils/validations";

function Signup() {
  const navigate = useNavigate();
  const { setLoading } = useContext(LoaderContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNameBlur = () => {
    if (!validateName(name)) setNameError(ERRORS.invalid.name);
    else setNameError("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailBlur = () => {
    if (!validateEmail(email)) setEmailError(ERRORS.invalid.email);
    else setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordBlur = () => {
    if (!validatePassword(password)) setPasswordError(ERRORS.invalid.password);
    else setPasswordError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateName(name)) {
      setNameError(ERRORS.invalid.name);
      return;
    }
    if (!validateEmail(email)) {
      setEmailError(ERRORS.invalid.email);
      return;
    }
    if (!validatePassword(password)) {
      setPasswordError(ERRORS.invalid.password);
      return;
    }
    handleSignupApiCall();
  };

  const handleSignupApiCall = () => {
    const signupApiPayload = {
      name,
      email,
      password,
    };
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    callSignupApi(signupApiPayload)
      .then((response) => {
        // Handle successful signup
        navigate("/login");
      })
      .catch((error) => {
        // Handle signup error
        console.error("Signup error:", error);
      });
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up for an account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          action="#"
          method="POST"
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <TextInput
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={handleNameChange}
            onBlur={handleNameBlur}
            error={nameError}
          />
          <TextInput
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            error={emailError}
          />
          <TextInput
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
            error={passwordError}
          />
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <button
              onClick={handleLoginRedirect}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Log in
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
