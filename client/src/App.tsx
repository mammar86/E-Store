import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Catalog from "./components/catalog/Catalog";
import Header from "./components/Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#121212" : "#f0f8ff"
      }
    },
  });
  const handleThemeChange = () => {
    setDarkMode(!darkMode)
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* reset the styling to remove all spacing for start */}
      <Header darkMode={darkMode} handleThemeToggle={handleThemeChange} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
