import './style.css';

import pageLoad from './init_page'

import handleTabSwitch from './tab_switch'

pageLoad()

document
  .querySelectorAll('li')
  .forEach(li => {
    li.addEventListener('click', handleTabSwitch)
  })