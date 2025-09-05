import MenuView from "../pages/menu";
import RankingView from "../pages/ranking";
interface Prop {
    setView?:string;
}
type ComponentMap = {
  [key: string]: React.ComponentType<any>; 
};
const DefineContentView = ({setView='menu'}:Prop) =>{
    let configView:ComponentMap = {
        menu: MenuView,
        ranking: RankingView
    }
    if(configView[setView]){
        const ComponentSwitch = configView[setView]
        return <ComponentSwitch />
    }else{
        const ComponentSwitch = configView.menu
        return <ComponentSwitch />
    }
}
export default DefineContentView;