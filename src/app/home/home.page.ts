import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  numero = 5;
  constructor(private router: Router) {}

  goPageGame(){
    //if(this.numero > 0 && this.numero <=10){
      
      this.router.navigate(['game', this.numero]);
    //}else{
      //alert("Ingresa un numero entre 1 y 10");
    //}
  }

  updateValue(value){
    this.numero = value.target.value;
  }

}
