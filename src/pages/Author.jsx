import { useState } from "react";
import { AuthorsData } from "../utils";
import { Link } from "react-router-dom";

const Author = () => {
  const [authors, setAuthors] = useState(AuthorsData);
  console.log(authors);
  return (
    <section className="authors">
      <div className="container authors_container">
        {authors.length > 0 ? (
          authors.map(({ id, avatar, name, posts }) => {
            return (
              <Link key={id} to={`/posts/users/${id}`} className="author">
                <div className="author_avatar">
                  <img src={avatar} alt={`Image of ${name}`} />
                </div>
                <div className="author_info">
                  <h4>{name}</h4>
                  <p>{posts}</p>
                </div>
              </Link>
            );
          })
        ) : (
          <h2 className="center">No Authors Found</h2>
        )}
      </div>
    </section>
  );
};
export default Author;
