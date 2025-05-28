import React from "react";
import ItemImage from "./ItemImage";
import ItemBody from "./ItemBody";
import DeleteButton from "./DeleteButton";

const MenuItem = ({ id, judul, genre, sinopsis, status, author, sampul, onDeleteHandler }) => {
  return (
    <div className="komik-card">
      <ItemImage sampul={sampul} judul={judul} />
      <ItemBody judul={judul} genre = {genre} sinopsis={sinopsis} author={author} status={status} />
      <DeleteButton id={id} onDelete={onDeleteHandler} />
    </div>
  );
};

export default MenuItem;
