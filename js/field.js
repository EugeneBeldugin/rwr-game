import Hare from './hare.js'
import Wolf from './wolf.js'
import Stone from './stone.js'
import Berry from './berry.js'

class Field {
  #runner1;
  #runner2;
  
  constructor() {
    this.#runner1 = new Hare()
    this.#runner2 = new Wolf()
    this.track1 = this.generateTrack()
    this.track2 = this.generateTrack()
    this.barrier1 = this.#generateBarrier()
    this.barrier2 = this.#generateBarrier()
  }

  init() {
    this.#runner1.init()
    this.#runner1.initSpeed()
    this.track1.childNodes[this.#runner1.position].append(this.#runner1.element)

    this.barrier1 && this.barrier1.render(this.track1.childNodes[this.#runner1.position + 1])
    
    this.#runner2.init()
    this.#runner2.initSpeed()
    this.track2.childNodes[this.#runner2.position].append(this.#runner2.element)

    this.barrier2 && this.barrier2.render(this.track2.childNodes[this.#runner2.position + 1])
  }

  refresh() {
    window.location.reload()
  }

  generateTrack() {
    const stadium = document.querySelector('.stadium')

    const track = document.createElement('div')
    track.classList.add('track')
    track.style.left = 0

    const cell = document.createElement('div')
    cell.classList.add('cell')

    for (let i = 0; i < 30; i++) {
      track.appendChild(cell.cloneNode())
    }

    stadium.append(track)
    return track
  }

  run() {
    this.track1.childNodes[this.#runner1.position].removeChild(this.#runner1.element)
    this.track1.childNodes[this.#runner1.position + 1].innerHTML = ''

    if (this.#runner1.getLength() + this.#runner1.position > 29) {
      this.track1.childNodes[29].append(this.#runner1.element)
      this.#displayEnd(this.#runner1.name)
    } else {
      this.track1.childNodes[this.#runner1.run()].append(this.#runner1.element)
      this.barrier1 && this.#runner1.setAffect(this.barrier1.getAffect())
      this.barrier1 = this.#generateBarrier()
      if (this.#runner1.position !== 0) this.barrier1 && this.barrier1.render(this.track1.childNodes[this.#runner1.position + 1])
    }

    
    this.track2.childNodes[this.#runner2.position].removeChild(this.#runner2.element)
    this.track2.childNodes[this.#runner2.position + 1].innerHTML = ''
    this.track2.childNodes[this.#runner2.run()].append(this.#runner2.element)

    this.barrier2 && this.#runner2.setAffect(this.barrier2.getAffect())
    this.barrier2 = this.#generateBarrier()
    this.barrier2 && this.barrier2.render(this.track2.childNodes[this.#runner2.position + 1])

    this.moveTrack()

    if (this.#runner2.position >= this.#runner1.position) {
      this.#displayEnd(this.#runner2.name)
    }
  }

  moveTrack() {
    const position = parseInt(this.track2.style.left)
    this.track1.style.left = position - (110 * 3) + 'px'
    this.track2.style.left = position - (110 * 3) + 'px'
  }

  #generateBarrier() {
    let barrier = null
    const number = Math.floor(Math.random() * 3) + 1;
    if (number === 2) {
      barrier = new Stone()
    } else if (number === 3) {
      barrier = new Berry()
    } else {
      return barrier
    }
    barrier.init()
    barrier.initImage()
    barrier.initAffect()
    return barrier
  }

  #displayEnd(winner) {
    const title = document.createElement('h1')
    title.innerHTML = `The ${winner} wins`
    document.querySelector('body').prepend(title)

    const runBtn = document.querySelector('.js-run-btn')
    runBtn.classList.add('disabled')

    const refreshBtn = document.querySelector('.js-refresh-btn')
    refreshBtn.classList.remove('disabled')
    refreshBtn.addEventListener('click', this.refresh)
  }
}

export default Field