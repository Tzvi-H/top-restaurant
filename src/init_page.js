import Restaurant from './restaurant.jpeg';

const createImage = () => {
  const image = new Image();
  image.src = Restaurant
  console.log(image)
  return image
}

const createHeadline = () => {
  const headline = document.createElement('h1')
  headline.textContent = 'Welcome to the Restaurant'
  return headline
}

const createRestaurantInfo = () => {

}

const pageLoad = () => {
  const container = document.querySelector('#content')

  container.append(
    createHeadline(), 
    createImage()
  )
  // createRestaurantInfo()
}

export default pageLoad