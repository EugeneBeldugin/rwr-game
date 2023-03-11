import Runner from './runner.js'

class Wolf extends Runner {
  constructor(name) {
    super(name)
    this.name = 'volk'
  }

  initSpeed() {
    this.setSpeed(3);
  }
}

export default Wolf