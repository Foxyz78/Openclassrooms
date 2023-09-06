import { Link, useParams } from "react-router-dom";
import "../styles/thumb.scss";

const Thumb = (props) => {
    const objLogement = {
        id: props.id,
        title: props.title,
        location: props.location,
        cover: props.cover,
        pictures: props.pictures,
        description: props.description,
        host: {
            name: props.host_name,
            picture: props.host_picture,
        },
        rating: props.rating,
        tags: props.tags,
        equipements: props.equipements,
    };

    return (
        <>
            <Link
                to="logement/"
                state={objLogement}
                className="card"
                id={objLogement.id}
            >
                <div className="cover">
                    <img className="imageCover" src={objLogement.cover} />
                    <div className="bgCover">
                        <h3 className="thumb-title">{objLogement.title}</h3>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Thumb;
