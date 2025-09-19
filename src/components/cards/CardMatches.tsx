import styles from "@/styles/cards/CardMatches.module.css";

interface Prop {
  matches?: any[];
}
/*
 example matches
 matches = [ ["team1", "team2","15/05 - 22:30hs"], ["team3", "team4", "5/07 - 12:30hs"], ]
 */
const CardMatches = ({
  matches = Array(30)
    .fill(null)
    .map((_, i) => [
      `team${i * 2 + 1}`,
      `team${i * 2 + 2}`,
      `${Math.floor(Math.random() * 28) + 1}/${
        Math.floor(Math.random() * 12) + 1
      } - ${String(Math.floor(Math.random() * 24)).padStart(2, "0")}:${String(
        Math.floor(Math.random() * 60)
      ).padStart(2, "0")}hs`,
    ]),
}: Prop) => {
  return (
    <div className={`${styles.container_matches}`}>
      {matches.map((item: any[], index: number) => (
        <div className={`${styles.section_match_card}`} key={index}>
          <div className={`${styles.item_matches}`}>{item[0]}</div>
          <div className={`${styles.item_matches}`}>Vs.</div>
          <div className={`${styles.item_matches}`}>{item[1]}</div>
          <div className={`${styles.item_matches}`}>{item[2]}</div>
        </div>
      ))}
    </div>
  );
};
export default CardMatches;
