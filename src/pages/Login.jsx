import React from "react";
import { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import bgImage from "../assets/background.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      // ✅ SAVE TOKEN
      localStorage.setItem("token", data.token);

      // redirect after login
      navigate("/rooms");

    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-screen min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-100 font-sans">

      {/* LEFT IMAGE */}
      <div
        className="relative bg-cover bg-center hidden md:block min-h-screen"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/40 p-16 flex flex-col justify-center text-white">
          <h2 className="text-lg font-bold tracking-wide">LUXE STAY</h2>

          <h1 className="text-4xl font-extrabold mt-4">Elevate Your</h1>
          <h1 className="text-4xl font-extrabold text-yellow-400 mt-2">
            Hospitality experience
          </h1>

          <p className="mt-6 max-w-md text-gray-200">
            Streamline operations, enhance guest satisfaction, and drive
            revenue with our premium hotel management platform.
          </p>
        </div>
      </div>

      {/* RIGHT LOGIN */}
      <div className="flex items-center justify-center p-10 min-h-screen">
        <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
          <h2 className="text-center text-xl font-bold">WELCOME BACK</h2>

          <p className="text-center text-sm text-gray-600 mt-2">
            Sign in to access your hotel dashboard
          </p>

          {/* EMAIL */}
            <div className="mt-8">
              <label className="text-sm font-semibold">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 border rounded-lg p-3 focus:ring focus:ring-yellow-300"
              />
            </div>

          {/* PASSWORD */}
            <div className="mt-5">
              <label className="text-sm font-semibold">Password</label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mt-2 border rounded-lg p-3 pr-12 focus:ring focus:ring-yellow-300"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>
            </div>

                   {/* BUTTON */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full mt-6 bg-yellow-500 text-white p-3 rounded-lg font-semibold hover:bg-yellow-600 transition disabled:opacity-50"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

        </div> {/* card */}
      </div> {/* right login */}
    </div> 
  );
};


export default Login;
