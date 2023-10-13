import { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import * as Styled from "./Layout.style";
import { ApiService } from "../service/ConfiguracaoService";

export const Layout = () => {
  const service = new ApiService("configuracoes");
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const asyncFn = async () => {
      await service.Show(1).then((response) => {
        setTheme(response);
      });
    };

    asyncFn();
  }, []);

  return (
    <div>
      <Styled.Header colors={theme.cores}>
        <h1>{theme.nomeEmpresa}</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/configuracoes">Configuracoes</Link>
        </nav>
      </Styled.Header>

      <main>
        <Outlet />
      </main>
      <Styled.Footer colors={theme.cores}>
        <p>{theme.slogan}</p>
      </Styled.Footer>
    </div>
  );
};
