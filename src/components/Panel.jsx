import React from 'react';
import Label from "./Label";
import Button from "./Button";
import {typeFromStrMany} from "../common/typeFromString";


const Panel = React.memo(({elem}) => {
  if (elem.type !== "panel") return null;
  const {
    props,
    content
  } = elem;

  const {width, height, visible} = typeFromStrMany(props, ["caption"]);

  return (
    <div style={{border: "solid 1px black",
      visibility: visible ? "visible" : "hidden",
      width, height}}>
      {
        content?.map((elem, index) => {
          return (
            <React.Fragment key={index}>
              <Panel elem={elem}/>
              <Label elem={elem}/>
              <Button elem={elem}/>
            </React.Fragment>
          )
        })
      }
    </div>
  );
});

export default Panel;