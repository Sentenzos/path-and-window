import React from 'react';
import {typeFromStrMany} from "../common/typeFromString";


const Button = React.memo(({elem}) => {
  if (elem.type !== "button") return null;

  const {props} = elem;
  const {width, height, visible, caption} = typeFromStrMany(props, ["caption"]);

  return (
    <button style={{
      visibility: visible ? "visible" : "hidden",
      width, height
    }}>
      {
        caption
      }
    </button>
  );
});

export default Button;