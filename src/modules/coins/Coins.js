import Api from '../API/API';
import Production from '../production/Production';
import Upgrades from '../upgrades/Upgrades';

let API = new Api();
let PRODUCTION = new Production();
let UPGRADES = new Upgrades();

export default class Coin {

  constructor(){

    this.init();

    setInterval(()=>{this.interval();}, 10);
    setInterval(()=>{this.coinsPerSecond();}, 1000);
  }

  init() {
    this.addCoin();
  }

  interval() {
    this.displayCoinsFromLocalStorage();
    this.getCoins();
  }

  displayCoinsFromLocalStorage(){
    document.getElementById('coinsAmount').innerHTML = '$' + API.loadFromLocalStorage("coins");
  }

  coinsPerSecond(){
    let coins = parseInt(this.getCoins()) + PRODUCTION.getAllProduction();
    const cpsDOM = document.getElementById('coinsPerSecond');
    cpsDOM.innerHTML = PRODUCTION.displayProduction()*2 +" $/s";
    this.setCoin(coins);
  }

  addCoin() {

    let power = 1;

    if(UPGRADES.isOwn(0)) {
      power = 2;
    }
    if(UPGRADES.isOwn(1)) {
      power = 3;
    }

    const addCoinBtn = document.getElementById('addCoinBtn');
    addCoinBtn.addEventListener('click', ()=>{
      this.setCoin(parseInt(this.getCoins()) + power);
    });
  }


  getCoins() {
    return parseInt(API.loadFromLocalStorage("coins"));
  }


  setCoin(coins) {
    API.saveToLocalStorage("coins", coins)
  }



}
