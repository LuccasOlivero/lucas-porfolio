import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
  --color-background: #fdfdfd;
  --color-main: #3076f1;
  --color-secondary: #495096;
  --color-secondary-blur: #494f9662;
}

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
`;
