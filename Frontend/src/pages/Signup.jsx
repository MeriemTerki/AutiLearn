/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useSnackbar } from "notistack";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = () => {
    const newErrors = {};
    if (!validateEmail()) {
      newErrors.email = "Invalid email address";
    }
    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }
    if (!/[A-Z]/.test(password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter";
    }
    if (!/[a-z]/.test(password)) {
      newErrors.password =
        "Password must contain at least one lowercase letter";
    }
    if (!/[0-9]/.test(password)) {
      newErrors.password = "Password must contain at least one digit";
    }
    if (!/[!@#$%^&*]/.test(password)) {
      newErrors.password =
        "Password must contain at least one special character";
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
  };
  const handleSignUp = async () => {
    const data = {
      username,
      email,
      dateOfBirth,
      country,
      password,
      confirmPassword,
    };
    setIsLoading(true);
    console.log(data);
    validatePassword();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (error.code === "auth/email-already-in-use") {
          setErrors({ email: "This email address is already in use" });
          enqueueSnackbar(
            "This email address is already in use. Please Login."
          );
          navigate("/login");
        } else {
          console.error("Error signing up:", error);
          setErrors({ general: "An error occurred during sign-up" });
        }
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div className="bg-customBgWhite w-full min-h-screen flex flex-col justify-center p-4">
      <div className="text-center text-black font-bold text-xl mt-4">
        Create an account
      </div>
      <div className="text-center text-black text-md pt-4">
        You do have an account?{" "}
        <Link to="/login">
          <span className="text-customButton underline">Sign in</span>
        </Link>
      </div>
      <div className="space-y-4 w-full md:w-2/4  md:mx-auto my-4 p-4">
        <div className="mx-4">
          <label className=" text-black">Name</label>
          <input
            placeholder="Name"
            required
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded-sm bg-white border-customTextBlack px-4 py-2 w-full text-black-50"
          />
        </div>
        <div className="mx-4">
          <label className=" text-black" htmlFor="email">
            E-mail Address
          </label>
          <input
            placeholder="E-mail Address"
            id="email"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-sm bg-white border-customTextBlack px-4 py-2 w-full text-black-50"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mx-4">
          <label className=" text-black">Date of birth</label>
          <input
            placeholder="Date of birth"
            required
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="border rounded-sm bg-white border-customTextBlack px-4 py-2 w-full text-black-50"
          />
        </div>
        <div className="mx-4">
          <label className=" text-black">Country</label>
          <input
            placeholder="Country"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="border rounded-sm bg-white border-customTextBlack px-4 py-2 w-full text-black-50"
          />
        </div>
        <div className="mx-4">
          <label className=" text-black" htmlFor="password">
            Password
          </label>
          <input
            placeholder="Password"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-sm bg-white border-customTextBlack px-4 py-2 w-full text-black-50"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>
        <div className="mx-4">
          <label className=" text-black" htmlFor="confirmPassword">
            Confirm password
          </label>
          <input
            placeholder="Confirm password"
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border rounded-sm bg-white border-customTextBlack px-4 py-2 w-full text-black-50"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>
        {errors.general && (
          <p className="text-red-500 text-sm text-center mt-1">
            {errors.general}
          </p>
        )}
      </div>

      <button
        className="btn bg-customButton text-md text-customText border-0 w-2/4 md:w-1/4 hover:bg-customButtonDarker mx-auto"
        onClick={handleSignUp}
      >
        Create account
      </button>
    </div>
  );
};

export default Signup;
