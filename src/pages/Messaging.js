import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Texts from "../components/Texts";

const Messaging = ({ isDarkMode, darkMode,isOpen,handleOpenMenu }) => {
  return (
    <div className="message-page-container">
      <Navbar darkMode={darkMode} isDarkMode={isDarkMode} handleOpenMenu={handleOpenMenu} />
      <div className="message-page-section">
      <Menu isDarkMode={isDarkMode} isOpen={isOpen} />
        <Texts isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default Messaging;
