import { Link } from "react-router-dom";
import "../styles/thumb.scss";

const Thumb = (logement) => {
    return (
        <>
            <Link
                to={"logement/" + logement.id}
                state={logement}
                className="card"
                id={logement.id}
            >
                <div className="cover">
                    <img className="imageCover" src={logement.cover} />
                    <div className="bgCover">
                        <h3 className="thumb-title">{logement.title}</h3>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Thumb;
