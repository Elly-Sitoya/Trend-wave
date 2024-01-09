import { useEffect, useState } from "react";
// import { DUMMY_POSTS } from "../utils";
import PostItem from "../components/PostItem";
import Loader from "../components/Loader";
import axios from "axios";
import { useParams } from "react-router-dom";

const AuthorPosts = () => {
  // const [posts, setPosts] = useState(DUMMY_POSTS);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/posts/users/${id}`
        );

        setPosts(response?.data);
      } catch (error) {
        console.log(error);
      }

      setIsLoading(false);
    };
    fetchPosts();
  });

  if (isLoading) {
    return <Loader />;
  }
  return (
    <section className="posts">
      <div className="container posts_container">
        {posts.length > 0 ? (
          posts.map(
            ({
              _id: id,
              thumbnail,
              category,
              title,
              description,
              creator,
              createdAt,
            }) => {
              // const {_id: id,   thumbnail, category,  description, creator, createdAt, } = post;
              return (
                <PostItem
                  key={id}
                  id={id}
                  thumbnail={thumbnail}
                  category={category}
                  title={title}
                  description={description}
                  authorID={creator}
                  createdAt={createdAt}
                />
              );
            }
          )
        ) : (
          <h2 className="center">No post yet</h2>
        )}
      </div>
    </section>
  );
};
export default AuthorPosts;
