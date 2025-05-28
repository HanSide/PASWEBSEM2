import React from 'react';

class MenuInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      judul: '',
      sinopsis: '',
      genre: '',
      author: '',
      status: '',
      sampul: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAdd(this.state);
    this.setState({
      judul: '',
      sinopsis: '',
      genre: '',
      author: '',
      status: '',
      sampul: '',
    });
  }

  render() {
    return (
      <div className="form-box">
        <h2>Tambah Komik</h2>
        <form onSubmit={this.handleSubmit}>
          {Object.keys(this.state).map((field) => (
            <div key={field}>
              <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>

              {field === 'status' ? (
                <select
                  name="status"
                  value={this.state.status}
                  onChange={this.handleChange}
                  required
                  onInvalid={(e) => {
                    e.target.setCustomValidity('Status wajib dipilih!');
                  }}
                  onInput={(e) => e.target.setCustomValidity('')}
                >
                  <option value="">-- Pilih Status --</option>
                  <option value="Ongoing">Ongoing</option>
                  <option value="Completed">Completed</option>
                </select>
              ) : (
                <input
                  type="text"
                  name={field}
                  value={this.state[field]}
                  onChange={this.handleChange}
                  required
                  onInvalid={(e) => {
                    const name = e.target.name;
                    const label = name.charAt(0).toUpperCase() + name.slice(1);
                    e.target.setCustomValidity(`${label} wajib diisi!`);
                  }}
                  onInput={(e) => e.target.setCustomValidity('')}
                />
              )}
            </div>
          ))}

          <button type="submit">Tambah</button>
        </form>
      </div>
    );
  }
}

export default MenuInput;
