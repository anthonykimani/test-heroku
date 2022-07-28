// import profilePic from "../images/profile.jpg";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, isDarkMode,handleOpenMenu }) => {
  return (
    <div
      className="navbar-container"
      style={
        isDarkMode
          ? { backgroundColor: "var(--bg-dark-color)",color:"white" }
          : { backgroundColor: "var(--bg-light-color" }
      }
    >
      <div className="logo-container">
        <img src={process.env.PUBLIC_URL + "/email.png"} alt="" />
        <h2
          style={
            isDarkMode
              ? { color: "var(--bg-light-color)" }
              : { color: "var(--bg-dark-color" }
          }
        >
          <Link
            to={"/"}
            className="link"
            style={{ textDecoration: 'none' ,
          color:'var(--brand-color)'}}
          >
            Jirani Connect
          </Link>
        </h2>
      </div>
      <div className="search-bar-container">
        <i className="bx bx-search bx-fw"></i>
        <input type="text" placeholder="Search for friends , posts" />
      </div>
      <div className="profile-container">
        <i
          class={isDarkMode ? "bx bx-sun bx-sm" : "bx bx-moon bx-sm"}
          onClick={darkMode}
          style={
            isDarkMode
              ? { color: "var(--bg-light-color)" }
              : { color: "var(--bg-dark-color" }
          }
        ></i>
        <img src={process.env.PUBLIC_URL + "/profile.jpg"} alt="" />
        <i className="bx bx-chevron-down bx-md" onClick={handleOpenMenu}></i>
      </div>
    </div>
  );
};

export default Navbar;
