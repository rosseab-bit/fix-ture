import styles from "@/styles/views/MenuView.module.css";
import ItemMenu from "../components/ItemMenu";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface Item {
    name:string,
    goTo:string
}
const MenuView = () => {
  const router = useRouter();
  const [menuSelected, setMenuSelected] = useState<string>('')
  let listMenu: Item[] = [
    {
      name: "Grupos",
      goTo: "grupos",
    },
    {
      name: "Tableros",
      goTo: "tableros",
    },
    {
      name: "Partidos",
      goTo: "partidos",
    },
    {
      name: "Suscribirse",
      goTo: "suscribirse",
    },
    {
      name: "Ranking",
      goTo: "ranking",
    },
    
  ];
  const goToDashboard = (menu:string) => {
  router.push(`/${menu}`);
};
  useEffect(()=>{
    if(menuSelected !== ''){
      goToDashboard(menuSelected)
    }
  },[menuSelected])
  return (
    <main className={`${styles.container_menu_view}`}>
      {listMenu.map((item:Item) => (
        <ItemMenu name={item} goToView={setMenuSelected}/>
      ))}
    </main>
  );
};
export default MenuView;
