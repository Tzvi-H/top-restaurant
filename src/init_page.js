import Restaurant from './restaurant.jpeg';

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

const pageLoad = () => {
  const container = document.querySelector('#content')

  container.append(
    createHeadline(), 
    createImage(),
    createRestaurantInfo()
  )
}

export default pageLoad