import styles from "@/styles/cards/CardRanking.module.css";
type Score = {
  position: number;
  name: string;
};
interface Prop {
  scores: Score;
  index: number;
}
const CardRanking = ({ scores, index }: Prop) => {
  return (
    <div key={index} className={`${styles.container_card_ranking}`} >
      <span className={`${styles.container_card_ranking_item}`} >
        ⚽ {scores.position}
      </span>
      <span className={`${styles.container_card_ranking_item}`}>
        {scores.name}
      </span>
    </div>
  );
};
export default CardRanking;