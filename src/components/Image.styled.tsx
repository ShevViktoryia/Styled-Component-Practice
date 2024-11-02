import { styled } from "styled-components";
import myImage from "../assets/images/1.png";

const Image = styled.div`
  border-radius: 10px;
  width: 280px;
  height: 170px;
  background: url(${myImage});
`;

export default Image;
