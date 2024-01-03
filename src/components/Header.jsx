import { Link } from "react-router-dom";
import logo from "../images/logo_1.png";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [isNavShowing, setIsNavShowing] = useState(
    window.innerWidth > 800 ? true : false
  );

  const closeNavHandler = () => {
    if (window.innerWidth < 800) {
      setIsNavShowing(false);
    } else {
      setIsNavShowing(true);
    }
  };

  return (
    <nav>
      <div className="container nav-container">
        <Link to={"/"} className="nav_logo" onClick={closeNavHandler}>
          <img src={logo} alt="Navbar logo" />
        </Link>
        {isNavShowing && (
          <ul className="nav-menu" onClick={closeNavHandler}>
            <li>
              <Link to={"/profile/1234"}>Elly Sitoya</Link>
            </li>
            <li onClick={closeNavHandler}>
              <Link to={"/create"}>create post</Link>
            </li>
            <li>
              <Link to={"/authors"}>authors</Link>
            </li>
            <li>
              <Link to={"/logout"}>logout</Link>
            </li>
          </ul>
        )}
        <button
          className="nav_toggle-btn"
          onClick={(e) => setIsNavShowing(!isNavShowing)}
        >
          {isNavShowing ? <AiOutlineClose /> : <CiMenuBurger />}
        </button>
      </div>
    </nav>
  );
};
export default Header;
