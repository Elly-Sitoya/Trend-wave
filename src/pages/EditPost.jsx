import { useContext, useEffect, useState } from "react";
import { modules, formats, POST_CATEGORIES } from "../utils";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { UserContext } from "../context/userContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Uncategorized");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  });

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/posts/${id}`
        );
        setTitle(response.data.title);
        setDescription(response.data.description);
        setCategory(response.data.category);
      } catch (error) {
        console.log(error);
      }
    };
    getPost();
  }, []);

  const editPost = async (e) => {
    e.preventDefault();

    try {
      // const postData = new FormData();
      // postData.set("title", title);
      // postData.set("description", description);
      // postData.set("category", category);
      // postData.set("thumbnail", thumbnail);

      const postData = { title, category, description, thumbnail };

      const response = await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/posts/${id}`,
        postData,
        { withCredentials: true, headers: { Authorization: `Bearer ${token}` } }
      );

      navigate("/");
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <section className="create-post">
      <div className="container">
        <h2>Edit Post</h2>

        {error && <p className="form_error-message">{error}</p>}

        <form className="form create_post-form" onSubmit={editPost}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />

          <ReactQuill
            modules={modules}
            formats={formats}
            theme="snow"
            value={description}
            onChange={setDescription}
          />

          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {POST_CATEGORIES.map((cat) => {
              return <option key={cat}>{cat}</option>;
            })}
          </select>

          <input
            type="file"
            onChange={(e) => setThumbnail(e.target.files[0])}
            accept="png,jpg,jpeg"
          />

          <button type="submit" className="btn primary">
            Edit
          </button>
        </form>
      </div>
    </section>
  );
};
export default EditPost;
