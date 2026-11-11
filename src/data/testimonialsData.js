import { resolveItemImages } from '../utils/assetUrl'

export const SPECIAL_OFFERS = resolveItemImages([
  {
    id: 'offer-morning',
    tag: 'Morning Ritual • Save 20%',
    title: 'Roast & Croissant Duo',
    description:
      'Pair any Hot Cappuccino or Latte with a warm French Butter Croissant before 11:00 AM for ₹329.',
    ctaLabel: 'Order Cappuccino',
    targetId: 'velvet-cappuccino',
    image: '/images/snack-croissant.jpg',
  },
  {
    id: 'offer-afternoon',
    tag: 'Afternoon Indulgence',
    title: 'Cake & Cold Brew Pairing',
    description:
      'Enjoy a slice of Triple Dark Chocolate Ganache Cake with our 18-Hour Kyoto Cold Brew for ₹499.',
    ctaLabel: 'Explore Offer',
    targetId: 'dark-ganache-truffle-cake',
    image: '/images/cake-chocolate.jpg',
  },
  {
    id: 'offer-delivery',
    tag: 'Free Delivery Over ₹799',
    title: 'Weekend Brunch Box',
    description:
      'Mix two artisan sandwiches or bistro burgers with chilled drinks and receive complimentary doorstep delivery.',
    ctaLabel: 'Build Your Box',
    targetPath: '/products',
    image: '/images/burger.jpg',
  },
])

export const CAFE_SPECIALTIES = [
  {
    icon: 'Flame',
    title: 'Small-Batch Roasting',
    description:
      'Roasted three times weekly in small drums to preserve delicate caramel sweetness and floral aromatics.',
  },
  {
    icon: 'Award',
    title: 'Direct-Trade Arabica',
    description:
      'Ethically sourced 100% specialty-grade beans from family farms across Ethiopia, Colombia, and Costa Rica.',
  },
  {
    icon: 'Croissant',
    title: 'From-Scratch Bakery',
    description:
      'Croissants, cakes, and sourdough paninis baked fresh on-site each morning using cultured butter.',
  },
  {
    icon: 'HeartHandshake',
    title: 'Warm Hospitality',
    description:
      'Trained baristas who remember your favorite roast, milk preference, and welcome every guest like family.',
  },
]

export const CUSTOMER_REVIEWS = [
  {
    id: 'r1',
    name: 'Clara Henderson',
    role: 'Architect & Morning Regular',
    rating: 5,
    favorite: 'Velvet Rosetta Cappuccino',
    quote:
      'The aroma hits you the second you step inside. Their cappuccino foam is effortlessly silky, and the leather booths with fast Wi-Fi make it my favorite studio spot in the city.',
  },
  {
    id: 'r2',
    name: 'Marcus Sterling',
    role: 'Food Photographer',
    rating: 5,
    favorite: 'Brioche Burger & Kyoto Cold Brew',
    quote:
      'Not only is the coffee world-class, their kitchen actually cooks like a true bistro. The brioche burger paired with 18-hour cold brew is unbeatable.',
  },
  {
    id: 'r3',
    name: 'Priya Nair',
    role: 'Product Lead',
    rating: 5,
    favorite: 'Uji Matcha Latte & Ganache Cake',
    quote:
      'We booked Stackly Cafe catering for our 40-person design sprint and every single latte arrived piping hot with genuine café flavor. Truly unmatched attention to detail.',
  },
]

export const CAFE_MILESTONES = [
  {
    year: '2016',
    title: 'A Single 5kg Drum Roaster',
    description:
      'Started in a sunlit brick corner with one espresso machine, family recipes, and a dream to slow down morning coffee rituals.',
  },
  {
    year: '2019',
    title: 'Artisan Bakery & Bistro Expansion',
    description:
      'Opened our in-house pastry oven and sourdough kitchen, pairing single-origin brews with croissants, cakes, and warm paninis.',
  },
  {
    year: '2023',
    title: 'Direct Farm Partnerships',
    description:
      'Established transparent, direct-trade harvests with growers in Yirgacheffe and Huila, earning City Best Coffeehouse honors.',
  },
  {
    year: 'Today',
    title: 'Your Cozy Third Place',
    description:
      'Serving thousands of happy cups weekly across dine-in, online ordering, home delivery, and bespoke event coffee catering.',
  },
]

