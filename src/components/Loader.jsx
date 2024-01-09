import LoadingGIF from "../images/loading-gif.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={LoadingGIF} alt="" className="loader_image" />
    </div>
  );
};
export default Loader;
