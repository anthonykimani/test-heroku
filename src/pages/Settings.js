import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Setting from "../components/Setting";

const Settings = ({ isDarkMode, darkMode,isOpen,handleOpenMenu }) => {
  return (
    <div className="settings-container">
      <Navbar darkMode={darkMode} isDarkMode={isDarkMode} handleOpenMenu={handleOpenMenu} />
      <div className="settings-section">
        <Menu isDarkMode={isDarkMode} isOpen={isOpen}  />
        <Setting isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default Settings;
