import styles from "@/styles/views/GruposView.module.css";
import CardGrupos from "@/components/cards/CardGrupos";

export default function Grupos() {
  const tmpList: number[] = [...Array(8)];
  return (
    <>
      <div className={`${styles.container_view_grupos}`}>
        {tmpList.map((item: number, index: number) => (
          <CardGrupos key={index} />
        ))}
      </div>
    </>
  );
}
