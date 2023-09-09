import "../styles/tag.scss";

const Tag = (lodging) => {
    return (
        <>
            <div className="tag-content">
                <h4>{lodging.tag}</h4>
            </div>
        </>
    );
};

export default Tag;
