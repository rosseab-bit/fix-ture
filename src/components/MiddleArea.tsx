import styles from '@/styles/CanchaBackground.module.css'
import LineHorizontal from './LineHorizontal';
import MiddleSection from './MiddleSection';
const MiddleArea = () => {
    return(
        <div className={`${styles.middle_area_container}`}>
            <LineHorizontal />
            <MiddleSection />
            <LineHorizontal />
        </div>
    )
}
export default MiddleArea;