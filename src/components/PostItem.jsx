import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

const PostItem = ({ id, thumbnail, category, title, desc, authorID }) => {
  const shortDescription =
    desc.length > 145 ? desc.substring(0, 145) + "..." : desc;
  return (
    <article className="post">
      <div className="post_thumbnail">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="post_content">
        <Link to={`/post/${id}`}>
          <h3>{title}</h3>
        </Link>
        <p>{shortDescription}</p>
        <div className="post_footer">
          <PostAuthor />
          <Link to={`/posts/categories/${category}`} className="btn category">
            {category}
          </Link>
        </div>
      </div>
    </article>
  );
};
export default PostItem;
