import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="mb-5">Dashboard Navbar</div>
      {children}
    </div>
  );
};

export default layout;
