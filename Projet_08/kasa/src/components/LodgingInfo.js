import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Dropdown from "./Dropdown";
import Tag from "./Tag";
import Rating from "./Rating";

import "../styles/logement.scss";
import "../styles/dropdown.scss";

const LodgingInfo = ({ lodging }) => {
    return (
        <>
            <div className="main-container">
                <div className="info">
                    <div className="info-logement">
                        <div className="title-tag">
                            <div className="title-container">
                                <h1 className="title">{lodging.title}</h1>
                                <h2 className="location">{lodging.location}</h2>
                            </div>

                            <div className="tag">
                                <div className="tag-container">
                                    {/* retourne le nombre de tag et les affiche */}
                                    {lodging.tags &&
                                        lodging.tags.map((tag, index) => {
                                            return (
                                                <Tag key={index} tag={tag} />
                                            );
                                        })}
                                </div>
                            </div>
                        </div>
                        <div className="host-star">
                            <div className="host">
                                <div className="name">
                                    <p>{lodging.host.name}</p>
                                </div>
                                <img
                                    className="host-image"
                                    src={lodging.host.picture}
                                    alt="photo du propriétaire"
                                />
                            </div>
                            <div className="star">
                                <div className="star-red">
                                    <Rating rate={lodging.rating} />
                                </div>
                                <div className="star-white">
                                    <FontAwesomeIcon
                                        icon="fa-solid fa-star"
                                        size="xl"
                                        style={{ color: "#e3e3e3" }}
                                    />
                                    <FontAwesomeIcon
                                        icon="fa-solid fa-star"
                                        size="xl"
                                        style={{ color: "#e3e3e3" }}
                                    />
                                    <FontAwesomeIcon
                                        icon="fa-solid fa-star"
                                        size="xl"
                                        style={{ color: "#e3e3e3" }}
                                    />
                                    <FontAwesomeIcon
                                        icon="fa-solid fa-star"
                                        size="xl"
                                        style={{ color: "#e3e3e3" }}
                                    />
                                    <FontAwesomeIcon
                                        icon="fa-solid fa-star"
                                        size="xl"
                                        style={{ color: "#e3e3e3" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown">
                        <div className="description">
                            <Dropdown
                                title="Description"
                                content_dropdown={lodging.description}
                            />
                        </div>
                        <div className="equipement">
                            <Dropdown
                                title="Equipement"
                                content_dropdown={
                                    lodging.equipments &&
                                    lodging.equipments.map(
                                        (equipement, index) => (
                                            <span
                                                key={index}
                                                className="tag-name"
                                            >
                                                {equipement}
                                            </span>
                                        )
                                    )
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LodgingInfo;
