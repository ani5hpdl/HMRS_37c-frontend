import bgImage from "../assets/background.png"

function Loginn() {
  return (
  <div>
    <h1 style={{ color: "red" }}>LOGIN COMPONENT LOADED</h1>
  </div>
);

  return (
    <div className="w-screen h-screen grid grid-cols-2 bg-gray-100 font-sans">
      
      {/* Left Side Image Section */}
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 p-16 flex flex-col justify-center text-white">
          <h2 className="text-lg font-bold tracking-wide">LUXE STAY</h2>

          <h1 className="text-4xl font-extrabold mt-4">Elevate Your</h1>
          <h1 className="text-4xl font-extrabold text-yellow-400 mt-2">
            Hospitality experience
          </h1>

          <p className="mt-6 max-w-md text-gray-200">
            Streamline operations, enhance guest satisfaction, and drive
            revenue with our premium hotel management platform.
          </p>

          <div className="flex gap-12 mt-10 text-yellow-300 font-semibold">
            <div>
              <h2 className="text-3xl">500+</h2>
              <p className="text-white text-sm">Hotels Worldwide</p>
            </div>
            <div>
              <h2 className="text-3xl">98%</h2>
              <p className="text-white text-sm">Satisfaction rate</p>
            </div>
            <div>
              <h2 className="text-3xl">24/7</h2>
              <p className="text-white text-sm">Premium Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Login Card */}
      <div className="flex items-center justify-center p-10">
        <div className="bg-white shadow-xl rounded-2xl p-10 w-3/4">
          <h2 className="text-center text-xl font-bold">WELCOME BACK</h2>

          <p className="text-center text-sm text-gray-600 mt-2">
            Sign in to access your hotel dashboard
          </p>

          <div className="mt-8">
            <label className="text-sm font-semibold">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-2 border rounded-lg p-3 focus:ring focus:ring-yellow-300"
            />
          </div>

          <div className="mt-5">
            <label className="text-sm font-semibold">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full mt-2 border rounded-lg p-3 focus:ring focus:ring-yellow-300"
            />
            <p className="text-right text-xs text-yellow-600 mt-1 cursor-pointer">
              Forgot Password?
            </p>
          </div>

          <button className="w-full mt-6 bg-yellow-500 text-white p-3 rounded-lg font-semibold hover:bg-yellow-600">
            Sign In
          </button>

          <p className="text-center text-sm mt-4">
            Don't have an account?
            <span className="text-yellow-600 cursor-pointer ml-1"> Sign Up</span>
          </p>

          <p className="text-center text-xs text-gray-500 mt-6">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>

    </div>
  );
}

export default Loginn;
