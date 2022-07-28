import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Messaging from "../pages/Messaging";
import React, { useState } from "react";
import Friends from "../pages/Friends";
import Settings from "../pages/Settings";
import Trending from "../pages/Trending";

const App = () => {
  const [openMenu,setOpenMenu] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleOpenMenu = ()=>{
    setOpenMenu(!openMenu);
  }


  const handleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home isDarkMode={isDarkMode} darkMode={handleMode} handleOpenMenu={handleOpenMenu} isOpen={openMenu
            } />}
          />
          <Route
            path="/messages"
            element={
              <Messaging isDarkMode={isDarkMode} darkMode={handleMode} handleOpenMenu={handleOpenMenu} isOpen={openMenu
              } />
            }
          />
          <Route
            path="/friends"
            element={<Friends isDarkMode={isDarkMode} darkMode={handleMode} handleOpenMenu={handleOpenMenu} isOpen={openMenu
            } />}
          />
          <Route
            path="/settings"
            element={<Settings isDarkMode={isDarkMode} darkMode={handleMode} handleOpenMenu={handleOpenMenu} isOpen={openMenu
            } />}
          />
          <Route
            path="/trending"
            element={<Trending isDarkMode={isDarkMode} darkMode={handleMode} handleOpenMenu={handleOpenMenu} isOpen={openMenu
            } />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
