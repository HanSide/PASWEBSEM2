import React from "react";

const MenuList = ({ komikList }) => {
  return (
    <div className="list-box">
      <h2>List Komik</h2>
      {komikList.map((komik) => (
        <div className="komik-card" key={komik.id}>
          <img src={komik.sampul} alt={komik.judul} />
          <div className="komik-info">
            <div className="judul-row">
              <h3>{komik.judul}</h3>
              <span className="author">{komik.author}</span>
            </div>
            <p className="meta">{komik.genre}</p>
            <p className="desc">{komik.sinopsis.slice(0, 100)}...</p>
            <div className="status">{komik.status}</div>
          </div>
          <div className="status-tag">UPDATED</div>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
