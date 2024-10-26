import React, { useEffect, useRef } from "react";

const TransactionDashboard = () => {
  const tableauRef = useRef(null);

  useEffect(() => {
    const divElement = tableauRef.current;
    const vizElement = divElement.getElementsByTagName("object")[0];

    // Set fixed dimensions for consistency
    const containerWidth = "1200px"; // Match CustomerDashboard
    const containerHeight = "950px"; // Increased height to avoid overflow

    vizElement.style.width = containerWidth;
    vizElement.style.height = containerHeight;

    const scriptElement = document.createElement("script");
    scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }, []);

  return (
    <div className="flex justify-center py-0 px-2">
      {/* Remove vertical padding */}
      <div
        className="tableauPlaceholder max-w-[100%] overflow-hidden relative"
        id="viz1729862139393"
        ref={tableauRef}
      >
        <noscript>
          <a href="#">
            <img
              alt="TRANSACTION OVERVIEW"
              src="https://public.tableau.com/static/images/Cu/CustomerSegmentationDashboard_17298455063060/TransactionOverview/1_rss.png"
              className="border-none"
            />
          </a>
        </noscript>
        <object className="tableauViz hidden">
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
          <param name="embed_code_version" value="3" />
          <param name="site_root" value="" />
          <param
            name="name"
            value="CustomerSegmentationDashboard_17298455063060/TransactionOverview"
          />
          <param name="tabs" value="no" />
          <param name="toolbar" value="yes" />
          <param
            name="static_image"
            value="https://public.tableau.com/static/images/Cu/CustomerSegmentationDashboard_17298455063060/TransactionOverview/1.png"
          />
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
          <param name="language" value="en-US" />
          <param name="filter" value="publish=yes" />
        </object>
      </div>
    </div>
  );
};

export default TransactionDashboard;
