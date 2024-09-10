import React from 'react';

const Dropdown = ({ submenus, dropdown }) => {
  const dropdownStyles = {
    display: dropdown ? 'block' : 'none',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    position: 'absolute',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    top: '100%', // Position dropdown below the button
    left: 0, // Align dropdown with the button
  };
  const menuItemStyles = {
    padding: '10px 20px',
    cursor: 'pointer',
    border: '1px solid #ccc',
  };
  const linkStyles = {
    textDecoration: "none",
    color: "#000",
  };

  return (
    <ul style={dropdownStyles}>
      {submenus.map((submenu, index) => (
        <li key={index} style = {menuItemStyles}>
          <a href={submenu.url}style = {linkStyles}>{submenu.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
