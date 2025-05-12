import { TECH_STACK } from "../constants";

export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

export const openLink = (url: string, newTab: boolean = true) => {
  window.open(url, newTab ? "_blank" : "_self");
};

export function getTechByName(name: string) {
  return TECH_STACK.find((tech) => tech.alt.toLowerCase() === name.toLowerCase());
}
