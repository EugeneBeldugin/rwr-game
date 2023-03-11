import Barrier from './barrier.js'

class Berry extends Barrier {
  constructor(name) {
    super(name);
    this.name = 'yagoda'
    this.image = './img/yagoda.png';
  }
  
  initAffect() {
    const number = Math.floor(Math.random() * 3) + 1;
    this.setAffect(number);
  }

  initImage() {
    this.setImage(this.image)
  }
}

export default Berry