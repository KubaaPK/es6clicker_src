import Api from '../API/API';

const API = new Api();

export default class Upgrades {



  getAllUpgrades() {
    let allUpgrades = JSON.parse(API.loadFromLocalStorage("upgrades"));
    return allUpgrades;
  }

  getUpgradeCost(id) {
    return parseInt(this.getAllUpgrades()[id].cost);
  }

  isOwn(id) {
    if(this.getAllUpgrades()[id].own === 1) {
      return true;
    } else {
      return false;
    }
  }

  updateUpgradeStatus(id) {
    let allUpgrades = JSON.parse(API.loadFromLocalStorage("upgrades"));
    allUpgrades[id].own = 1;
    let parsedData = JSON.stringify(allUpgrades);
    API.saveToLocalStorage("upgrades", parsedData);
  }



}
