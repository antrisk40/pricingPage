import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/api">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Go to API Page
        </button>
      </Link>
    </div>
  );
}

export default Home;
