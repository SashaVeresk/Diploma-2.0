import { ReactNode, useState } from "react"
import { ThemeConfig } from "react-select/src/theme";
import { Theme, ThemeContext } from "../context/themeContext";
import { changeCssRootVariables } from "../model/changeCssRootVariables";
import { storage } from "../model/storage";

// export React from 'react';
interface Props {
    children: ReactNode;
}
export const ThemeProvider = ({ children, ...props }: Props) => {
    const [theme, setTheme] = useState<Theme>(storage.getItem('theme' || Theme.LIGHT));

    changeCssRootVariables(theme);
    function changeTheme(theme: Theme) {
        storage.setItem('theme', theme)
        setTheme(theme);

        changeCssRootVariables(theme);

    }

    return <ThemeContext.Provider value={{
        theme,
        changeTheme
    }}
        {...props}
    >
        {children}
    </ThemeContext.Provider>
};