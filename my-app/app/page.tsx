import React from "react";
import Hello from "../components/Hello";

const Home = () => {
  console.log("Home page loaded");
  return (
    <>
      <div className="text-3xl underline">Welcome to the next js app</div>
      <Hello />
    </>
  );
};

export default Home;
