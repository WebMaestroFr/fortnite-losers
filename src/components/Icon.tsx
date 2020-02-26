import {
  faCheckSquare,
  faSquare,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";

// IF YOU'RE WORKING ON THIS FILE, PLEASE READ THIS FIRST:
// https://fontawesome.com/icons?d=gallery&s=solid&m=free

const getIconFromName = (name: string) => {
  switch (name) {
    case "check-off":
      return faSquare;
    case "check-on":
      return faCheckSquare;
    case "star":
      return faStar;
    default:
      console.warn(`Icon "${name}" not imported.`);
      return null;
  }
};

const Icon: FC<{ name: string }> = ({ name }) => {
  const icon = getIconFromName(name);
  return (
    icon && (
      <span className="Icon">
        <FontAwesomeIcon fixedWidth={true} icon={icon} />
      </span>
    )
  );
};

export default Icon;
