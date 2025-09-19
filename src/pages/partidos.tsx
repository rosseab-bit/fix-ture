import styles from '@/styles/views/PartidosView.module.css'
import CardMatches from "@/components/cards/CardMatches";
const Partidos = () => {
  return (
    <div className={`${styles.container_partidos}`}>
      <CardMatches />
    </div>
  );
};
export default Partidos;
