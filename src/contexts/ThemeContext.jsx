import { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: {
    cores: {
      primary: "#847979",
      secondary: "#BBC2E2",
    },
    nomeEmpresa: "Minha Empresa",
    slogan: "Alterar para o slogan da sua empresa",
    urlImage: null,
  },
  setTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    cores: {
      primary: "#847979",
      secondary: "#BBC2E2",
    },
    nomeEmpresa: "Minha Empresa",
    slogan: "Alterar para o slogan da sua empresa",
    logo: null,
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
