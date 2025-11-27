import { NavLink } from "@/types/link";
import { FiHome, FiShoppingBag, FiInfo, FiBriefcase } from "react-icons/fi";

export const linksNavigation: NavLink[] = [
  {
    name: "Início",
    path: "#home",
    icon: FiHome,
  },
  {
    name: "Sobre nós",
    path: "#sobre",
    icon: FiInfo,
  },
  {
    name: "Produtos",
    path: "#produtos",
    icon: FiShoppingBag,
  },
  {
    name: "Serviços",
    path: "#servicos",
    icon: FiBriefcase,
  },
];
