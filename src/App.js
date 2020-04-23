import React from 'react';
import './App.css';
import {connect} from "react-redux";
import Panel from "./components/Panel";
import Button from "./components/Button";
import Label from "./components/Label";
import {setNewBuild, setNewValue, setPath} from "./reduxStore/mainPageReducer";


function App(props) {
  const {
    content, value, path,
    setNewValue, setPath,
    setNewBuild
  } = props;


  return (
    <div className="content">
      <div className="control">
        <label className="control__input">
          Путь
          <input value={path}
                 onChange={(e) => setPath(e.target.value)}
          />
        </label>
        <label className="control__input">
          Новое значение
          <input value={value}
                 onChange={(e) => setNewValue(e.target.value)}
          />
        </label>
        <label className="control__btn">
          Применить
          <button onClick={() => setNewBuild(path, value)}/>
        </label>
      </div>
      <div className="window">
        {
          content.map((elem, index) => {
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
    </div>
  );
}

const mapStateToProps = (state) => ({
  value: state.mainPage.newValue,
  path: state.mainPage.path,
  content: state.mainPage.content
});

const mapDispatchToProps = {
  setNewValue,
  setPath,
  setNewBuild
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)
(App);
