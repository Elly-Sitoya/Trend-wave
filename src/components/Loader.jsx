import LoadingGIF from "../images/avatar16.jpg";

const Loader = () => {
  return (
    <div className="loader">
      <img src={LoadingGIF} alt="" className="loader_image" />
    </div>
  );
};
export default Loader;
