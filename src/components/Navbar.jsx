// //src/components/Navbar.jsx
// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//     useEffect(() => {
//       document.body.className = darkMode ? "dark" : "light";
//     }, [darkMode]);
//   return (
//     <nav className="bg-white shadow-md px-6 py-4 mb-4">
//       <div className="max-w-4xl mx-auto flex justify-between items-center">
//         <Link to="/" className="text-xl font-bold text-blue-600">
//           NASA APOD
//         </Link>
//         <div className="flex gap-4">
//           <Link to="/" className="text-gray-700 hover:text-blue-500">
//             Home
//           </Link>
//           <Link to="/favourites" className="text-gray-700 hover:text-blue-500">
//             Favourites
//           </Link>
//           <button onClick={() => setDarkMode(!darkMode)}>
//             {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <nav
      className={`shadow-md px-6 py-4 mb-4 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">
          NASA APOD
        </Link>
        <div className="flex gap-4 items-center">
          <Link
            to="/"
            className={`hover:text-blue-500 ${
              darkMode ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Home
          </Link>
          <Link
            to="/favourites"
            className={`hover:text-blue-500 ${
              darkMode ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Favourites
          </Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              position: "absolute",
              right: "1rem",
              padding: "0.5rem 1rem",
              border: "none",
              borderRadius: "20px",
              cursor: "pointer",
              backgroundColor: darkMode ? "#333" : "#f5f5f5",
              color: darkMode ? "#f5f5f5" : "#333",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease-in-out",
            }}
            aria-label={
              darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
            }
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
