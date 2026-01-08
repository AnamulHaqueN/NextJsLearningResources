import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  console.log("dash");
  return (
    <div>
      <div className="mb-5">Dashboard Navbar</div>
      Dash layout
      {children}
    </div>
  );
};

export default layout;
