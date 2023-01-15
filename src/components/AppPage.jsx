import React from "react";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import "../css/AppPage.css";

function AppPage() {
  return (
    <>
      <div className="app__page">
        {/* Sidebar */}
        <Sidebar />
        <RecommendedVideos />

        {/* Recommended video */}
      </div>
    </>
  );
}
export default AppPage;
