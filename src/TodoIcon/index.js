import React from 'react';
//https://react-icons.github.io/react-icons/icons?name=bs check more icons
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsTrashFill } from "react-icons/bs";
import './TodoIcon.css';

const iconTypes = {
  "check": color => (
    <BsFillCheckCircleFill className="Icon-svg Icon-svg--check" fill={color} />
  ),
  "delete": color => (
    <BsTrashFill className="Icon-svg Icon-svg--delete" fill={color} />
  ),
};

function TodoIcon({ type, color = 'gray', onClick }) {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };