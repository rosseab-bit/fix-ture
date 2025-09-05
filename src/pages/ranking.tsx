import CardRanking from '@/components/cards/CardRanking';
import styles from '@/styles/views/RankingView.module.css';
import { listRanking } from "@/utils/toolsFuncions";
type ItemRankingData = {
        position:number,
        name:string
    }
export default function Ranking() {

  return (
    <div style={{width:'100%'}}>

      <div className={`${styles.container_ranking_view}`}>
        {listRanking.map((item:ItemRankingData, index:number) => (
          <CardRanking  scores={item} index={index}/>
        ))}
      </div>
        </div>
  );
}
