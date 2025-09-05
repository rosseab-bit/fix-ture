import styles from '@/styles/Home.module.css';
type Name = {
    name:string,
    goTo:string
}
interface Prop{
    name:Name,
    goToView:Function,
}
const ItemMenu = ({name, goToView}:Prop) =>{
    return (
        <div className={styles.container_item_card_menu} onClick={() => goToView(name.goTo)}> 
            <span className={styles.container_item_card_menu_name}>🥅 {name.name}</span>
        </div>
    )
}
export default ItemMenu