import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToggleMenuProvider } from "./Context/ToggleMenuContext";
import { GlobalStyle } from "./Styles/GlobalStyles";

import About from "./Pages/About";
import Work from "./Pages/Work";
import Contact from "./Pages/Contact";

import SpinningText from "./components/SpinningText";
import Navbar from "./components/Navbar";

import AppLayout from "./ui/AppLayout";
import { ContatMe } from "./ui/ContactMe";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToggleMenuProvider>
          <Navbar />

          <Routes>
            <Route index path="/" element={<AppLayout />} />
            <Route index path="/about" element={<About />} />
            <Route index path="/work" element={<Work />} />
            <Route index path="/contact" element={<Contact />} />
          </Routes>

          <SpinningText text="✈️ contact me ✈️ contact me ✈️ contact me ">
            <ContatMe />
          </SpinningText>
        </ToggleMenuProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
