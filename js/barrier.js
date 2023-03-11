class Barrier {
  #affect;
  #image;

  constructor(name) {
    this.element = document.createElement('div')
    this.name = name
  }

  init() {
    this.element.classList.add('barrier')
    this.element.classList.add(this.name)
  }

  getAffect() {
    return this.#affect
  }

  render(element) {
    element.append(this.element)
  }

  setAffect(value) {
    this.#affect = value;
  }

  setImage(value) {
    this.#image = value;
  }
}

export default Barrier