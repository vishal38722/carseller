import React, { useState } from 'react';

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-primary" style={{ padding: '15px', borderRadius: '15px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        <form className="form-inline">
          <div style={{ display: "flex" }}>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{ borderRadius: '15px' }} onChange={handleSearchChange} value={searchQuery} />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" style={{ borderRadius: '15px' }}>Search</button>
          </div>
        </form>
      </nav>
    </div>
  );
}

export default Navbar;
