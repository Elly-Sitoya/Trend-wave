import { useState } from "react";
import { DUMMY_POSTS } from "../utils";
import PostItem from "../components/PostItem";

const AuthorPosts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section className="posts">
      <div className="container posts_container">
        {posts.length > 0 ? (
          posts.map((post) => {
            const { id, thumbnail, category, title, desc, authorID } = post;
            return (
              <PostItem
                key={id}
                id={id}
                thumbnail={thumbnail}
                category={category}
                title={title}
                desc={desc}
                authorID={authorID}
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
export default AuthorPosts;
