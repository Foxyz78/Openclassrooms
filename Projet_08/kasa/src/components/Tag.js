import "../styles/tag.scss";

const Tag = (props) => {
  return (
    <>
      <div className="tag-content">
        <h4>{props.tag}</h4>
      </div>
    </>
  );
};

export default Tag;
