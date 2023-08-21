import React, { useRef } from "react";
import "../styles/dropdown.scss";

const Dropdown = (props) => {
  const refContent_dropDown = useRef();
  const refArrowUp = useRef();
  const refArrowDown = useRef();

  const handleShow = () => {
    refContent_dropDown.current.style.display = "flex";
    refArrowDown.current.style.display = "flex";
    refArrowUp.current.style.display = "none";
  };

  const handleHide = () => {
    refContent_dropDown.current.style.display = "none";
    refArrowUp.current.style.display = "flex";
    refArrowDown.current.style.display = "none";
  };

  return (
    <>
      <article className="wrapper-dropdown">
        <div className="title-dropdown">
          <h2 className="">{props.title}</h2>
          <img
            ref={refArrowUp}
            className="arrow-dropdown-up"
            src="../images/arrow_up.png"
            onClick={handleShow}
          />
          <img
            ref={refArrowDown}
            className="arrow-dropdown-down"
            src="../images/arrow_down.png"
            onClick={handleHide}
          />
        </div>
        <div className="dropdown-container">
          <p className="content-dropdown" ref={refContent_dropDown}>
            {props.content_dropdown}
          </p>
        </div>
      </article>
    </>
  );
};

export default Dropdown;
