import { css, styled } from "styled-components";

type ButtonPropsType = {
  mRight?: string;
  primary?: boolean;
  outlined?: boolean;
};

const Button = styled.button<ButtonPropsType>`
  width: 86px;
  height: 30px;
  font-weight: 700;
  font-size: 10px;
  line-height: 2;
  color: #fff;
  border: none;
  border-radius: 5px;
  transition: 0.5s;
  margin-right: ${(props) => props.mRight || "0px"};

  ${(props) =>
    props.primary &&
    css<ButtonPropsType>`
      color: #ffffff;
      background: ${(props) => props.theme.colors.btnColor};

      &:hover {
        background: #3c55bb;
        cursor: pointer;
      }
    `}
  ${(props) =>
    props.outlined &&
    css<ButtonPropsType>`
      color: ${(props) => props.theme.colors.btnColor};
      background: #fff;
      border: 2px solid ${(props) => props.theme.colors.btnColor};

      &:hover {
        background: ${(props) => props.theme.colors.btnColor};
        color: #ffffff;
        cursor: pointer;
      }
    `};
`;

export default Button;
