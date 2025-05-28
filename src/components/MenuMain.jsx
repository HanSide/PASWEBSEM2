import React, { useState } from "react";
import dataKomik from "../../utils/data";
import MenuInput from "./MenuInput";
import MenuList from "./MenuList";
import "./ItemCSS.css";

const MenuMain = () => {
  const [komikList, setKomikList] = useState(dataKomik());

  const addKomik = (komik) => {
    const newKomik = {
      ...komik,
      id: komikList.length + 1,
    };
    setKomikList([...komikList, newKomik]);
  };

  const deleteKomik = (id) => {
    const filtered = komikList.filter((komik) => komik.id !== id);
    setKomikList(filtered);
  };

  return (
    <div className="container">
      <MenuInput onAdd={addKomik} />
      <MenuList komikList={komikList} onDeleteHandler={deleteKomik} />
    </div>
  );
};

export default MenuMain;
