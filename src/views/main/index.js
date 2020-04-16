import React from "react";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import Content from "../../components/layouts/contents/content";

const MainLayout = () => {
  return (
    <div>
      <Sidebar />
      <Content />
    </div>
  );
};

export default MainLayout;
