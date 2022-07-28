// import profilePic from '../images/profile.jpg'

const Friend = ({ isDarkMode,element,removeFriend }) => {
  return (
    <div className="friend-container">
      <div className="friend-header">
        <div className="friend-text">
        <img src={process.env.PUBLIC_URL + "/profile.jpg"} alt="" />
          <h4>{element.name}</h4>
        </div>
          <p>{element.mutuals} mutual friends</p>
        <div className="button-container">
          <button className="toggle-friend-button" onClick={()=>removeFriend(element.id)} >Remove Friend</button>
        </div>
      </div>
    </div>
  );
};

export default Friend;
