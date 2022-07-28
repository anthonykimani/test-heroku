// import profilePic from "../images/profile.jpg";

const Message = ({ message }) => {
  return (
    <div className="message">
      <img src={process.env.PUBLIC_URL + "/profile.jpg"} alt="" />
      <div className="message-text">
        <h4>{message.name}</h4>
        <p>{message.message}</p>
      </div>
      <div className="message-expand">
        <i className="bx bx-chevron-down"></i>
      </div>
    </div>
  );
};

export default Message;
