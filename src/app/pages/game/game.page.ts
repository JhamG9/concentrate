import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  arrayNumbers = [];
  quanityNumbers = 8;

  latestItemSelected = null;
  constructor(private location: Location,
    private activateRouter: ActivatedRoute) { }


  ngOnInit() {
    let number = +this.activateRouter.snapshot.paramMap.get('number');

    if (number) {
      this.quanityNumbers = number;
    }
    this.cargarNumeros();

  }

  /**
   * Funtion execute the action for the anterior page or compoente
   */
  atras() {
    this.location.back();
  }

  /**
   * Function load the numbers
   */
  cargarNumeros = () => {
    let temporaryNumbers = [];
    for (let i = 0; i < (this.quanityNumbers); i++) {
      temporaryNumbers.push(i + 1);
      temporaryNumbers.push(i + 1);
    }

    temporaryNumbers = this.shuffle(temporaryNumbers);
    let numberFinals = [];
    temporaryNumbers.forEach((number, position) => {
      let data = { id: position, number: number, hidden: false, changeIcon: false };
      numberFinals.push(data);
    });
    console.log(numberFinals);

    this.arrayNumbers = numberFinals;
  }

  selectItem(item: any) {
    this.changeIcon(item);
  }

  validateClickEqualItem(item): boolean {
    if (item.id == this.latestItemSelected.id) {
      return false;
    }
    return true;
  }

  ocultarNumeros = (number) => {
    let numFaltantes = 0;

    this.arrayNumbers.forEach((item) => {
      if (item.number == number) {
        item.hidden = true;
      }

      if(!item.hidden){
        numFaltantes++;
      }

    });

    if(numFaltantes === 0){
      this.atras();
      alert("Terminaste, ahora coloca el numero que desees para volver a jugar");
      alert("Si me faltaron comas es porque son las 3:41 Am y tengo exceso de pereza en el organismo");
    }
  }

  changeIcon(item) {
    item.changeIcon = true;
    if (!this.latestItemSelected) {
      item.changeIcon = true;
    } else {

      if (this.latestItemSelected.number != item.number) {
        item.changeIcon = true;
      }
    }

    setTimeout(() => {
      if (this.latestItemSelected) {
        if (this.validateClickEqualItem((item))) {
          if (this.latestItemSelected.number == item.number) {
            this.ocultarNumeros(item.number)
          } else {
            item.changeIcon = false;
            this.latestItemSelected.changeIcon = false;
          }
        }
        this.latestItemSelected = null;
      } else {
        this.latestItemSelected = item;
      }
    }, 1000);
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // Mientras queden elementos a mezclar...
    while (0 !== currentIndex) {

      // Seleccionar un elemento sin mezclar...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // E intercambiarlo con el elemento actual
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }



}
