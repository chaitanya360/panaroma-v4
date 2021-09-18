import React from "react";
import { data } from "../Configs/data";
import { SelectorStyle } from "./components.style";
import PanaromaViewer from "./PanaromaViewer";
import SelectorItem from "./SelectorItem";

function Selector(props) {
  return (
    <SelectorStyle>
      {data.map((img) => (
        <PanaromaViewer src={img.id} />
      ))}
    </SelectorStyle>
  );
}

export default Selector;
