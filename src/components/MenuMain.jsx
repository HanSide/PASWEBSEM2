import React, { useState } from "react";
import dataKomik from "../../utils/data";
import MenuInput from "./MenuInput";
import MenuList from "./MenuList";
import "../components/ItemCSS.css";

const MenuMain = () => {
  const [komikList, setKomikList] = useState(dataKomik());

  const addKomik = (komik) => {
    const newKomik = {
      ...komik,
      id: komikList.length + 1,
    };
    setKomikList([...komikList, newKomik]);
  };

  return (
    <div className="container">
      <MenuInput onAdd={addKomik} />
      <MenuList komikList={komikList} />
    </div>
  );
};

export default MenuMain;
