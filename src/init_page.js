import Restaurant from './restaurant.jpeg';

const createTabs = () => {
  const tabs = document.createElement('ul')
  
  const menu = document.createElement('li')
  menu.textContent = 'view menu'
  menu.id = 'menu'

  const contact = document.createElement('li')
  contact.textContent = 'contact us'
  contact.id = 'contact'
  
  tabs.append(menu, contact)
  return tabs
}

const createImage = () => {
  const image = new Image();
  image.src = Restaurant
  return image
}

const createHeadline = () => {
  const headline = document.createElement('h1')
  headline.textContent = 'Welcome to the Webpack Restaurant'
  return headline
}

const createRestaurantInfo = () => {
  const p = document.createElement('p')
  p.textContent = 'This p tag was creating with javascript and webpack'
  return p;
}

const createTabView = () => {
  const tabView = document.createElement('div')
  tabView.id = 'tabView'
  return tabView;
}

const pageLoad = () => {
  const container = document.querySelector('#content')

  container.append(
    createHeadline(),
    createTabs(),
    createTabView(),
    createImage(),
    createRestaurantInfo()
  )
}

export default pageLoad