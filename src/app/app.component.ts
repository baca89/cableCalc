import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CableCalculator';
  spannungsfall = 0;
  kabeldaten = new FormGroup(
    {
      laenge : new FormControl('',[
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(1),
        Validators.min(1)
        ]),
      spannung : new FormControl (''),
      strom : new FormControl('')
    }
  );




  calc() : void{
    console.log(this.kabeldaten.controls.laenge.invalid)
    console.log(this.kabeldaten);
}
}
