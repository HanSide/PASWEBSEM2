import React, { useState } from "react";

const MenuInput = ({ onAdd }) => {
  const [form, setForm] = useState({
    judul: "",
    sinopsis: "",
    genre: "",
    author: "",
    status: "",
    sampul: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({
      judul: "",
      sinopsis: "",
      genre: "",
      author: "",
      status: "",
      sampul: "",
    });
  };

  return (
    <div className="form-box">
      <h2>Tambah Komik</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(form).map((field) => (
          <div key={field}>
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              type="text"
              name={field}
              value={form[field]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit">Tambah</button>
      </form>
    </div>
  );
};

export default MenuInput;
