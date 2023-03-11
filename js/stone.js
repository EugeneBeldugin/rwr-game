import Barrier from './barrier.js'

class Stone extends Barrier {
  constructor(name) {
    super(name);
    this.name = 'kamen'
    this.image = './img/kamen.png';
  }

  initAffect() {
    const number = -Math.floor(Math.random() * 3) - 1;
    this.setAffect(number);
  }

  initImage() {
    this.setImage(this.image)
  }
}

export default Stone