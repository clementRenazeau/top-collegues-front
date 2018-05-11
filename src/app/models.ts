export enum Avis{
  AIMER,
  DETESTER
};
export class Collegue{
  constructor(public photo:string, public pseudo:string, public score:number){}
}
export class Vote{
  constructor(public collegue:Collegue, public avis:Avis){}
}
