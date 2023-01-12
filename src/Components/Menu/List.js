import home from "../../assets/home.png";
import maisCurtidas from "../../assets/mais-curtidas.png";
import maisVistas from "../../assets/mais-vistas.png";
import novas from "../../assets/novas.png";
import surpreendaMe from "../../assets/surpreenda-me.png";

export const List = [
  {
    title: "Inicio",
    img: home,
    href: "/",
  },
  {
    title: "Melhores Avaliados",
    img: maisCurtidas,
    href: "/top",
  },
  {
    title: "Mais populares",
    img: maisVistas,
    href: "/popularity",
  },
  {
    title: "Popular na tv",
    img: novas,
    href: "/tv_popular",
  },
  {
    title: "Melhores avaliados na TV",
    img: surpreendaMe,
    href: "/tv_toprated",
  },
];
