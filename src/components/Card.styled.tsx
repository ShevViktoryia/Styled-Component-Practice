import React from "react";
import { styled } from "styled-components";

const Card = styled.div`
  border-radius: 15px;
  width: 300px;
  height: 350px;
  box-shadow: ${(props) => props.theme.shadow.dark};
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export default Card;
