import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div
  style={{
    display: "flex",
    minHeight: "100vh",
    background: "#f3f4f6",
  }}
>
  {/* SIDEBAR */}
  <div
    style={{
      width: window.innerWidth <= 768 ? "80px" : "260px",
      minWidth: window.innerWidth <= 768 ? "80px" : "260px",
      position: "fixed",
      height: "100vh",
      left: 0,
      top: 0,
      zIndex: 1000,
    }}
  >
    <Sidebar />
  </div>

  {/* MAIN CONTENT */}
  <div
    style={{
      marginLeft:
        window.innerWidth <= 768 ? "80px" : "260px",

      width:
        window.innerWidth <= 768
          ? "calc(100% - 80px)"
          : "calc(100% - 260px)",

      padding:
        window.innerWidth <= 768
          ? "15px"
          : "35px",

      overflowX: "hidden",
    }}
  >
    <Outlet />
  </div>
</div>
  );
};

export default DashboardLayout;