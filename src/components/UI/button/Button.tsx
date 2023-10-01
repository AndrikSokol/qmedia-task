import React, { FC } from "react";
import style from "./Button.module.scss";
type buttonType = {
  children?: React.ReactNode;
  props?: any;
  onClick?: () => void;
  type?: "primary" | "default";
};

const Button: FC<buttonType> = ({
  type = "default",
  children,
  onClick,
  ...props
}) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className={style["button"]}
      style={{
        backgroundColor: backgroundColors[type],
        color: textColors[type],
      }}
    >
      {children}
    </button>
  );
};

const backgroundColors = {
  default: "#00a5ff",
  primary: "##FFFFFF",
};

const textColors = {
  default: "##FFFFFF",
  primary: "#000000",
};

export default Button;
