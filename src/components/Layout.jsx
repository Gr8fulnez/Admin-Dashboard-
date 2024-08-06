import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
            {/* <div className="flex flex-row"> */}
      <div className="flex">
        <Sidebar />
        {/* <div className="w-full ml-16 md:ml-56"> */}
                  <div className="w-full ml-16 md:ml-60">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
