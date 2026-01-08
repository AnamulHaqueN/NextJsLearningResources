import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="mb-5">Root Navbar</div>
      {children}
    </div>
  );
};

export default layout;
