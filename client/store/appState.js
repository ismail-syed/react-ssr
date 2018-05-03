import { observable, action, autorun, computed } from 'mobx';

export default class AppState {
  constructor ({ count, name } = { count: 0, name: 'chunyangqiao'}) {
    this.count = count;
    this.name = name;
  }
  @observable count;
  @observable name;
  @computed get msg () {
    return `${this.name} say count is ${this.count}`;
  }
  @action add () {
    return this.count += 1;
  }
  @action changeName (name) {
    this.name = name;
  }
  toJson () {
    return {
      count: this.count,
      name: this.name
    }
  }
}