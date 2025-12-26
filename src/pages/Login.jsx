import bgImage from "../assets/background.png";

const Login = () => {
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
          </div>

          <button className="w-full mt-6 bg-yellow-500 text-white p-3 rounded-lg font-semibold hover:bg-yellow-600">
            Sign In
          </button>
        </div>
      </div>

    </div>
  );
};

export default Login;
