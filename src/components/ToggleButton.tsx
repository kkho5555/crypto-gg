// ToggleButton.tsx
import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "styled-components";

const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 18px;
    color: ${(props) => props.theme.accentColor};
    transition: all 0.3s ease-in-out;

    &:hover {
        color: ${(props) => props.theme.textColor};
    }
`;

interface ToggleButtonProps {
    toggleTheme: () => void;
}

const ToggleButton = ({ toggleTheme }: ToggleButtonProps) => {
    const theme = useContext(ThemeContext);

    return (
        <Button onClick={toggleTheme}>
            {theme.bgColor === "#ffffff" ? "🌙" : "☀️"}
        </Button>
    );
};

export default ToggleButton;
