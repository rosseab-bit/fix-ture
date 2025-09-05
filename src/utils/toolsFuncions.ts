export const hidenShowView = (
  action: string,
  showMainView: boolean,
  setShowMainView: Function
) => {
  console.log(showMainView);
  setShowMainView(!showMainView);
};
export const timeOutEjecute = (action: Function, delay: number) => {
  setTimeout(() => action(), delay * 1000);
};

export type ItemRankingData = {
  position: number;
  name: string;
};

export const listRanking: ItemRankingData[] = [
  {
    position: 1,
    name: "Pepe",
  },
  {
    position: 2,
    name: "Jorge",
  },
  {
    position: 3,
    name: "Tanjiro",
  },
  {
    position: 4,
    name: "Senitzu",
  },
  {
    position: 5,
    name: "Baki",
  },
  {
    position: 6,
    name: "Goku",
  },
  {
    position: 7,
    name: "Maomao",
  },
  {
    position: 8,
    name: "Yinshi",
  },
  {
    position: 9,
    name: "Micky",
  },
  {
    position: 10,
    name: "Mouse",
  },
  {
    position: 11,
    name: "Pluto",
  },
];

export type RowGroupsConf = {
  name: string;
  puntos: number;
  ganados: number;
  empatados: number;
  perdidos: number;
  goles: number;
}
let itemExampleRow:RowGroupsConf = {
  name: 'ARG',
  puntos: 3,
  ganados: 1,
  empatados: 0,
  perdidos: 0,
  goles: 5
}
export const dataRowGrups: RowGroupsConf[] = [...Array(5).fill(itemExampleRow)]