import { useState, useEffect } from "react";
import PostItem from "../components/PostItem";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import axios from "axios";
// import { DUMMY_POSTS } from "../utils";

const CategoryPost = () => {
  // const [posts, setPosts] = useState(DUMMY_POSTS);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/posts/categories/${category}`
        );

        setPosts(response?.data);
      } catch (error) {
        console.log(error);
      }

      setIsLoading(false);
    };
    fetchPosts();
  }, [category]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <section className="posts">
      <div className="container posts_container">
        {posts.length > 0 ? (
          posts.map((post) => {
            const {
              _id: id,
              thumbnail,
              category,
              title,
              description,
              creator,
              createdAt,
            } = post;
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
          })
        ) : (
          <h2 className="center">No post yet</h2>
        )}
      </div>
    </section>
  );
};
export default CategoryPost;
