import createMenu from './menu'
import createContact from './contact'

const handleTabSwitch = event => {
  const id = event.target.id;
  const tabView = document.querySelector('#tabView')
  const newChild = id === 'menu' ? createMenu() : createContact()
  tabView.replaceChildren(newChild)
}

export default handleTabSwitch