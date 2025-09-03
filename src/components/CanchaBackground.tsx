import styles from "@/styles/CanchaBackground.module.css";
import ArcoArea from "./ArcoArea";
const CanchaBackground = () => {
  //<div className={`${styles.area_arco_b}`}></div>
  return (
    <>
      <div className={`${styles.cancha_main_background}`}>
        <div className={`${styles.cancha_border}`}>
         <ArcoArea />
         <ArcoArea rotate_deg="180"/>
        </div>
      </div>
    </>
  );
};
export default CanchaBackground;
