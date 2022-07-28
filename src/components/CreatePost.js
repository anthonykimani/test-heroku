// import profilePic from "..public/images/profile.jpg";
import React, { useState, useEffect } from "react";

const CreatePost = ({ addPost, isDarkMode }) => {
  const [createPost, setCreatePost] = useState({
    content: "",
  });

  const handleGetInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log({ ...createPost, [name]: value });
    setCreatePost({ ...createPost, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addPost(createPost);
  };

  return (
    <div
      className="createpost-container"
      style={
        isDarkMode
          ? { backgroundColor: "var(--bg-dark-color)" }
          : { backgroundColor: "var(--bg-light-color" }
      }
    >
      <img src={process.env.PUBLIC_URL + "/profile.jpg"} alt="" />
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          onChange={handleGetInput}
          placeholder="Whats on your mind?"
          name="content"
          value={createPost.content}
          style={
            isDarkMode
              ? { backgroundColor: "var(--bg-dark-color)", color: "white" }
              : { backgroundColor: "var(--bg-light-color" }
          }
        />
        <input type="submit" id="create-button" value="Post" />
      </form>
    </div>
  );
};

export default CreatePost;
