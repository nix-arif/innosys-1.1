import React, { useEffect, useState } from "react";

function Dashboard() {
  const [screenWidth, setScreenWidth] = useState(0);
  const [dashboardView, setDashboardView] = useState(false);
  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setScreenWidth(newWidth);
      if (newWidth < 1024) {
        setDashboardView(false);
      } else {
        setDashboardView(true);
      }
    };

    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);
  return dashboardView ? (
    <div>Dashboard</div>
  ) : (
    <div>Please View in larger screen size</div>
  );
}

export default Dashboard;
