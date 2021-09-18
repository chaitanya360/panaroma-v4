import React, { useContext, useState } from "react";
import Content from "../Components/Content";
import Sidebar from "../Components/Sidebar";
import { data } from "../Configs/data";
import { SelectionContext } from "../Context/SelectionContext";
import { HomeStyle } from "./home.style";

function Home(props) {
  const [selectedImageId, setSelectedImageId] = useState(data[0].id);
  return (
    <SelectionContext.Provider value={{ selectedImageId, setSelectedImageId }}>
      <HomeStyle>
        <Sidebar />
        <Content />
      </HomeStyle>
    </SelectionContext.Provider>
  );
}

export default Home;
