import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoaderContext } from "../contexts/loaderContext";
import { UserContext } from "../contexts/userContext";
import { callLoginApi } from "../apis/auth";
import TextInput from "../components/TextInput";
import { ERRORS, validateEmail, validatePassword } from "../utils/validations";

function Login() {
  // custom hooks
  const navigate = useNavigate();
  // contexts
  const { setLoading } = useContext(LoaderContext);
  const { userDetails, saveUserDetails } = useContext(UserContext);
  console.log(userDetails, " ---------userDetails");
  // states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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
    if (!validateEmail(email)) {
      setEmailError(ERRORS.invalid.email);
      return;
    }
    if (!validatePassword(password)) {
      setPasswordError(ERRORS.invalid.password);
      return;
    }
    handleLoginApiCall();
  };

  const handleLoginApiCall = () => {
    const loginApiPayload = {
      email,
      password,
    };
    setLoading(true);
    callLoginApi(loginApiPayload)
      .then((response) => {
        console.log(response, " ---------response");
        const user = { ...response?.data };
        saveUserDetails(user);
        setLoading(false);
        // Handle successful login
        navigate("/dashboard");
      })
      .catch((error) => {
        setLoading(false);
        // Handle login error
        console.error("Login error:", error);
      });
  };

  const handleSignUpRedirect = () => {
    navigate("/signup");
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
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
              Sign in
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <button
            onClick={handleSignUpRedirect}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign up now
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
