import React from "react";
import Pricing from "../components/Pricing";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

function Api() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="bg-gray-100 dark:bg-[#0f172a] min-h-screen p-4">
        <Pricing />
      </div>
    </>
  );
}

export default Api;
