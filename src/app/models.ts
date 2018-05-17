export enum Avis{
  AIMER,
  DETESTER
};
export class Collegue{
  constructor(public matricule:string, public pseudo:string, public score:number, public image:string, public nom:string, public prenom:string, public adresse:string){}
}
export class Vote{
  constructor(public collegue:Collegue, public avis:Avis){}
}
