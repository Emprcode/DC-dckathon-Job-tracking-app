import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="childeren">{children}</div>
      {/* <footer className="bg-dark text-light text-center mt-3">
        &copy; All right reserved 2023 || Team Archer
      </footer>
    </div> */}
    </div>
  );
};

export default Layout;
