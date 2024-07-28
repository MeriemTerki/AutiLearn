import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useSnackbar } from "notistack";
import validationSchema from "../validationSignUpSchema";
import { useFormik } from "formik";
const Signup = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      dateOfBirth: "",
      country: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        console.log(userCredential.user);
        navigate("/");
      } catch (error) {
        console.error("Error signing up:", error);
        if (error.code === "auth/email-already-in-use") {
          formik.setFieldError("email", "This email address is already in use");
          enqueueSnackbar(
            "This email address is already in use. Please Login."
          );
          navigate("/login");
        } else {
          formik.setFieldError("general", "An error occurred during sign-up");
        }
      }
    },
  });
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
      <form
        onSubmit={formik.handleSubmit}
        className="space-y-4 w-full md:w-2/4 md:mx-auto my-4 p-4"
      >
        <div className="mx-4">
          <label className=" text-black">Name</label>
          <input
            placeholder="Name"
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            className="border rounded-sm bg-white border-customTextBlack px-4 py-2 w-full text-black-50"
          />
          {formik.touched.username && formik.errors.username ? (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.username}
            </p>
          ) : null}
        </div>
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
          <label className=" text-black">Date of birth</label>
          <input
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dateOfBirth}
            className="border rounded-sm bg-white border-customTextBlack px-4 py-2 w-full text-black-50"
          />
          {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.dateOfBirth}
            </p>
          ) : null}
        </div>
        <div className="mx-4">
          <label className=" text-black">Country</label>
          <input
            placeholder="Country"
            id="country"
            name="country"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.country}
            className="border rounded-sm bg-white border-customTextBlack px-4 py-2 w-full text-black-50"
          />
          {formik.touched.country && formik.errors.country ? (
            <p className="text-red-500 text-sm mt-1">{formik.errors.country}</p>
          ) : null}
        </div>
        <div className="mx-4">
          <label className=" text-black" htmlFor="password">
            Password
          </label>
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
        <div className="mx-4">
          <label className=" text-black" htmlFor="confirmPassword">
            Confirm password
          </label>
          <input
            placeholder="Confirm password"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            className="border rounded-sm bg-white border-customTextBlack px-4 py-2 w-full text-black-50"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.confirmPassword}
            </p>
          ) : null}
        </div>
        {formik.errors.general && (
          <p className="text-red-500 text-sm text-center mt-1">
            {formik.errors.general}
          </p>
        )}
        <div className="flex justify-center w-full">
          <button
            type="submit"
            className="btn bg-customButton text-md text-customText border-0  w-3/4 md:w-1/3  hover:bg-customButtonDarker"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "Creating account..." : "Create account"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
