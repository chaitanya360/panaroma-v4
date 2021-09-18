import React, { useContext } from "react";
import { SelectionContext } from "../Context/SelectionContext";
import { SelectorItemStyle } from "./components.style";

function SelectorItem({ img }) {
  const { selectedImageId, setSelectedImageId } = useContext(SelectionContext);
  return (
    <SelectorItemStyle
      onClick={() => setSelectedImageId(img.id)}
      style={{
        borderColor: img.id == selectedImageId ? "dodgerblue" : "transparent",
      }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/images/thumbnails/${img.id}.png`}
        alt={img.id}
      />
      <div
        className="image-title"
        style={{
          backgroundColor: img.id === selectedImageId ? "dodgerblue" : "white",
          color: img.id === selectedImageId ? "white" : "black",
        }}
      >
        {img.id}
      </div>
    </SelectorItemStyle>
  );
}

export default SelectorItem;
