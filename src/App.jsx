import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Navbar from "./components/Navbar";
import AboutMe from "./Pages/AboutMe";
import Work from "./Pages/Work";
import { GlobalStyle } from "./Styles/GlobalStyles";

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
