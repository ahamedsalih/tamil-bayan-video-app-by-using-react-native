import React from "react";
import { StyleSheet, Text, View,Image, Animated } from 'react-native';
import styled from "styled-components";
import {StatusBar,ScrollView} from "react-native";
import BigCard from "../components/BigCard";
import MedCard from "../components/medcard";
import {Ionicons} from "@expo/vector-icons";
import {TouchableOpacity,Dimensions} from "react-native";
import Menu from "../components/menu";
import {connect} from "react-redux";

function mapStateToProps(state){
  return{menu: state.menu}
}
function mapDispatchToProps(dispatch){
  return{
    openMenu: () =>
    dispatch({type:"OPENMENU"})
  };
}




 class HomeScreen extends React.Component {
  state={
    top: new Animated.Value(ScreenHeight),
    opacity: new Animated.Value(0),
  };
  componentDidUpdate(){
    this.blackScreen();
  }
  blackScreen(){
    if(this.props.menu=="openMenu"){
      Animated.timing(this.state.top,{toValue:0,duration:10}).start();
      Animated.timing(this.state.opacity,{toValue:0.6,duration:500}).start();

    }
    if(this.props.menu=="closeMenu"){
      Animated.timing(this.state.top,{toValue:ScreenHeight,duration:10}).start();
      Animated.spring(this.state.opacity,{toValue:0}).start();

    }
  }
  render() {
  return (
    <Root>
   
    
    <Main>
    <StatusBar hidden />
    
    <ScrollView ShowsVerticalIndicator={false}>
    
    <Header>
    <TouchableOpacity onPress={this.props.openMenu}
    style={{
      position:"absolute",
      top:12,
      left:10,
      zindex:100
        }}
    >
    <Ionicons name="ios-menu" color="black" size={34} />
    </TouchableOpacity>
    <Logo> TamilKT</Logo>
    <Profile>

    </Profile>

    </Header>
    <BigCardContainer>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    
    {BigCardData.map((data,index)=>{
      return (
        <BigCard key={index} image={data.image} />
      );
    })}

    </ScrollView>
    </BigCardContainer>
    <TextContinue>
    latest videos
    </TextContinue>

    <MedCardContainer>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    {MedCardData.map((data,index)=>{
      return (
        <MedCard key={index} img={data.image} />
      );
    })}
   
   </ScrollView>
    </MedCardContainer>
   
     
    </ScrollView>
     
   

    </Main>
    
    <AnimatedBlack style={{top:this.state.top,opacity:this.state.opacity}}/>
    <Menu />
    
    </Root>
    
  );
}
}
export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);

const Main=styled.View`

flex:1;
background-color:#e5e5e5;

`;
const Root=styled.View`
flex:1`;
const Black=styled.View`
position:absolute;
width:100%;
height:100%;
opacity:0.6;
background:black;`;
const ScreenHeight=Dimensions.get("window").height;

const AnimatedBlack=Animated.createAnimatedComponent(Black);

const Header=styled.View`
width:100%;
height:56px;
background:white;


`;
const Logo=styled.Text`
color:black;
font-size:30px;
position:absolute;
top:10px;
margin-left:45px;
`;
const Profile=styled.Image`
position:absolute;
width:45px;
height:45;
top:5px;
right:5px;
background:#c4c4c4;
border-radius:22px;
`;
const BigCardContainer=styled.View`
margin-top:15px;


`;
const BigCardData=[{image:"https://i.ytimg.com/vi/anJ7C69AqQU/maxresdefault.jpg"}
  ,{image:"https://i.ytimg.com/vi/QYh4P7rqceU/mqdefault.jpg"},
  {image:"https://i.ytimg.com/vi/my4bsum1wL4/maxresdefault.jpg"},
  {image:"https://i.ytimg.com/vi/kmYjEH65YQA/maxresdefault.jpg"}];
  
  const MedCardContainer=styled.View`
  margin-top:5px;
  `;

  const MedCardData=[{image:"https://i.ytimg.com/vi/QYh4P7rqceU/mqdefault.jpg"},
  {image:"https://i.ytimg.com/vi/QYh4P7rqceU/mqdefault.jpg"},
  {image:"https://i.ytimg.com/vi/QYh4P7rqceU/mqdefault.jpg"},
  {image:"https://i.ytimg.com/vi/QYh4P7rqceU/mqdefault.jpg"}
];

  const TextContinue=styled.Text`
  color:green;
  font-size:15px;
  text-transform:uppercase;
  
  margin-top:20px;
  margin-left:15px;
  `;

  


