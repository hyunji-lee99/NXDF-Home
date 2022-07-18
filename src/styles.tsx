import { createGlobalStyle, DefaultTheme } from "styled-components";
import reset from "styled-reset";

export const lightTheme: DefaultTheme = {
  accent: "red",
  headerColor: "#141323",
  bgColor: "#FAFAFA",
  fontColor: "rgb(38, 38, 38)",
  bgDarkColor: "rgba(0, 0, 0, 0.3)",
  borderColor: "rgb(219, 219, 219)",
};

export const darkTheme: DefaultTheme = {
  accent: "red",
  fontColor: "white",
  bgColor: "#03032f",
  bgDarkColor: "rgba(0, 0, 0, 0.3)",
  headerColor: "#141323",
  borderColor: "rgb(219, 219, 219)",
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
    input {
      all:unset;
    }
    * {
      box-sizing:border-box;
    }
    body {
        background-color:${(props) => props.theme.bgColor};
        font-size:18px;
        font-family:'Gotham', sans-serif;
        color:${(props) => props.theme.fontColor};
    }
    a {
      text-decoration: none;
      color:inherit;
    }
`;
