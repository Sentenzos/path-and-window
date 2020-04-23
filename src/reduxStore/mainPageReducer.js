import setImmutable from "../common/setImmutable";
import stringToObj from "../common/stringToObj";


const SET_PATH = "mainPageReducer/SET_PATH";
const SET_NEW_VALUE = "mainPageReducer/SET_NEW_VALUE";
const SET_NEW_BUILD = "mainPageReducer/APPLY_NEW_BUILD";


const initialState = {
  content: [
    {
      type: 'panel',
      props: {
        width: 500,
        height: 200,
        visible: true
      }
    },
    {
      type: 'label',
      props: {
        caption: 'label',
        visible: true
      }
    },
    {
      type: 'button',
      props: {
        caption: 'button',
        width: 100,
        height: 50,
        visible: true
      }
    }
  ],
  path: "",
  newValue: ""
};


export const mainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PATH:
      return {
        ...state,
        path: action.path
      };

    case SET_NEW_VALUE:
      return {
        ...state,
        newValue: action.newValue
      };

    case SET_NEW_BUILD: {
      const {path, newValue} = action;
      return setImmutable(state, path, stringToObj(newValue))
    }

    default:
      return state
  }
};


export const setPath = (path) => ({type: SET_PATH, path});
export const setNewValue = (newValue) => ({type: SET_NEW_VALUE, newValue});
export const setNewBuild = (path, newValue) => ({type: SET_NEW_BUILD, path, newValue});


