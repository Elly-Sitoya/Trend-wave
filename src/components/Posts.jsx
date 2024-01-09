import { useEffect, useState } from "react";
// import { DUMMY_POSTS } from "../utils";
import PostItem from "./PostItem";
import Loader from "./Loader";
import axios from "axios";

const Posts = () => {
  // const [posts, setPosts] = useState(DUMMY_POSTS);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/posts`
        );

        setPosts(response?.data?.posts);
        console.log(response);
      } catch (error) {
        console.log(error);
      }

      setIsLoading(false);
    };
    fetchPosts();
  }, []);

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
export default Posts;
