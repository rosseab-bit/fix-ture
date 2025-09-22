import styles from "@/styles/cards/CardGrupos.module.css";
import RowCardGrupos from "../RowCardGrupos";
import { dataRowGrups, RowGroupsConf } from "@/utils/toolsFuncions";
const CardGrupos = () => {
  return (
    <>
      <div className={`${styles.container_card_grupos}`}>
        <section className={`${styles.container_card_grupos_title}`}>
          <span className={`${styles.container_card_grupos_title_text}`}>
            Grupo A
          </span>
        </section>
        <RowCardGrupos
          name={`Equipo`}
          puntos={`PS`}
          ganados={`PG`}
          empatados={`PE`}
          perdidos={`PP`}
          goles={`GL`}
        />
        {dataRowGrups.map((item: RowGroupsConf, index: number) => (
          <RowCardGrupos
            name={item.name}
            puntos={item.puntos}
            ganados={item.ganados}
            empatados={item.empatados}
            perdidos={item.perdidos}
            goles={item.goles}
            key={index}
          />
        ))}
      </div>
    </>
  );
};
export default CardGrupos;
