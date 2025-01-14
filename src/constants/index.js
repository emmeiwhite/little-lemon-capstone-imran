import greekSaladURL from '../assets/greek salad.jpg'
import bruchettaURL from '../assets/bruchetta.jpg'
import lemonDessertURL from '../assets/lemon dessert.jpg'
import reviewer1URL from '../assets/Reviewer1.jpg'
import reviewer2URL from '../assets/Reviewer2.jpg'
import reviewer3URL from '../assets/Reviewer3.jpg'
import reviewer4URL from '../assets/Reviewer4.jpg'
import adrianImgURL from '../assets/Adrian.jpg'
import marioImgURL from '../assets/Mario.jpg'
import { FaXTwitter, FaSquareFacebook, FaInstagram } from 'react-icons/fa6'

export const navItems = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/#aboutUs'
  },
  {
    name: 'Specials',
    path: '/#specials'
  },
  {
    name: 'Reservations',
    path: 'booking'
  }
]

export const specialsData = [
  {
    id: 1,
    title: 'Greek Salad',
    price: 12.99,
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
    imgURL: greekSaladURL
  },
  {
    id: 2,
    title: 'Bruchetta',
    price: 5.99,
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    imgURL: bruchettaURL
  },
  {
    id: 3,
    title: 'Lemon Dessert',
    price: 5.0,
    description:
      'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    imgURL: lemonDessertURL
  }
]

export const reviewers = [
  {
    id: 1,
    name: 'Tim',
    review: `The food here is amazing, and the service is top-notch!`,
    avatarURL: reviewer1URL
  },
  {
    id: 2,
    name: 'Anna',
    review: `Authentic flavors and a friendly staff. A must-visit!`,
    avatarURL: reviewer2URL
  },
  {
    id: 3,
    name: 'Steve',
    review: `Perfect for events. Delicious food and great service.`,
    avatarURL: reviewer3URL
  },
  {
    id: 4,
    name: 'Sarah',
    review: `Hidden gem with fantastic Mediterranean dishes!`,
    avatarURL: reviewer4URL
  }
]

export const aboutUsData = {
  adrianImgURL: adrianImgURL,
  marioImgURL: marioImgURL,
  description: `Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.`
}

export const contactInformation = [
  ['Address', 'Chicago, Illinois, USA'],
  ['Phone', '312-938-7229'],
  ['Email', 'hello@littlelemon.com']
]

export const socialMediaInformation = [
  ['https://www.x.com', <FaXTwitter />],
  ['https://www.facebook.com', <FaSquareFacebook />],
  ['https://www.instagram.com', <FaInstagram />]
]
