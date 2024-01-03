import { useState } from "react";
import { modules, formats, POST_CATEGORIES } from "../utils";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Uncategorized");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  return (
    <section className="create-post">
      <div className="container">
        <h2>Edit Post</h2>

        <p className="form_error-message">This ia an error message</p>

        <form className="form create_post-form">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />

          {/* <ReactQuill modules={modules} formats={formats} theme="snow" /> */}

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
