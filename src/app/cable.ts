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
    material : material,
    temperatur : Number,
    verlegeart : verlegearten
    }

    //TODO als Dummy eingebaut für ESLint
    leistung () :void {
      WurzelDrei;
      querschnitte[0];
    }


}

enum material  {
  "Kupfer",
  "Aluminium"
}

 //TODO Verlegearten ergänzen
const verlegearten =
    [
      {
        kennung : "C",
        bezeichnung : "Verlegung in wärmegedämmten Wänden"
      }
    ]


    const WurzelDrei = 1.73205080757;


    //TODO Querschnitte ergänzen
    const querschnitte =
    [
      {
      querschnitt : 0.5,
      strom : 1
      }
    ];
