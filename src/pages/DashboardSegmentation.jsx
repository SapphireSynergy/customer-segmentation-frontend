import React from "react";
import Header from "../components/Header";
import { useEffect } from "react";

const DashboardSegmentation = () => {
  useEffect(() => {
    const divElement = document.getElementById("viz1729689061477");
    const vizElement = divElement.getElementsByTagName("object")[0];
    vizElement.style.width = "1460px";
    vizElement.style.height = "1107px";

    const scriptElement = document.createElement("script");
    scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }, []); // Empty dependency array ensures this runs once after the component mounts
  return (
    <div>
      <Header />
      <div
        className="tableauPlaceholder"
        id="viz1729689061477"
        style={{ position: "relative" }}
      >
        <noscript>
          <a href="#">
            <img
              alt="Month View"
              src="https://public.tableau.com/static/images/Ho/HospitalEmergencyRoomDashboardRWFD_17167891278500/MonthView/1_rss.png"
              style={{ border: "none" }}
            />
          </a>
        </noscript>
        <object className="tableauViz" style={{ display: "none" }}>
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
          <param name="embed_code_version" value="3" />
          <param name="site_root" value="" />
          <param
            name="name"
            value="HospitalEmergencyRoomDashboardRWFD_17167891278500/MonthView"
          />
          <param name="tabs" value="no" />
          <param name="toolbar" value="yes" />
          <param
            name="static_image"
            value="https://public.tableau.com/static/images/Ho/HospitalEmergencyRoomDashboardRWFD_17167891278500/MonthView/1.png"
          />
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
          <param name="language" value="en-US" />
        </object>
      </div>
    </div>
  );
};

export default DashboardSegmentation;
