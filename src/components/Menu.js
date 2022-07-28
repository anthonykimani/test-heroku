import { Link } from "react-router-dom";

const Menu = ({ isDarkMode, isOpen }) => {
  return (
    <div
      className="menu-container"
      style={isOpen ? { display: "block" } : { display: "none" }}
    >
      <ul
        style={
          isDarkMode
            ? { backgroundColor: "var(--bg-dark-color)" }
            : { backgroundColor: "var(--bg-light-color" }
        }
      >
        <li>
          <Link
            to={"/"}
            className="link"
            style={
              isDarkMode
                ? { color: "var(--bg-light-color)" }
                : { color: "var(--bg-dark-color" }
            }
          >
            <i class="bx bx-home bx-sm"></i>Home
          </Link>
        </li>
        <li>
          <Link
            to={"/trending"}
            className="link"
            style={
              isDarkMode
                ? { color: "var(--bg-light-color)" }
                : { color: "var(--bg-dark-color" }
            }
          >
            <i class="bx bx-trending-up bx-sm"></i>Trending
          </Link>
        </li>
        <li>
          <Link
            to={"/messages"}
            className="link"
            style={
              isDarkMode
                ? { color: "var(--bg-light-color)" }
                : { color: "var(--bg-dark-color" }
            }
          >
            <i class="bx bx-message-dots bx-sm"></i>Messages
          </Link>
        </li>
        <li>
          <Link
            to={"/friends"}
            className="link"
            style={
              isDarkMode
                ? { color: "var(--bg-light-color)" }
                : { color: "var(--bg-dark-color" }
            }
          >
            <i class="bx bx-group bx-sm"></i>Friends
          </Link>
        </li>
        <li>
          <Link
            to={"/settings"}
            className="link"
            style={
              isDarkMode
                ? { color: "var(--bg-light-color)" }
                : { color: "var(--bg-dark-color" }
            }
          >
            <i class="bx bx-cog bx-sm"></i>Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
