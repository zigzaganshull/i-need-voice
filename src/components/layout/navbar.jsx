import { Link, NavLink } from "react-router-dom";

import navigation from "../../data/navigation";

import "./navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <Link to="/" className="navbar__logo">
        I NEED
        <span>VOICE</span>
      </Link>

      <nav className="navbar__links">

        {navigation.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "navbar__link navbar__link--active"
                : "navbar__link"
            }
          >
            {item.label}
          </NavLink>
        ))}

      </nav>

      <Link
        to="/quote"
        className="navbar__quote"
      >
        <span>GET A QUOTE</span>
        <span>↗</span>
      </Link>

    </header>
  );
}

export default Navbar;