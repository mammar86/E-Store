import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import AboutPage from "./components/AboutPage";
import Catalog from "./components/catalog/Catalog";
import ProductDetails from "./components/catalog/ProductDetails";
import ContactPage from "./components/ContactPage";
import Header from "./components/Header";
import HomePage from "./components/HomePage";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#121212" : "#f0f8ff",
      },
    },
  });
  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar />
      <CssBaseline /> {/* reset the styling to remove all spacing for start */}
      <Header darkMode={darkMode} handleThemeToggle={handleThemeChange} />
      <Container> {/* Material UI container */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/catalog" component={Catalog} />
        <Route path="/catalog/:id" component={ProductDetails} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
