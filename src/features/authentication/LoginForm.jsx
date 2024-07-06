import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useLogin from "./useLogin";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();
  function handleSubmit(e) {
    e.preventDefault();
    login(
      {
        email,
        password,
      },
      {
        onSettled: () => {
          setPassword("");
          setEmail("");
        },
      }
    );
  }
  return (
    <div className="md:flex lg:gap-20 md:gap-12 items-center md:justify-between">
      <img src="img/signup.png" alt="signup" className="md:w-[50%]" />
      <div className="m-6">
        <div>
          <h1 className="text-4xl py-3 font-semibold">Log in to Exclusive</h1>
          <p className="font-semibold">Enter your details below</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="py-4">
            <input
              type="text"
              placeholder="Email or Phone Number"
              name="email"
              id="email"
              className="w-[80%] py-4 border-b-2 outline-none"
              value={email}
              disabled={isLoading}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              name="passoword"
              id="password"
              autoComplete="password"
              value={password}
              disabled={isLoading}
              onChange={(e) => setPassword(e.target.value)}
              className="w-[80%] py-4 border-b-2 outline-none"
            />
          </div>

          <div className=" flex items-center space-x-4">
            <button className="bg-[#db4444] py-3 px-10 text-white font-semibold">
              Log In
            </button>
            <Link to="/signup" className="font-semibold text-[#db4444]">
              Forget Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
