import Field from './field.js'

const field = new Field();

field.init()

const runBtn = document.querySelector('.js-run-btn')
runBtn.addEventListener('click', field.run.bind(field))