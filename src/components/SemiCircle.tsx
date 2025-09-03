import styles from "@/styles/CanchaBackground.module.css";
interface Prop {
  x_size?: number;
  rotate_deg?: string;
  border_top?: boolean;
  border_bottom?: boolean;
  border_right?: boolean;
  border_left?: boolean;
}
const SemiCircle = ({
  x_size,
  rotate_deg,
  border_top = true,
  border_bottom = true,
  border_right = true,
  border_left = true,
}: Prop) => {
  let setCustomStyle: Record<string, Record<string, string>> = {
    xsize_circle: {
      width: `${x_size ? x_size * 102 : "102"}px`,
      height: `${x_size ? x_size * 102 : "102"}px`,
      borderBottonRightRadius: `${x_size ? x_size * 102 : "102"}px`,
      borderBottonLeftRadius: `${x_size ? x_size * 102 : "102"}px`,
    },
    rotate: { transform: `rotate(${rotate_deg ? rotate_deg : "360"}deg)` },
    border: {
      borderTop: border_top ? "2px solid #FBFFE4" : "0",
      borderBottom: border_bottom ? "2px solid #FBFFE4" : "0",
      borderRight: border_right ? "2px solid #FBFFE4" : "0",
      borderLeft: border_left ? "2px solid #FBFFE4" : "0",
    },
  };
  return (
    <div
      className={styles.semi_circle}
      style={{
        ...setCustomStyle.xsize_circle,
        ...setCustomStyle.rotate,
        ...setCustomStyle.border,
      }}
    ></div>
  );
};
export default SemiCircle;
