import React from "react";
import styled from "styled-components";
import {Ionicons} from "@expo/vector-icons";

const MenuCard= props =>(
    <Container>
    <Ionicons name={props.icon} size={25} color="#219fde" style={{marginRight:20,marginTop:6,padding:28}}/>
      <MenuButton>
                    {props.text}
                </MenuButton>
               
                <MenuText>
                    {props.caption}
                </MenuText>
               
               
               
    </Container>
)
export default MenuCard;

const Container=styled.View`
flex-direction:row;



`;
const MenuButton=styled.Text`
font-size:25px;
font-weight:600;
color:black;
margin-top:23px;
`;

const MenuText=styled.Text`
width:100%;
margin-top:50px;
left:-95px;
padding:10px;
font-size:15px;
color:lightgray;`;
