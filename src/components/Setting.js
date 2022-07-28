import React, { useState, useEffect } from "react";

const Setting = () => {
  const [setting, setSetting] = useState([]);

  const settingData = setting.map((element) => (
    <div className="setting">
      <h4>{element.title}</h4>
      <p>{element.name}</p>
      <button>{element.button}</button>
    </div>
  ));

  useEffect(() => {
    fetch("http://localhost:3000/settings")
      .then((response) => response.json())
      .then((data) => setSetting(data));
  }, []);

  return (
    <div className="setting-container">
      <h2>General Account Settings</h2>
      {settingData}
    </div>
  );
};

export default Setting;
