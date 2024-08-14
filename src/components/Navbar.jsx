import React from "react";

function Navbar() {
  return (
    <header className="bg-white dark:bg-[#1e293b] text-gray-900 dark:text-[#e2e8f0] p-6 sticky top-0 z-50">
      <nav className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-x-8 md:space-y-0">
          <a
            href="#overview"
            className="hover:text-blue-600 dark:hover:text-[#22d3ee] transition-colors duration-300"
          >
            OVERVIEW
          </a>
          <a
            href="#authentication"
            className="hover:text-blue-600 dark:hover:text-[#22d3ee] transition-colors duration-300"
          >
            AUTHENTICATION
          </a>
          <a
            href="#endpoints"
            className="hover:text-blue-600 dark:hover:text-[#22d3ee] transition-colors duration-300"
          >
            ENDPOINTS
          </a>
          <a
            href="#tutorial"
            className="hover:text-blue-600 dark:hover:text-[#22d3ee] transition-colors duration-300"
          >
            TUTORIAL
          </a>
          <a
            href="#code-examples"
            className="hover:text-blue-600 dark:hover:text-[#22d3ee] transition-colors duration-300"
          >
            CODE EXAMPLES
          </a>
          <a
            href="#pricing"
            className="hover:text-blue-600 dark:hover:text-[#22d3ee] transition-colors duration-300"
          >
            PRICING
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
