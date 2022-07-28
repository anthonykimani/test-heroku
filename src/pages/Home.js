import Navbar from "../components/Navbar";
import Timeline from "../components/Timeline";
import Menu from "../components/Menu";

const Home = ({ isDarkMode, darkMode,isOpen,handleOpenMenu }) => {
  return (
    <div>
      <Navbar darkMode={darkMode} isDarkMode={isDarkMode} handleOpenMenu={handleOpenMenu} />
      <div className="home-container">
        <Menu isDarkMode={isDarkMode} isOpen={isOpen} />
        <Timeline isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default Home;
