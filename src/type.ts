export interface Product{
     id:number,
    slug:string,
   nameBn: string,
  category:string,
  categoryNameBn: string,
  categoryIcon:string,
  unit:string,
  image: string,
  today: string,
  yesterday: string,
  lastWeek: number,
  lastMonth:number ,
  change: {
    dir: "up"|"down",
    pct: number
  },
  markets: 
    {
      market: string,
      division: string,
      min: number,
      max: number
    }
   
  }