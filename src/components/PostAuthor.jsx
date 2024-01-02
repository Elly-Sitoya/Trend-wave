import { Link } from "react-router-dom";
import avatar from "../images/avatar3.jpg";

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/1234`} className="post_author">
      <div className="post_author-avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="post_author-details">
        <h5>By Elly Sitoya</h5>
        <small>Just Now</small>
      </div>
    </Link>
  );
};
export default PostAuthor;
