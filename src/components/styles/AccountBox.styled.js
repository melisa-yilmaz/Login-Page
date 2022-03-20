import styled from "styled-components";
import {motion} from "framer-motion";

export const StyledAccountBox = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 2em;
`;

export const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 75%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: rgb(63,94,251);
background: radial-gradient(circle, rgba(63,94,251,1) 18%, rgba(252,70,107,1) 75%);
`;


export const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
 

`;





