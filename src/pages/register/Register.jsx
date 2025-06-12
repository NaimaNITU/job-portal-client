import React, { useContext } from "react";
import Lottie from "lottie-react";
import lottieRegister from "../../assets/lotties/register.json";
import { AuthContext } from "../../context/authContext/AuthContext";

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);

    createUser(data.email, data.password)
      .then((result) => {
        console.log("result", result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  //here google sign up
  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="relative my-10 flex items-center justify-center bg-white px-4">
      <div className="max-w-lg w-full">
        <h4 className="text-blue-600 font-medium mb-2">Register</h4>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
          Start for free Today
        </h1>
        <p className="text-gray-500 mb-6 text-sm">
          Access to all features. No credit card required.
        </p>

        <button
          onClick={handleGoogleSignUp}
          className="btn w-full border text-gray-700 mb-4"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Sign up with Google
        </button>

        <div className="flex items-center gap-2 mb-6">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="text-sm text-gray-500">or continue with</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name *"
            className="input input-bordered w-full"
            name="name"
          />
          <input
            type="email"
            placeholder="Email *"
            className="input input-bordered w-full"
            name="email"
            required
          />
          <input
            type="text"
            placeholder="Username *"
            className="input input-bordered w-full"
            name="username"
          />
          <input
            type="password"
            placeholder="Password *"
            className="input input-bordered w-full"
            name="password"
            required
          />
          <input
            type="password"
            placeholder="Re-Password *"
            className="input input-bordered w-full"
            name="re-password"
          />

          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="checkbox checkbox-sm" />
            <span>
              Agree our terms and policy{" "}
              <a href="#" className="link ml-2">
                Learn more
              </a>
            </span>
          </div>

          <button className="btn w-full mt-2 bg-blue-900 text-white hover:bg-blue-800">
            Submit & Register
          </button>
        </form>
      </div>

      <div className="hidden md:block absolute right-5 top-1/2 transform -translate-y-1/2">
        <Lottie
          animationData={lottieRegister}
          loop={true}
          className="w-[180px] md:w-[250px] h-auto"
        />
      </div>
    </div>
  );
};

export default Register;
