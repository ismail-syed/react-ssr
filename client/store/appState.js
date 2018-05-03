import { observable, action, autorun, computed } from 'mobx';

export default class AppState {
  @observable count = 0;
  @observable name = 'chunyangqiao';
  @computed get msg () {
    return `${this.name} say count is ${this.count}`;
  }
  @action add () {
    return this.count += 1;
  }
  @action changeName (name) {
    this.name = name;
  }
}