import Coin from '../coins/Coins';
import Workers from '../workers/Workers';
import ShopInfo from '../shop/ShopInfo';
import Upgrades from '../upgrades/Upgrades';

const COIN = new Coin();
const WORKERS = new Workers();
const SHOPINFO = new ShopInfo();
const UPGRADES = new Upgrades();


export default class Shop {

  constructor(){
    SHOPINFO.displaydefaultCostAmount();
    this.buyingShop();
    this.buyingUpgrades();
  }

  buyWorker(id) {

    if(COIN.getCoins() >= WORKERS.getWorkersCost(id)) {
      WORKERS.setWorkersAmount(id);
      let coins = COIN.getCoins() - WORKERS.getWorkersCost(id);
      WORKERS.setWorkersCost(id);
      COIN.setCoin(coins);

    } else {
      console.log("nie można kupić");
    }
  }

  buyUpgrade(id) {

    if(COIN.getCoins() >= UPGRADES.getUpgradeCost(id)) {
      UPGRADES.updateUpgradeStatus(id);
      let coins = COIN.getCoins() - UPGRADES.getUpgradeCost(id);
      COIN.setCoin(coins);

      const doubleCoinsBtn = document.getElementById('doubleCoinsUpgrade'),
            tripleCoinsBtn = document.getElementById('tripleCoinsUpgrade');

      if(id = 0) {
        doubleCoinsBtn.disabled = true;
      }
      if(id = 1) {
        tripleCoinsBtn.disabled = true;
      }

    } else {
      console.log("nie można kupić, za mało pieniędzy");
    }
  }



  buyingShop() {
    const buySalesmanBtn = document.getElementById('buySalesmanBtn'),
          buyLemonadeStandBtn = document.getElementById('buyLemonadeStandBtn'),
          buyGreengrocersBtn = document.getElementById('buyGreengrocersBtn'),
          buyShopBtn = document.getElementById('buyShopBtn'),
          buySupermarketBtn = document.getElementById('buySupermarketBtn'),
          buyCorporationBtn = document.getElementById('buyCorporationBtn');

    buySalesmanBtn.addEventListener('click', ()=>{
      this.buyWorker(0);
      SHOPINFO.displaySalesmanInfo();
    });
    buyLemonadeStandBtn.addEventListener('click', ()=>{
      this.buyWorker(1);
      SHOPINFO.displayLemonadestandInfo();
    });
    buyGreengrocersBtn.addEventListener('click', ()=>{
      this.buyWorker(2);
      SHOPINFO.displayGreengrocersInfo();
    });
    buyShopBtn.addEventListener('click', ()=>{
      this.buyWorker(3);
      SHOPINFO.displayShopInfo();
    });
    buySupermarketBtn.addEventListener('click', ()=>{
      this.buyWorker(4);
      SHOPINFO.displaySupermarketInfo();
    });
    buyCorporationBtn.addEventListener('click', ()=>{
      this.buyWorker(5 );
      SHOPINFO.displayCorporationInfo();

    });
  }

  buyingUpgrades(){

    const doubleCoinsBtn = document.getElementById('doubleCoinsUpgrade'),
          tripleCoinsBtn = document.getElementById('tripleCoinsUpgrade');

    if(UPGRADES.isOwn(0)) {
      doubleCoinsBtn.disabled = true;
    }
    if(UPGRADES.isOwn(1)) {
      tripleCoinsBtn.disabled = true;
    }

    doubleCoinsBtn.addEventListener('click', ()=>{
      this.buyUpgrade(0);
    });
    tripleCoinsBtn.addEventListener('click', ()=>{
      this.buyUpgrade(1);
    });
  }





}
