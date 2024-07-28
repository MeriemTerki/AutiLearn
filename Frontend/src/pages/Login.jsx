/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useSnackbar } from "notistack";
import validationSchema from "../validationLoginSchema";
import { useFormik } from "formik";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        console.log(userCredential.user);
        navigate("/");
      } catch (error) {
        console.error("Error logging in:", error);
        if (error.code === "auth/invalid-credential") {
          setFieldError("email", "This email address is not registered");
          enqueueSnackbar(
            "This email address is not registered. Please sign-up."
          );
          navigate("/signup");
        } else {
          setFieldError("general", "An error occurred during login");
        }
      } finally {
        setSubmitting(false);
      }
    },
  });
  return (
    <div className="bg-customBgWhite w-full min-h-screen flex flex-col justify-center p-4">
      <div className="text-center text-black font-bold text-xl mt-4">
        Log into your account
      </div>
      <div className="text-center text-black text-md pt-4">
        You don't have an account?{" "}
        <Link to="/signup">
          <span className="text-customButton underline">Sign up</span>
        </Link>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="space-y-4 w-full md:w-2/4 md:mx-auto my-4 p-4"
      >
        <div className="mx-4">
          <label className=" text-black" htmlFor="email">
            E-mail Address
          </label>
          <input
            placeholder="E-mail Address"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="border rounded-sm bg-white border-customTextBlack px-4 py-2 w-full text-black-50"
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
          ) : null}
        </div>

        <div className="mx-4">
          <label className=" text-black">Password</label>
          <input
            placeholder="Password"
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="border rounded-sm bg-white border-customTextBlack px-4 py-2 w-full text-black-50"
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.password}
            </p>
          ) : null}
        </div>

        {formik.errors.general && (
          <p className="text-red-500 text-sm text-center mt-1">
            {formik.errors.general}
          </p>
        )}
        <div className="flex justify-center">
          <button
            type="submit"
            className="btn bg-customButton text-md text-customText border-0 w-2/4 md:w-1/4 hover:bg-customButtonDarker"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "Logging in..." : "Log in"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
