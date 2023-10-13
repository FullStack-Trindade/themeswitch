import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ThemeContext } from "../contexts/ThemeContext";
import { ApiService } from "../service/ConfiguracaoService";
import { useParams } from "react-router-dom";

export const ConfiguracaoPage = () => {
  const service = new ApiService("configuracoes");
  const { setTheme, theme } = useContext(ThemeContext);
  const { handleSubmit, register, setValue } = useForm();
  const { id } = useParams();

  const onSubmit = async (data) => {
    const body = {
      cores: {
        primary: data.primaryColor,
        secondary: data.secondaryColor,
      },
      nomeEmpresa: data.nomeEmpresa,
      slogan: data.slogan,
    };

    (await id)
      ? service.Update(id, { ...theme, ...body }).then((response) => {
          setTheme(response);
        })
      : service.Create({ ...theme, ...body }).then((response) => {
          setTheme(response);
        });
  };

  useEffect(() => {
    const asyncFn = async () => {
      service.Show(id).then((response) => {
        setValue("primaryColor", response?.cores?.primary);
        setValue("secondaryColor", response?.cores?.secondary);
        setValue("nomeEmpresa", response?.nomeEmpresa);
        setValue("slogan", response?.slogan);
      });
    };

    id && asyncFn();
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="primaryColor">Cor Primaria</label>
        <input type="color" id="primaryColor" {...register("primaryColor")} />
      </div>
      <div>
        <label htmlFor="secondaryColor">Cor Secundaria</label>
        <input
          type="color"
          id="secondaryColor"
          {...register("secondaryColor")}
        />
      </div>
      <div>
        <label htmlFor="nomeEmpresa">Nome da Empresa</label>
        <input type="text" id="nomeEmpresa" {...register("nomeEmpresa")} />
      </div>
      <div>
        <label htmlFor="slogan">Slogan</label>
        <input type="text" id="slogan" {...register("slogan")} />
      </div>

      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
};
