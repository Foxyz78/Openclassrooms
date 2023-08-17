import "../styles/banner.scss";

const Banner = (props) => {
  return (
    <div className="banner">
      <img className="banner-img" src={props.srcImage} alt={props.altImage} />
      <h2>{props.bannerTitle}</h2>
    </div>
  );
};

export default Banner;
