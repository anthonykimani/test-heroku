// import blackModel from "../images/close-up-model-wearing-make-up.jpg";
// import effielTower from "../images/close-up-picnic-near-eiffel-tower.jpg";
// import summer from "../images/summer-time-beach-night.jpg";
// import blackLady from "../images/young-woman-wearing-orange-dress-with-turban-ethnic-jewelry.jpg";
import React, { useState, useEffect } from "react";

const Posts = ({ posts, isDarkMode }) => {
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState("");
  const [postComment,setPostComment] = useState([])
  const [liked, setLiked] = useState(false);
  const [expand,setExpand] = useState(false);


  const altText = posts.alt

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleAddcomment = (event) => {
    console.log({ [event.target.name]: event.target.value });
    setNewComment({ [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setComments(newComment);
    console.log(comments);
    fetch("http://localhost:3000/comments",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
  };

  useEffect(()=>{
    fetch("http://localhost:3000/comments")
    .then((response)=>response.json())
    .then((data)=>setPostComment(data))
  },[comments])

  const postedComment = postComment.map((element,index)=>(
    <div className="post-user-comments">
      <i class="bx bxs-user-circle bx-md"></i>
      <h3>{element.comment}</h3>
    </div>
  ))

  const handleExpand = ()=>{
    setExpand(!expand);
  }

  return (
    <div
      className="posts-container"
      style={
        isDarkMode
          ? { backgroundColor: "var(--bg-dark-color)", color: "white" }
          : { backgroundColor: "var(--bg-light-color" }
      }
    >
      <div className="post-header">
        <div className="post-header-profile">
          <img src={process.env.PUBLIC_URL + posts.profile} alt={altText} />
          <div>
            <h3>{posts.name}</h3>
            <div>
              <h4>{posts.location} ,</h4>
              <p>{posts.time}</p>
            </div>
          </div>
        </div>
        <div className="post-header-text">
          <i className="bx bx-dots-horizontal-rounded bx-sm"></i>
        </div>
      </div>
      <div className="post-image">
        <img src={process.env.PUBLIC_URL + posts.image} alt={altText} />
      </div>
      <div className="post-icons">
        <div className="post-icons-left">
          <i
            className={liked ? "bx bxs-heart bx-md" : "bx bx-heart bx-md"}
            onClick={handleLike}
            id={liked ? "like" : ""}
          ></i>
          <i className="bx bx-message-square-dots bx-md"></i>
          <i className="bx bx-share-alt bx-md"></i>
        </div>
        <div className="post-icons-right">
          <i className={expand?"bx bx-chevron-up bx-md":"bx bx-chevron-down bx-md"} onClick={handleExpand} ></i>
        </div>
      </div>
      <div className="post-icons-paragraph-text" style={expand?{display:"flex"}:{display:"none"}} >
        <div className="post-icons-likes">
          <div className="post-likes-img">
            <img src={process.env.PUBLIC_URL + posts.image} alt={altText} />
            <img src={process.env.PUBLIC_URL + posts.image} alt={altText} />
            <img src={process.env.PUBLIC_URL + posts.image} alt={altText} />
          </div>
          <div className="post-likes-text">
            <p>{posts.likes} Likes</p>
          </div>
        </div>
        <div className="post-comments-container" style={
        isDarkMode
          ? { backgroundColor: "var(--bg-dark-color)",color:"var(--bg-light-color)" }
          : { backgroundColor: "var(--bg-light-color",color:"var(--bg-dark-color)" }
      }>
          <div className="post-comments" style={
        isDarkMode
          ? { backgroundColor: "var(--bg-dark-color)",color:"var(--bg-light-color)" }
          : { backgroundColor: "var(--bg-grey-color",color:"var(--bg-dark-color)" }
      }>
            {posts.commentList.map((element, index) => (
              <div className="posted-user-comments">
                <i class="bx bxs-user-circle bx-md"></i>
                <h3>{element.comment}</h3>
              </div>
              ))}
              {postedComment}
          </div>
          <div className="post-add-comments">
            <form onSubmit={handleSubmit} style={
        isDarkMode
          ? { backgroundColor: "var(--bg-dark-color)",color:"var(--bg-light-color)" }
          : { backgroundColor: "var(--bg-light-color",color:"var(--bg-dark-color)" }
      }>
              <input
                type="text"
                className="comment"
                style={
                  isDarkMode
                    ? { backgroundColor: "var(--bg-dark-color)",color:"var(--bg-light-color)" }
                    : { backgroundColor: "var(--bg-light-color",color:"var(--bg-dark-color)" }
                }
                placeholder="Add comment"
                name="comment"
                onChange={handleAddcomment}
              />
              <input type="submit" value="Comment" className="comment-button" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
