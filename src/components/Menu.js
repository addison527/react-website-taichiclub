import Dropdown from './Dropdown';
import React, {useState} from "react";    

const Menu = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);
  const handleButtonClick = (e) => {
    e.preventDefault(); // Prevent default action
    setDropdown((prev) => !prev); // Toggle dropdown visibility
  };

  return (
    <li style={{ position: 'relative' }}>
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={handleButtonClick}
            style ={{textDecoration: 'none'}}
          >
            {items.title}
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default Menu;