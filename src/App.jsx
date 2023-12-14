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
import { TEXT_SPINNING } from "./Constants/constant";
import { Toaster } from "react-hot-toast";

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

          <SpinningText text={TEXT_SPINNING}>
            <ContatMe />
          </SpinningText>
        </ToggleMenuProvider>
      </BrowserRouter>
      <GlobalStyle />
      <Toaster
        position="bottom-right"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "600px",
            padding: "16px 24px",
          },
        }}
      ></Toaster>
    </>
  );
}

export default App;
