import React, { useContext } from "react";
import { SelectionContext } from "../Context/SelectionContext";
import { PanaromaViewerStyle } from "./components.style";

function PanaromaViewer({ src }) {
  return (
    <PanaromaViewerStyle>
      <a-scene embedded>
        <a-sky
          src={`${process.env.PUBLIC_URL}/images/${src}.jpg`}
          rotation="0 280 0"
          //   animation="property: rotation;loop: true; dur: 30000"
        ></a-sky>
      </a-scene>
    </PanaromaViewerStyle>
  );
}

export default PanaromaViewer;
