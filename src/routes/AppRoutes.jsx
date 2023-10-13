import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../layout/layout";
import { HomePage } from "../pages/HomePage";
import { ConfiguracaoPage } from "../pages/ConfiguracaoPage";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/configuracoes" element={<ConfiguracaoPage />} />
          <Route path="/configuracoes/:id" element={<ConfiguracaoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
