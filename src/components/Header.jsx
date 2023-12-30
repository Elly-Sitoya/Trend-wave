import { Link } from "react-router-dom";
import logo from "../images/avatar4.jpg";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    <nav>
      <div className="container nav-container">
        <Link to={"/"}>
          <img src={logo} alt="navbar logo" />
        </Link>
        <ul className="nav-menu">
          <li>
            <Link to={"/profile"}>Ernest Achiever</Link>
            <Link to={"/create"}>create post</Link>
            <Link to={"/authors"}>authors</Link>
            <Link to={"/logout"}>logout</Link>
          </li>
        </ul>
        <button className="nav_toggle-btn">
          <CiMenuBurger />
        </button>
      </div>
    </nav>
  );
};
export default Header;
