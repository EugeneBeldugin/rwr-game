import Runner from './runner.js'

class Hare extends Runner {
  constructor(name) {
    super(name)
    this.name = 'zaec'
  }

  initSpeed() {
    this.setSpeed(5);
  }
}

export default Hare