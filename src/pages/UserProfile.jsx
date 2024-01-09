import { Link, useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import axios from "axios";

const UserProfile = () => {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isAvatarTouched, setIsAvatarTouched] = useState(false);

  const changeAvatar = async (e) => {
    e.preventDefault();

    try {
      const postData = new FormData();
      postData.set("avatar", avatar);

      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/change-avatar`,
        postData,
        {
          withCredentials: true,
          headers: { Authorization: `Bearer ${currentUser.token}` },
        }
      );

      setAvatar(response?.data?.avatar);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      const userDetails = new FormData();

      userDetails.set("name", name);
      userDetails.set("email", email);
      userDetails.set("currentPassword", currentPassword);
      userDetails.set("newPassword", newPassword);
      userDetails.set("confirmNewPassword", confirmNewPassword);

      const response = await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/users/edit-user`,
        userDetails,
        {
          withCredentials: true,
          headers: { Authorization: `Bearer ${currentUser.token}` },
        }
      );

      if (response.status === 200) {
        navigate("/login");
        setCurrentUser(null);
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/users/${currentUser.id}`
        );

        const { name, email, avatar } = response.data;
        setName(name);
        setEmail(email);
        setAvatar(avatar);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [currentUser.id]);

  return (
    <section className="profile">
      <div className="container profile_container">
        <Link to={`/myposts/${currentUser.id}`}>My posts</Link>

        <div className="profile_details">
          <div className="avatar_wrapper">
            <div className="profile_avatar">
              <img
                src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${avatar}`}
                alt=""
              />
            </div>
            {/* Form placeholder="Choose image" update avatar */}
            <form className="avatar_form">
              <input
                type="file"
                name="avatar"
                id="avatar"
                accept="png,jpg,jpeg"
                onChange={(e) => setAvatar(e.target.files[0])}
              />
              <label
                htmlFor="avatar"
                className="edit_icon"
                onClick={() => setIsAvatarTouched(true)}
              >
                <FaEdit />
              </label>
            </form>
            {isAvatarTouched && (
              <button className="profile_avatar-btn" onClick={changeAvatar}>
                <FaCheck />
              </button>
            )}
          </div>
          <h1>{currentUser.name}</h1>

          {/* Form to update user details */}
          <form className="form profile_form" onSubmit={updateUser}>
            {error && <p className="form_error-message">{error}</p>}
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Current password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="New password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm new password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
            <button type="submit" className="btn primary">
              Update details
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default UserProfile;
