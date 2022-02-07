
import styled from "styled-components";
import {Button,Form} from "react-bootstrap"
 
 export const DivForm = styled.div`
 background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 100%);
 display: flex;
 align-items: center;
 justify-content: center;
 height: 100vh;
`;

export const FormStyle = styled(Form)`
 background-color: #f5f7fa;
 border-radius: 10px;
 box-shadow: 0 0 10px 2px rgba(100, 100, 100, 0.1);
 width: 600px;
`;
export const Titulo = styled.h2`
 padding: 1rem;
 text-align: center;
 margin: 0;
`;

export const RadioStyled = styled(Form.Check)`
 padding: 0;
 font-size: 1.2rem;
 margin: 1rem 0;
`;

export const ButtonStyled = styled(Button)`
 background-color: #8e44ad;
 border: none;
 width: 100%;
 font-size: 1.1rem;
 padding: 1.3rem;
 &:hover {
   background-color: #732d91;
 }
 &:focus {
   outline: none;
   background-color: #5e3370;
 }
`;

export const ContainerStyled = styled.div `
    background-color: #fff;
    border-radius:10px;
    box-shadow: 0 0 10px 2px rgba(100,100,100,0.1); 
    width:80%;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`