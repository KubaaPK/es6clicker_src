import Workers from '../workers/Workers';

let WORKERS = new Workers();

export default class ShopInfo {

  displaySalesmanInfo(){
    document.getElementById('salesmanCost').innerHTML = WORKERS.getWorkersCost(0);
    document.getElementById('amountSalesman').innerHTML = WORKERS.getWorkersAmount(0);
  }
  displayLemonadestandInfo(){
    document.getElementById('lemonadestandCost').innerHTML = WORKERS.getWorkersCost(1);
    document.getElementById('amountLemonadeStand').innerHTML = WORKERS.getWorkersAmount(1);
  }
  displayGreengrocersInfo(){
    document.getElementById('greengrocersCost').innerHTML = WORKERS.getWorkersCost(2);
    document.getElementById('amountGreengrocers').innerHTML = WORKERS.getWorkersAmount(2);
  }
  displayShopInfo(){
    document.getElementById('shopCost').innerHTML = WORKERS.getWorkersCost(3);
    document.getElementById('amountShop').innerHTML = WORKERS.getWorkersAmount(3);
  }
  displaySupermarketInfo(){
    document.getElementById('supermarketCost').innerHTML = WORKERS.getWorkersCost(4);
    document.getElementById('amountSupermarket').innerHTML = WORKERS.getWorkersAmount(4);
  }
  displayCorporationInfo(){
    document.getElementById('corporationCost').innerHTML = WORKERS.getWorkersCost(5);
    document.getElementById('amountCorporation').innerHTML = WORKERS.getWorkersAmount(5);
  }

  displaydefaultCostAmount() {
    document.getElementById('salesmanCost').innerHTML = WORKERS.getWorkersCost(0);
    document.getElementById('amountSalesman').innerHTML = WORKERS.getWorkersAmount(0);
    document.getElementById('lemonadestandCost').innerHTML = WORKERS.getWorkersCost(1);
    document.getElementById('amountLemonadeStand').innerHTML = WORKERS.getWorkersAmount(1);
    document.getElementById('greengrocersCost').innerHTML = WORKERS.getWorkersCost(2);
    document.getElementById('amountGreengrocers').innerHTML = WORKERS.getWorkersAmount(2);
    document.getElementById('shopCost').innerHTML = WORKERS.getWorkersCost(3);
    document.getElementById('amountShop').innerHTML = WORKERS.getWorkersAmount(3);
    document.getElementById('supermarketCost').innerHTML = WORKERS.getWorkersCost(4);
    document.getElementById('amountSupermarket').innerHTML = WORKERS.getWorkersAmount(4);
    document.getElementById('corporationCost').innerHTML = WORKERS.getWorkersCost(5);
    document.getElementById('amountCorporation').innerHTML = WORKERS.getWorkersAmount(5);
  }

}
