import React from "react";
import { navLinks } from "../../public/constants/index.js";

const Navbar = () => {
  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <p>Velvet Pour</p>
        </a>

        <ul>
          {navLinks.map((item) => (
            <li key={item.id}>
                <a href={`#${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
