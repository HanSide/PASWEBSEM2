import React from "react";
import ItemImage from "./ItemImage";
import ItemBody from "./ItemBody";
import DeleteButton from "./DeleteButton";

const MenuItem = ({ id, judul, sinopsis, genre, author, status, sampul, onDeleteHandler }) => {
  return (
    <div className="komik-card">
      <ItemImage sampul={sampul} judul={judul} />
      <ItemBody judul={judul} author={author} genre={genre} sinopsis={sinopsis} status={status} />
      <DeleteButton id={id} onDelete={onDeleteHandler} />
    </div>
  );
};

export default MenuItem;
