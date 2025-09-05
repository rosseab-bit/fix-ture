import styles from "@/styles/RowCardGrupos.module.css";
interface Prop {
  name: string;
  puntos: number | string;
  ganados: number | string;
  empatados: number | string;
  perdidos: number | string;
  goles: number | string;
}

const RowCardGrupos = ({
  name,
  puntos,
  ganados,
  empatados,
  perdidos,
  goles,
}: Prop) => {
  return (
    <div className={`${styles.container_row_grupos}`}>
      <div className={`${styles.row_grupos_item}`}>{name}</div>
      <div className={`${styles.row_grupos_item}`}>{puntos}</div>
      <div className={`${styles.row_grupos_item}`}>{ganados}</div>
      <div className={`${styles.row_grupos_item}`}>{empatados}</div>
      <div className={`${styles.row_grupos_item}`}>{perdidos}</div>
      <div className={`${styles.row_grupos_item}`}>{goles}</div>
    </div>
  );
};
export default RowCardGrupos;
