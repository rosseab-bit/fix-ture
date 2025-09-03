import styles from "@/styles/CanchaBackground.module.css";
interface Prop {
  rotate_deg?: string; // example 45 (rotate 45°)
  x_size?: number; // example x_size={1} default
}
const ArcoArea = ({ rotate_deg, x_size }: Prop) => {
  let styleCustom: Record<string, Record<string, string>> = {
    rotate: { transform: `rotate(${rotate_deg ? rotate_deg : "360"}deg)` },
    set_x_size: {height:`${x_size? (x_size*30).toFixed(0) : '30'}%`}
  };
  return (
    <div className={`${styles.container_area_arco}`} style={styleCustom.rotate}>
      <div className={`${styles.area_arco_grande}`} style={styleCustom.set_x_size}>
        <div className={`${styles.area_arco_chica}`}></div>
      </div>
      <div className={styles.semi_circle}>
        <div className={styles.semi_circle_border_false}></div>
      </div>
    </div>
  );
};
export default ArcoArea;
