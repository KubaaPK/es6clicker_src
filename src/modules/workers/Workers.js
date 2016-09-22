import Api from '../API/API';

let API = new Api();

export default class Workers {


  getAllWorkers() {
    let allWorkers = JSON.parse(API.loadFromLocalStorage("workers"));
    return allWorkers;
  }
  getWorkersName(id){
   return this.getAllWorkers()[id].name;
  }
  getWorkersAmount(id){
    return this.getAllWorkers()[id].amount;
  }
  getWorkersProduction(id){
    return this.getAllWorkers()[id].production;
  }
  getWorkersCost(id){
    return this.getAllWorkers()[id].cost;
  }

  setWorkersAmount(id){
    let allWorkers = this.getAllWorkers();
    allWorkers[id].amount = allWorkers[id].amount + 1;
    let parsedData = JSON.stringify(allWorkers);
    API.saveToLocalStorage("workers", parsedData);
  }
  setWorkersCost(id){
    let allWorkers = this.getAllWorkers();
    let cost = this.getWorkersCost(id);
    let newCost = Math.round(cost + cost*0.6);
    allWorkers[id].cost = newCost;
    let parsedData = JSON.stringify(allWorkers);
    API.saveToLocalStorage("workers", parsedData);
  }

}
