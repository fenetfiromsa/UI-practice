import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-600">MyBrand</h1>
       <ul className="hidden md:flex items-center space-x-8">
          <li className="text-gray-700 hover:text-purple-600 transition font-semibold">Home</li>
          <li className="text-gray-700 hover:text-purple-600 transition font-semibold">About</li>
          <li className="text-gray-700 hover:text-purple-600 transition font-semibold">Products</li>
          <li className="text-gray-700 hover:text-purple-600 transition font-semibold">Sign Up</li>
          <li className="px-4 py-2 bg-gradient-to-r from-teal-300 to-purple-400 hover:shadow-lg transform hover:-translate-y-0.5 active:scale-95 font-semibold  text-white rounded-lg hover:bg-purple-700 transition cursor-pointer">
            Login
          </li>
        </ul>

        
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-gray-700"></span>
            <span className="block w-6 h-0.5 bg-gray-700"></span>
            <span className="block w-6 h-0.5 bg-gray-700"></span>
          </div>
        </button>
      </div>

      
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4">
          <p className="text-gray-700 hover:text-purple-600 transition">Home</p>
          <p className="text-gray-700 hover:text-purple-600 transition">About</p>
          <p className="text-gray-700 hover:text-purple-600 transition">Products</p>
          <p className="text-gray-700 hover:text-purple-600 transition">Sign Up</p>
          <p className="px-4 py-2 bg-gradient-to-r from-teal-300 to-purple-400 text-white text-white rounded-lg hover:bg-purple-700 transition cursor-pointer">
            Login
          </p>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
