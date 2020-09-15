import React from "react";
import styled from "styled-components";

export default class BigCard extends React.Component{
    render(){
        return(

            <Container>
            <Image source={{uri:this.props.image}}/>
            </Container>
        );
    }
}
const Container=styled.View`
width:330px;
height:230px;
background:#c4c4c4;
border-radius:8px;
overflow:hidden;
margin-left:5px;
margin-right:5px;


`;
const Image=styled.Image`
width:100%;
height:100%;

`;