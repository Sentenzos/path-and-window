import React from 'react';
import {typeFromStrMany} from "../common/typeFromString";


const Label = React.memo(({elem}) => {
  if (elem.type !== "label") return null;
  const {props} = elem;
  const {visible, caption} = typeFromStrMany(props, ["caption"]);

  return (
    <span style={{
      visibility: visible ? "visible" : "hidden"}}>
      {
        caption
      }
    </span>
  );
});

export default Label;