import Workers from '../workers/Workers';

let WORKERS = new Workers();

export default class Production {

  getAllProduction() {
    var data = 0;
    for(let i = 0 ; i<=5; i++) {
      data+= (WORKERS.getWorkersProduction(i) * WORKERS.getWorkersAmount(i));
    }
    return data;
  }

  displayProduction(){
    let data = this.getAllProduction();
    return data;
  }


}
