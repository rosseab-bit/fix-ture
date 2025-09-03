import styles from '@/styles/CanchaBackground.module.css'
import SemiCircle from './SemiCircle';
import LineHorizontal from './LineHorizontal';
import { posix } from 'path';
const MiddleSection = () => {
    let styleCustom:Record<string,Record<string,string>>={
        line:{
            width: '100%',
            zIndex: '5',
            height: '2px',
            backgroundColor: '#FBFFE4',
            position: 'relative'
        }
    }
  return (
    <div className={`${styles.container_middle_section}`}>
    <SemiCircle x_size={1} rotate_deg='180' border_top={false}/>

    <SemiCircle x_size={1} />
    </div>
  );
};
export default MiddleSection;
