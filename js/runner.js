class Runner {
  #affect = 0;
  #speed;

  constructor(name) {
    this.name = name
    this.position = 0
    this.element = document.createElement('div')
  }

  init() {
    this.element.classList.add('player')
    this.element.classList.add(this.name)
  }

  run() {
    this.position = this.#speed + this.#affect + this.position
    return this.position;
  }

  setAffect(value) {
    this.#affect = value;
  }

  getLength() {
    return this.#speed + this.#affect
  }

  setSpeed(number) {
    this.#speed = number;
  }
}

export default Runner