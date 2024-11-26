import React, { useState } from "react";
import logo from "../assets/logo.png";
import { login, signup } from "../firebase";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async (event) => {
    event.preventDefault();
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
  };

  return (
    <div className="h-screen bg-[linear-gradient(to_right,#0000007e,#0000007e),url('/background_banner.jpg')]">
      <img className="w-[150px]" src={logo} alt="" />
      <div className="w-full max-w-[450px] bg-[rgba(0,0,0,0.75)] rounded p-14 m-auto">
        <h1 className="text-3xl font-medium mb-5">{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Your Name"
              className="w-full h-12 bg-[#333] text-white my-3 mx-0 border-0 outline-0 rounded text-base font-medium pl-5"
            />
          ) : (
            <></>
          )}

          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email"
            className="w-full h-12 bg-[#333] text-white my-3 mx-0 border-0 outline-0 rounded text-base font-medium pl-5"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
            className="w-full h-12 bg-[#333] text-white my-3 mx-0 border-0 outline-0 rounded text-base font-medium pl-5"
          />
          <button
            className="w-full border-0 outline-0 p-4 bg-[#e50914] text-white rounded text-base mt-5  cursor-pointer"
            onClick={user_auth}
            type="submit"
          >
            {signState}
          </button>
          <div className="flex items-center justify-between text-[#b3b3b3] text-xs mt-4">
            <div className="flex  items-center gap-1">
              <input
                className="w-[18px] h-[18px]"
                type="checkbox"
                id="remember"
              />
              <label className="cursor-pointer" htmlFor="remember">
                Remember Me
              </label>
            </div>
            <p className="cursor-pointer">Need Help?</p>
          </div>
        </form>
        <div className="mt-5 text-[#737373]">
          {signState === "Sign In" ? (
            <p>
              New to Netxlix?{" "}
              <span
                className="ml-1.5 text-[#fff] font-medium cursor-pointer"
                onClick={() => {
                  setSignState("Sign Up");
                }}
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have account?{" "}
              <span
                className="ml-1.5 text-[#fff] font-medium cursor-pointer"
                onClick={() => {
                  setSignState("Sign In");
                }}
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
