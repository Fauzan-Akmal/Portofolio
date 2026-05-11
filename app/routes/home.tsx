import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portofolio Saya" },
    {
      name: "description",
      content:
        "Portofolio web responsif yang dibuat dengan HTML, CSS, JavaScript native, dan Tailwind CSS.",
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
