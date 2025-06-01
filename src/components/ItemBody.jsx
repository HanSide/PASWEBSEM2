import React from "react";

const ItemBody = ({ judul, author, genre, sinopsis, status }) => {
  return (
    <div className="komik-info">
      <div className="judul-row">
        <h3>{judul}</h3>
        <span className="author">{author}</span>
      </div>
      <p className="meta">{genre}</p>
      <p className="desc">{sinopsis.slice(0, 150)}...</p>
      <div className="status">{status}</div>
    </div>
  );
};

export default ItemBody;
