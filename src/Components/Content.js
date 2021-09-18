import React from "react";
import { ContentStyle } from "./components.style";

function Content(props) {
  return (
    <ContentStyle>
      <img
        src={`${process.env.PUBLIC_URL}/images/floor-plan.png`}
        alt="floor-plan"
      />
    </ContentStyle>
  );
}

export default Content;
