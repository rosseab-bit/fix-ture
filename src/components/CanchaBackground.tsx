import styles from "@/styles/CanchaBackground.module.css";
import ArcoArea from "./ArcoArea";
import MiddleArea from "./MiddleArea";
const CanchaBackground = () => {
  return (
    <>
      <div className={`${styles.cancha_main_background}`}>
        <div className={`${styles.cancha_border}`}>
         <ArcoArea />
         <MiddleArea />
         <ArcoArea rotate_deg="180"/>
        </div>
      </div>
    </>
  );
};
export default CanchaBackground;
