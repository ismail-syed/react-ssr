import { observable, computed, autorun, action } from 'mobx'

export class AppState {
  @observable counter = 0
  @observable name = 'chunyangqiao'
  @computed get msg() {
    return `${this.name} say counter is ${this.counter}`
  }
  @action add() {
    this.counter += 1
  }
}

const appState = new AppState()

autorun(() => {})

setInterval(() => {
  appState.add()
}, 2000)

export default appState
