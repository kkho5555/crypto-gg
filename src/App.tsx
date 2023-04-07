import { ThemeProvider, createGlobalStyle } from "styled-components";
import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";
import reset from "styled-reset";
import { darkTheme, lightTheme } from "./theme";
import ToggleButton from "./components/ToggleButton";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    transition: all 0.5s ease;
  }
`;

function App() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyle />
            <center>
                <ToggleButton toggleTheme={toggleTheme} />
            </center>
            <Router />
            <ReactQueryDevtools initialIsOpen={true} />
        </ThemeProvider>
    );
}

export default App;
