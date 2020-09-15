import React from "react";
import{createAppContainer,createBottomTabNavigator,createStackNavigator} from "react-navigation";
import HomeScreen from "./screens/HomeScreen";

//const HomeStack=createStackNavigator({
  //  Home:HomeScreen
//});

const BottomTab=createBottomTabNavigator({HomeScreen});

export default createAppContainer(BottomTab);
