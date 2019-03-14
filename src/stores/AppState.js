import { observable, action } from "mobx";


export default class AppState {
 
  @observable testval
  constructor() {

    this.testval = "aaaa";
  }

  
}
