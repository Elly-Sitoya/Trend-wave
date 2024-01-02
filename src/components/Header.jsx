import { Link } from "react-router-dom";
import logo from "../images/logo_1.png";
// import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    <nav>
      <div className="container nav-container">
        <Link to={"/"} className="nav_logo">
          <img src={logo} alt="Navbar logo" />
        </Link>
        <ul className="nav-menu">
          <li>
            <Link to={"/profile/1234"}>Elly Sitoya</Link>
          </li>
          <li>
            <Link to={"/create"}>create post</Link>
          </li>
          <li>
            <Link to={"/authors"}>authors</Link>
          </li>
          <li>
            <Link to={"/logout"}>logout</Link>
          </li>
        </ul>
        <button className="nav_toggle-btn">
          {/* <CiMenuBurger /> */}
          <AiOutlineClose />
        </button>
      </div>
    </nav>
  );
};
export default Header;
