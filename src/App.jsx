import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
  --color-background: #fdfdfd;
  --color-main: #3076f1;
  --color-main-gradient: linear-gradient(90deg, rgba(73,79,150,1) 7%, rgba(48,118,241,1) 100%);

}

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
`;

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<AppLayout />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
