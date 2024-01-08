import { useEffect, useState } from "react";
// import { AuthorsData } from "../utils";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import axios from "axios";

const Author = () => {
  // const [authors, setAuthors] = useState(AuthorsData);
  const [authors, setAuthors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAuthors = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/users`
        );

        setAuthors(response.data);
      } catch (error) {
        console.log(error);
      }

      setIsLoading(false);
    };
    getAuthors();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="authors">
      <div className="container authors_container">
        {authors.length > 0 ? (
          authors.map(({ _id: id, avatar, name, posts }) => {
            return (
              <Link key={id} to={`/posts/users/${id}`} className="author">
                <div className="author_avatar">
                  <img
                    src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${avatar}`}
                    alt=""
                  />
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
