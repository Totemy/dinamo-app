export const PHONE = '+380 (98) 765 43 21'

export const navLinks = [
  { href: '#main', label: 'home' },
  { href: '#menu', label: 'menu' },
  { href: '#delivery', label: 'delivery' },
  { href: '#contact', label: 'contacts' },
  { href: '#discount', label: 'stock' }
]

export const socialLinks = [
  { icon: '/img/header/instagram.svg', label: 'Instagram' },
  { icon: '/img/header/facebook.svg', label: 'Facebook' },
  { icon: '/img/header/twitter.svg', label: 'Twitter' }
]

export const menuCategories = [
  { image: '/img/carousel/1.webp', text: 'Salads' },
  { image: '/img/carousel/2.webp', text: 'Baking' },
  { image: '/img/carousel/3.webp', text: 'Soups' },
  { image: '/img/carousel/4.webp', text: 'Grilled dishes' },
  { image: '/img/carousel/5.webp', text: 'Hot dishes' },
  { image: '/img/carousel/6.webp', text: 'Sauces' }
]

const ASSORTMENT_CAPTION = 'There will be some text here, perhaps the name of a dish.'

export const assortmentCards = [
  { image: '/img/assortiment/elips/1.webp', alt: 'Georgian dish', text: ASSORTMENT_CAPTION },
  { image: '/img/assortiment/elips/2.webp', alt: 'Georgian dish', text: ASSORTMENT_CAPTION },
  { image: '/img/assortiment/elips/3.webp', alt: 'Georgian dish', text: ASSORTMENT_CAPTION }
]

export const deliveryOptions = [
  {
    image: '/img/deliver/del1.jpg',
    alt: 'Courier delivery',
    text: 'Delivery by our couriers for orders over 1000 UAH'
  },
  {
    image: '/img/deliver/del2.png',
    alt: 'Food delivery service',
    text: 'Delivery via food delivery service and so on'
  },
  {
    image: '/img/deliver/del2.png',
    alt: 'Pickup from the restaurant',
    text: 'Delivery via food delivery service and so on'
  }
]

export const galleryImages = Array.from({ length: 8 }, (_, i) => ({
  src: `/img/gallery/gal${i + 1}.webp`,
  alt: `Dinamo restaurant interior and dishes, photo ${i + 1}`
}))

export const menuPagePreview = galleryImages.slice(0, 4)

export const footerContacts = [PHONE, 'Kyiv, Khreshchatyk metro station', 'Email: mail@mal.ua']

export const footerLegal = ['Privacy Policy', 'User Agreement']
