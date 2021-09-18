import React from "react";
import { SidebarStyle } from "./components.style";
import PanaromaViewer from "./PanaromaViewer";
import Selector from "./Selector";

function Sidebar(props) {
  return (
    <SidebarStyle>
      <Selector />
    </SidebarStyle>
  );
}

export default Sidebar;
