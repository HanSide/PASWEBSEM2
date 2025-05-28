import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ komikList, onDeleteHandler }) => {
  return (
    <div className="list-box">
      <h2>List Komik</h2>
      {komikList.map((komik) => (
        <MenuItem key={komik.id} {...komik} onDeleteHandler={onDeleteHandler} />
      ))}
    </div>
  );
};

export default MenuList;
