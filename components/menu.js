import React from "react";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";
import { Animated,TouchableOpacity,Dimensions } from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {connect} from "react-redux";
import MenuCard from "./menucard";

const screenHeight=Dimensions.get("window").height;

function mapStateToProps(state){

    return{ menu: state.menu };

}
function mapDispatchToProps(dispatch){
    return{
      closeMenu:()=>
      dispatch({type:"CLOSEMENU"})
    };
  }

 class Menu extends React.Component{
    state ={
        top: new Animated.Value(screenHeight)
    };
  

    componentDidMount(){
      this.menu();
    }
    componentDidUpdate(){
        this.menu();
    }

    menu = ()=>{
        if(this.props.menu == "openMenu"){
            Animated.spring(this.state.top,{ toValue:150}).start();
        }

        if(this.props.menu == "closeMenu"){ 
            Animated.spring(this.state.top,{ toValue:screenHeight}).start();
         }
        
    };
    
    


 
    render(){
        return(
            <AnimatedContainer style={{position:"absolute",top:this.state.top,zIndex:100}}>
            <Cover>
            <LinearGradient colors={["rgba(88, 186, 255,1)","rgba(88, 186, 255, 1)"]}
                style={{
                    width:"100%",
                    height:"100%"

                }}
            />
            <MenuText>
                Menu
            </MenuText>
            </Cover>
            <TouchableOpacity style={{position:"absolute",top:120,left:"50%",marginLeft:-22}}
            onPress={this.props.closeMenu}>
            <CloseView>
                <Ionicons name="ios-close" size={35} color="#219fde"/>
            </CloseView>
            </TouchableOpacity>
            <Content>
            <MenuCard text="Account" icon="ios-settings" caption="profile"/>

            <MenuCard text="Log Out" icon="ios-log-out" caption="see you soon"/>

            </Content>
            </AnimatedContainer>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu);


const Container=styled.View`
width:100%;
height:100%;
background:white;
border-radius:26px;
overflow:hidden;
`;
 
const AnimatedContainer= Animated.createAnimatedComponent(Container);

const Cover=styled.View`
width:100%;
height:142px;
`;
const Content=styled.View`
width:100%;
height:100%;
padding:30px;
`;
const CloseView=styled.View`
width:44px;
height:44px;
border-radius:22px;
background:white;
justify-content:center;
align-items:center;
`;
const MenuText=styled.Text`
position:absolute;
color:white;
font-size:28px;
top:60;
left:150;
`;
