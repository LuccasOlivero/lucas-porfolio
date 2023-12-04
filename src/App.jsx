import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import { createGlobalStyle } from "styled-components";
import Navbar from "./components/Navbar";
import AboutMe from "./Pages/AboutMe";
import Work from "./Pages/Work";

const GlobalStyle = createGlobalStyle`

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

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route index path="/" element={<AppLayout />} />
          <Route index path="/about" element={<AboutMe />} />
          <Route index path="/work" element={<Work />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
