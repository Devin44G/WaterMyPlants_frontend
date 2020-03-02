import styled from 'styled-components';
import img from './../img/wmp-background.jpg';
export const Nav = styled.div`
  height: 200px;
  display: flex;
  flex-direction: row;
  background: white;
  color: black;
  border: bottom 4px black;
  width:100%;
  justify-content:space-evenly;
  align-items:flex-end;
`;

export const Ss = styled.button`
  height: 30px;
  background: orange;
  color: black;
  border: 0;
  margin: 5px 10px;
`;

export const Ii = styled.input`
  width: 200px;
  padding: 15px 22px;
  margin: 10px 5px;
  box-sizing: border-box;  
  border: 1px solid #ff65a3;
  border-radius: 4px;
  `;

export const Ll = styled.label`
  margin-bottom: -12px;
  text-align: left;
  width: 200px;
  `;

export const Main = styled.div`
    background-image:url(${img});
    height:100%;
    background-size: 1000px 666px;
    background-repeat: no-repeat;
`;

// EXAMPLE
/*
export const MyStyle = styled.div`
  // STYLES HERE
`;

IMPORT NON-DEFAULT EXPORT INTO OTHER FILES THIS WAY:
  import { MyStyle } from './styles'; // BECAUSE THE FILE IS NAMED index, WE DON'T NEED TO INCLUDE THE FILE NAME IN THE PATH, BECAUSE THE index FILE WILL AUTOMATICALLY BE INCLUDED . . .
*/
