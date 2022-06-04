import Header from "./components/header";

import { ThemeProvider } from "styled-components";
import { useState } from "react";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import Main from "./components/main";

const App: React.FC = () => {
  const [theme, setTheme] = useState(light);

  const handleTogle = () => {
    setTheme(theme.name === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header togle={handleTogle} />
      <Main />
    </ThemeProvider>
  );
};

export default App;
