import React, { use } from "react";
import Lottie from "lottie-react";
import lottieSignIn from "../../assets/lotties/signIn.json";
import { AuthContext } from "../../context/authContext/AuthContext";

const SignIn = () => {
  const { signInUser } = use(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);

    //now create user in firebase for registration or sign up
    signInUser(data.email, data.password)
      .then((result) => {
        console.log("successfully signed in", result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div className="relative my-10 flex items-center justify-center bg-white px-4">
      {/* Form + Lottie Grid */}
      <div className="max-w-lg w-full">
        {/* Left: Sign In Form */}
        <div>
          <h4 className="text-blue-600 font-medium mb-2">Welcome Back</h4>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
            Sign in to your account
          </h1>
          <p className="text-gray-500 mb-6 text-sm">
            Enter your credentials to access your account.
          </p>

          {/* Google Sign In */}
          <button className="btn w-full border text-gray-700 mb-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Sign in with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="text-sm text-gray-500">or continue with</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSignIn} className="space-y-4">
            <input
              type="email"
              placeholder="Email *"
              className="input input-bordered w-full"
              //   defaultValue="stevenjob@gmail.com"
              name="email"
            />
            <input
              type="password"
              placeholder="Password *"
              className="input input-bordered w-full"
              //   defaultValue="***********"
              name="password"
            />

            {/* Forgot Password + Remember */}
            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="checkbox checkbox-sm" />
                Remember me
              </label>
              <a href="#" className="link text-sm">
                Forgot password?
              </a>
            </div>

            {/* Submit */}
            <button className="btn w-full mt-2 bg-blue-900 text-white hover:bg-blue-800">
              Sign In
            </button>
          </form>
        </div>
      </div>

      {/* Right: Lottie Animation */}
      <div className="hidden md:block absolute right-5 top-1/2 transform -translate-y-1/2">
        <Lottie
          animationData={lottieSignIn}
          loop={true}
          className="w-[180px] md:w-[250px] h-auto"
        />
      </div>
    </div>
  );
};

export default SignIn;
