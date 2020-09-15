import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import BottomTab from "./nav";







const reducer = (state = { menu:"closeMenu"},action)=>
{
  if(action.type=="OPENMENU"){
    return{
      menu:"openMenu"
    };
  }
    else if(action.type=="CLOSEMENU"){
      return{
        menu:"closeMenu"
      };
    }
    return state;
  }



const database=createStore(reducer);


const App= () => (
  <Provider store={database}>
<BottomTab/>
</Provider>);

export default App;