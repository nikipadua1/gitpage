import { createContext, ReactNode, useState, useEffect, useContext } from "react";

const STORAGE_KEY = 'themeContextKey';

type ThemeContextType = {
  theme: string;
  setTheme: (newTheme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const isBrowser = typeof window !== 'undefined';

  const [theme, setTheme] = useState(
    isBrowser ? localStorage.getItem(STORAGE_KEY) || 'light' : 'light'
  );

  useEffect(() => {
    if (isBrowser) {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem(STORAGE_KEY, theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

