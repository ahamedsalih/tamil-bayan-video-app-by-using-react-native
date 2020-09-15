import React from "react";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";
import {Ionicons} from "@expo/vector-icons";
export default class MedCard extends React.Component{
    render(){
        return(
            <Container>
            <Image Source={{uri: this.props.image}}/>
            <LinearGradient colors={["rgba(0,0,0,0)","rgba(0,0,0,0.8)"]}
            style={{
                position:"absolute",
                width:"100%",
                height:"50%",
                top: 55
            }}/>
            <TextContainer>
            <Ionicons name="ios-play" color="white" size={18}/>
            <Text>
            latest
            </Text>
            </TextContainer>

            </Container>
        );
    }
}
const Container=styled.View`
width:197px;
height:110px;
background:white;
border-radius:4px;
overflow:hidden;
margin-left:8px;
`;
const Image=styled.Image`
width:100%;
height:100%;
`;
const Text=styled.Text`
color:white;
padding:10px;
`;


 const TextContainer=styled.View`
 position:absolute;
 top:70;
 left:10;
 flex-direction:row;
 align-items:center;
`;