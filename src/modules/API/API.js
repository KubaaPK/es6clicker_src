export default class Api {

  constructor(){

    if(this.loadFromLocalStorage("upgrades") === null) {
      this.saveToLocalStorage("upgrades", '[{"name":"doubleClickPower","cost":"300","own":"0"}, {"name":"tripleClickPower","cost":"1000","own":"0"}]');
    }

    if(this.loadFromLocalStorage("coins") === null) {
      this.saveToLocalStorage("coins", 0);
    }
    if(this.loadFromLocalStorage("workers") === null) {
      this.saveToLocalStorage("workers", '[{"name":"salesman","amount":0,"production": 1,"cost":50},{"name":"lemonadestand","amount":0,"production": 3,"cost":250},{"name":"greengrocers","amount":0,"production": 10,"cost":1000},{"name":"shop","amount":0,"production": 50,"cost":5000},{"name":"supermarket","amount":0,"production": 100,"cost":25000},{"name":"corporation","amount":0,"production": 250,"cost":100000}]');
    }


  }



  saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
  }

  loadFromLocalStorage(value) {
    let data = localStorage.getItem(value);
    return data;
  }

}
