export class Cable {
  cable = {
    laenge : Number,
    strom : Number,
    spannung : Number,
    anzahlPhasen : Number,
    spannungsfall : {
      prozent : Number,
      absolut :Number
    },
    cosPhi : Number,
    querschnitt : Number,
    material : Cable.material,
    temperatur : Number,
    verlegeart : Cable.verlegearten
    }





}



  export namespace Cable
{
    export enum material {
      "Kupfer",
      "Aluminium"
    }

    //TODO Verlegearten ergänzen
    export const verlegearten =
    [
      {
        kennung : "C",
        bezeichnung : "Verlegung in wärmegedämmten Wänden"
      }
    ]
    export const WurzelDrei = 1.73205080757;

    //TODO Querschnitte ergänzen
    export const querschnitte =
    [
      {
      querschnitt : 0.5,
      strom : 1
      }
    ];
}
