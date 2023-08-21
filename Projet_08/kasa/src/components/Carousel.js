import "../styles/carousel.scss";

const Carousel = (data) => {
  return (
    <div>
      {data.map((item, index) => {
        return <img src={item.src} key={index} />;
      })}
    </div>
  );
};
export default Carousel;
