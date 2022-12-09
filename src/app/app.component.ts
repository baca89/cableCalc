import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CableCalculator';
  Fehlermeldung ="";
  spannungsfall = 0;
  kabeldaten = new FormGroup(
    {
      laenge : new FormControl<number>(0,[
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(1),
        Validators.min(1)
        ]),
      spannung : new FormControl<number>(0,[
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(1),
        Validators.min(1)
        ]),
      strom : new FormControl<number>(0,[
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(1),
        Validators.min(1)
        ])
    }
  );


    spannungsfallErlaubt = 0.03;


  calc() : void{
    console.log(this.kabeldaten.controls.laenge.invalid)
    console.log(this.kabeldaten);

    if(this.kabeldaten.controls.laenge.invalid){
      this.Fehlermeldung =" Die Länge ist fehlerhaft."
      return;
    }

    if(this.kabeldaten.controls.spannung.invalid){
      this.Fehlermeldung =" Die Spannung ist fehlerhaft."
      return;
    }

    if(this.kabeldaten.controls.strom.invalid){
      this.Fehlermeldung =" Die Stromstärke ist fehlerhaft."
      return;
    }

    if(this.kabeldaten.status=="VALID"){
      this.Fehlermeldung="";


      //für 1 Phasen-Netze -> 2 * l * I * cosPhi / rho / Spannungsfall erlaubt
      //this.spannungsfall= 2 * this.kabeldaten.value.laenge?;
    }
}
}
