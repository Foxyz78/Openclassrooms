import React, { useRef, useState } from "react";
import "../styles/dropdown.scss";
import { useEffect } from "react";

// Utilisation du hook useRef afin de manipuler le dom en passant les references
const Dropdown = (lodging) => {
    const arrowSrc = "../images/arrow_up.png";
    const refHeight = useRef();

    const [toggle, setToggle] = useState(false);
    const [heightEl, setheightEl] = useState(false);

    useEffect(() => {
        setheightEl(`${refHeight.current.scrollHeight}px`);
    }, []);

    const toggleState = () => {
        setToggle(!toggle);
    };

    return (
        <>
            <article className="wrapper-dropdown">
                <div className="title-dropdown">
                    <h2 className="">{lodging.title}</h2>
                    <img
                        onClick={toggleState}
                        className={toggle ? "active" : undefined}
                        src={arrowSrc}
                    />
                </div>
                <div
                    className={
                        toggle
                            ? "dropdown-container animated"
                            : "dropdown-container"
                    }
                    style={{ height: toggle ? `${heightEl}` : "0px" }}
                    ref={refHeight}
                >
                    <p
                        aria-hidden={toggle ? "true" : "false"}
                        className="content-dropdown"
                    >
                        {lodging.content_dropdown}
                    </p>
                </div>
            </article>
        </>
    );
};

export default Dropdown;
