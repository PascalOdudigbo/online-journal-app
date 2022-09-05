import style from "../CSS/style.module.css";
import css from "classnames";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Alert({ children, type, message }) {
  const [isShow, setIsShow] = useState(true);
  const history = useNavigate()

  const renderElAlert = function () {
    console.log("got here");
    return React.cloneElement(children);
    
  };

  const handleClose = (e) => {
    e.preventDefault();
    setIsShow(false);
    history("/");
  };

  return (
    <div className={css(style.alert, style[type], !isShow && style.hide)}>
      <span className={style.closebtn} onClick={handleClose}>
        &times;
      </span>
      {children ? renderElAlert() : message}
    </div>
  );
}