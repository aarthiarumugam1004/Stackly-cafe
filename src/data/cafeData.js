export const formatPrice = (amount) =>
  `₹${Math.round(amount).toLocaleString('en-IN')}`

export const MENU_CATEGORIES = [
  'Hot Coffee',
  'Cold Coffee',
  'Tea',
  'Milkshakes',
  'Fresh Juices',
  'Cakes',
  'Burgers',
  'Sandwiches',
  'Snacks',
  'Desserts',
]

export const DRINK_SIZES = [
  { label: 'Small (8 oz)', priceDelta: -30 },
  { label: 'Regular (12 oz)', priceDelta: 0 },
  { label: 'Large (16 oz)', priceDelta: 50 },
]

export const FOOD_SIZES = [
  { label: 'Single Serving', priceDelta: 0 },
  { label: 'Cafe Duo Share', priceDelta: 180 },
]

export const MILK_OPTIONS = ['Whole Milk', 'Oat Milk (+₹45)', 'Almond Milk (+₹45)', 'Soy Milk']
export const SWEETNESS_OPTIONS = ['Unsweetened', 'Lightly Sweet', 'Regular', 'Extra Sweet']
export const EXTRA_OPTIONS = [
  { label: 'Extra Espresso Shot', price: 60 },
  { label: 'House Caramel Drizzle', price: 35 },
  { label: 'Whipped Cream Crown', price: 40 },
  { label: 'Warm Cinnamon Dust', price: 20 },
]

export const FOOD_EXTRAS = [
  { label: 'Warmed in Artisan Oven', price: 0 },
  { label: 'Side of Berry Compote', price: 65 },
  { label: 'Extra Aged Cheddar / Dip', price: 75 },
]

export const CAFE_PRODUCTS = [
  // 1. Hot Coffee
  {
    id: 'velvet-cappuccino',
    name: 'Velvet Rosetta Cappuccino',
    category: 'Hot Coffee',
    price: 220,
    rating: 4.9,
    reviews: 184,
    badge: 'Popular',
    popular: true,
    bestSeller: false,
    image: '/images/hot-cappuccino.jpg',
    shortDescription:
      'Double ristretto Ethiopian espresso balanced with silky microfoam and cocoa nib dusting.',
    fullDescription:
      'Our signature Velvet Rosetta Cappuccino begins with a sweet, syrupy double shot pulled from our freshly roasted single-origin Ethiopian Yirgacheffe and Colombian Huila blend. Steamed to a glossy microfoam at 145°F and crowned with organic raw cacao dust, it delivers notes of toasted hazelnut, dark caramel, and velvety cocoa.',
    prepTime: '3–4 mins',
    calories: '140 kcal',
    origin: 'Ethiopia & Colombia Blend',
    isBeverage: true,
  },
  {
    id: 'caramel-oat-latte',
    name: 'Salted Caramel Cream Latte',
    category: 'Hot Coffee',
    price: 260,
    rating: 4.8,
    reviews: 142,
    badge: 'Popular',
    popular: true,
    bestSeller: false,
    image: '/images/hot-latte.jpg',
    shortDescription:
      'Rich espresso folded into steamed velvety milk and house-cooked sea salt caramel.',
    fullDescription:
      'Slow-cooked brown butter caramel with flaky Maldon sea salt meets two pulls of our Signature House Roast. Smooth, comforting, and aromatic without overwhelming sweetness, crafted for unhurried mornings.',
    prepTime: '4 mins',
    calories: '210 kcal',
    origin: 'Guatemalan Antigua',
    isBeverage: true,
  },
  {
    id: 'artisan-pour-over',
    name: 'Single-Origin V60 Espresso Flight',
    category: 'Hot Coffee',
    price: 280,
    rating: 4.9,
    reviews: 96,
    popular: true,
    image: '/images/hot-espresso.jpg',
    shortDescription:
      'Hand-poured aromatic dark roast highlighting notes of dark berry, roasted almond, and cacao.',
    fullDescription:
      'Brewed to order through our precision pour-over bar or pulled as a classic double espresso with thick tiger-striped crema. Ideal for purists seeking bright acidity, clean floral aromatics, and lingering cocoa warmth.',
    prepTime: '5 mins',
    calories: '15 kcal',
    origin: 'Costa Rica Tarrazu',
    isBeverage: true,
  },

  // 2. Cold Coffee
  {
    id: 'iced-vanilla-espresso',
    name: 'Iced Madagascar Vanilla Latte',
    category: 'Cold Coffee',
    price: 270,
    rating: 4.9,
    reviews: 210,
    badge: 'Chilled Favorite',
    popular: true,
    bestSeller: false,
    image: '/images/cold-coffee.jpg',
    shortDescription:
      'Chilled double espresso layered over crystal ice, cold milk, and real vanilla bean syrup.',
    fullDescription:
      'Two velvety shots of our medium-dark roast cascade through cold farmstead milk and house-steeped Madagascar bourbon vanilla bean syrup over hand-cracked crystal ice.',
    prepTime: '3 mins',
    calories: '185 kcal',
    origin: 'Colombian Supremo',
    isBeverage: true,
  },
  {
    id: 'nitro-cold-brew',
    name: '18-Hour Kyoto Cold Brew',
    category: 'Cold Coffee',
    price: 240,
    rating: 4.8,
    reviews: 134,
    badge: 'House Roast',
    popular: true,
    image: '/images/cold-brew.jpg',
    shortDescription:
      'Slow-steeped 18 hours in cold filtered water for ultra-smooth chocolatey depth.',
    fullDescription:
      'Coarse-ground Brazilian Santos and Sumatran beans steeped patiently for 18 hours in cold spring water. Zero bitterness, naturally sweet finish, and rich dark chocolate complexity.',
    prepTime: '2 mins',
    calories: '25 kcal',
    origin: 'Brazil & Sumatra',
    isBeverage: true,
  },
  {
    id: 'iced-mocha-frappe',
    name: 'Chilled Belgian Dark Mocha',
    category: 'Cold Coffee',
    price: 290,
    rating: 4.7,
    reviews: 89,
    image: '/images/iced-mocha-frappe.jpg',
    shortDescription:
      'Velvety chilled espresso swirled with 70% Belgian dark cocoa and silky cold milk.',
    fullDescription:
      'A sleek chilled coffee indulgence uniting melted 70% Belgian dark chocolate ganache with freshly pulled espresso and velvety cold milk in a crystal glass mug.',
    prepTime: '4 mins',
    calories: '245 kcal',
    origin: 'House Espresso Blend',
    isBeverage: true,
  },

  // 3. Tea
  {
    id: 'ceremonial-matcha-latte',
    name: 'Ceremonial Uji Matcha Latte',
    category: 'Tea',
    price: 290,
    rating: 4.9,
    reviews: 158,
    badge: 'Staff Pick',
    bestSeller: true,
    image: '/images/tea-matcha.jpg',
    shortDescription:
      'First-harvest Japanese green tea stone-milled and hand-whisked with silky oat or dairy milk.',
    fullDescription:
      'Sourced directly from family tea gardens in Uji, Kyoto. Hand-whisked using a bamboo chasen for vibrant umami richness, natural sweetness, and calm, steady energy.',
    prepTime: '4 mins',
    calories: '150 kcal',
    origin: 'Uji, Kyoto, Japan',
    isBeverage: true,
  },
  {
    id: 'spiced-masala-chai',
    name: 'Cardamom & Cinnamon Chai Latte',
    category: 'Tea',
    price: 180,
    rating: 4.8,
    reviews: 119,
    image: '/images/chai-latte-cup.jpg',
    shortDescription:
      'Assam black tea simmered with freshly crushed green cardamom, ginger, clove, and cinnamon.',
    fullDescription:
      'Brewed fresh daily from whole roasted spices, organic ginger root, and bold Assam leaves, finished with velvety steamed milk and raw wildflower honey.',
    prepTime: '4 mins',
    calories: '170 kcal',
    origin: 'Assam, India',
    isBeverage: true,
  },
  {
    id: 'earl-grey-lavender',
    name: 'Aged Earl Grey & Lemon Tea',
    category: 'Tea',
    price: 210,
    rating: 4.7,
    reviews: 73,
    image: '/images/tea-chai.jpg',
    shortDescription:
      'Bergamot black tea served with citrus zest shortbread cookies for a bright afternoon steep.',
    fullDescription:
      'Soothing aromatic bergamot black tea steeped gently to amber clarity and paired alongside crisp lemon-zest bakery cookies.',
    prepTime: '4 mins',
    calories: '130 kcal',
    origin: 'Ceylon & Assam',
    isBeverage: true,
  },

  // 4. Milkshakes
  {
    id: 'belgian-dark-chocolate-shake',
    name: 'Belgian Chocolate Hazelnut Shake',
    category: 'Milkshakes',
    price: 310,
    rating: 4.9,
    reviews: 165,
    badge: 'Indulgent',
    image: '/images/chocolate-shake.jpg',
    shortDescription:
      'Hand-spun dark chocolate gelato and roasted Piedmont hazelnut praline in a chilled glass bottle.',
    fullDescription:
      'Made with small-batch artisan chocolate gelato, toasted Piedmont hazelnut spread, and cold cream with rich cocoa fudge swirls.',
    prepTime: '4 mins',
    calories: '420 kcal',
    origin: 'Artisan Gelato Bar',
    isBeverage: true,
  },
  {
    id: 'espresso-cookie-shake',
    name: 'Mocha Cookie Crumble Shake',
    category: 'Milkshakes',
    price: 320,
    rating: 4.8,
    reviews: 108,
    badge: 'Best Seller',
    bestSeller: true,
    image: '/images/milkshake.jpg',
    shortDescription:
      'Vanilla bean ice cream spun with chilled espresso, dark cocoa cookies, and whipped cream.',
    fullDescription:
      'A cafe classic uniting velvety vanilla bean ice cream, a bold shot of espresso, crushed dark cocoa cookies, and fudge ribbons crowned with chocolate whipped cream.',
    prepTime: '4 mins',
    calories: '445 kcal',
    origin: 'Artisan Gelato Bar',
    isBeverage: true,
  },

  // 5. Fresh Juices
  {
    id: 'valencia-orange-press',
    name: 'Fresh-Pressed Valencia Citrus',
    category: 'Fresh Juices',
    price: 210,
    rating: 4.9,
    reviews: 112,
    badge: 'Cold Pressed',
    image: '/images/fresh-juice.jpg',
    shortDescription:
      '100% pure cold-pressed sun-ripened Valencia oranges with a hint of ginger zest.',
    fullDescription:
      'Pressed to order every morning with zero added sugar or water. Bright, vitamin-rich, naturally sweet citrus balanced with a delicate touch of fresh ginger.',
    prepTime: '3 mins',
    calories: '115 kcal',
    origin: 'Orchard Fresh Daily',
    isBeverage: true,
  },
  {
    id: 'sunrise-citrus-mint',
    name: 'Golden Mango & Lime Cooler',
    category: 'Fresh Juices',
    price: 240,
    rating: 4.8,
    reviews: 84,
    image: '/images/mango-citrus-juice.jpg',
    shortDescription:
      'Ripe Alphonso mango blended with fresh lime juice over crushed ice.',
    fullDescription:
      'A revitalizing golden blend of velvet mango nectar and bright cold-pressed lime wedges served chilled over crystal ice.',
    prepTime: '3 mins',
    calories: '135 kcal',
    origin: 'Orchard Fresh Daily',
    isBeverage: true,
  },

  // 6. Cakes
  {
    id: 'dark-ganache-truffle-cake',
    name: 'Triple Dark Chocolate Ganache Cake',
    category: 'Cakes',
    price: 340,
    rating: 4.9,
    reviews: 201,
    badge: 'House Favorite',
    image: '/images/cake-chocolate.jpg',
    shortDescription:
      'Three moist espresso-kissed cocoa sponge layers coated in glossy 70% dark chocolate ganache.',
    fullDescription:
      'Baked fresh every dawn in our pastry kitchen using single-origin dark chocolate, cultured butter, and a touch of espresso to deepen the rich cocoa crumb.',
    prepTime: 'Ready to Serve',
    calories: '460 kcal',
    origin: 'In-House Bakery',
    isBeverage: false,
  },
  {
    id: 'strawberry-velvet-cheesecake',
    name: 'Classic Berry Basque Cheesecake',
    category: 'Cakes',
    price: 320,
    rating: 4.8,
    reviews: 147,
    image: '/images/cake-cheesecake.jpg',
    shortDescription:
      'Creamy vanilla bean cheesecake on a butter biscuit crust topped with macerated strawberries.',
    fullDescription:
      'Velvety slow-baked cream cheese custard paired with warm-spiced strawberry compote and a crisp golden graham crust. Pairs impeccably with iced coffee or black tea.',
    prepTime: 'Ready to Serve',
    calories: '410 kcal',
    origin: 'In-House Bakery',
    isBeverage: false,
  },

  // 7. Burgers
  {
    id: 'brioche-double-bistro-burger',
    name: 'Artisan Brioche Cafe Burger',
    category: 'Burgers',
    price: 480,
    rating: 4.9,
    reviews: 176,
    badge: 'Chef Signature',
    image: '/images/burger.jpg',
    shortDescription:
      'Double seared patty, aged cheddar, caramelized onions, crisp greens, and smoky house aioli.',
    fullDescription:
      'Crafted on a house-baked toasted sesame brioche bun with two seared prime patties, melted aged sharp cheddar, pickled gherkins, ripe heirloom tomato, and signature roasted garlic aioli.',
    prepTime: '10–12 mins',
    calories: '680 kcal',
    origin: 'Stackly Bistro Kitchen',
    isBeverage: false,
  },
  {
    id: 'truffle-mushroom-burger',
    name: 'Caramelized Onion & Pretzel Burger',
    category: 'Burgers',
    price: 440,
    rating: 4.7,
    reviews: 92,
    image: '/images/mushroom-burger.jpg',
    shortDescription:
      'Toasted sesame pretzel bun layered with seared patty, sweet balsamic onions, egg, and fresh herbs.',
    fullDescription:
      'Savory seared burger stacked on a glossy sesame pretzel roll with slow-caramelized balsamic onions, golden farm egg, and fresh garden parsley.',
    prepTime: '10–12 mins',
    calories: '610 kcal',
    origin: 'Stackly Bistro Kitchen',
    isBeverage: false,
  },

  // 8. Sandwiches
  {
    id: 'sourdough-pesto-panini',
    name: 'Grilled Pesto & Mozzarella Panini',
    category: 'Sandwiches',
    price: 360,
    rating: 4.8,
    reviews: 129,
    badge: 'Cafe Favorite',
    image: '/images/sandwich.jpg',
    shortDescription:
      'Crisp country sourdough pressed with fresh basil pesto, vine tomatoes, and roasted sweet potato fries.',
    fullDescription:
      'Artisan stone-baked multigrain sourdough pressed golden-brown around melted mozzarella, garden greens, and heirloom tomatoes, served with crisp sweet potato fries.',
    prepTime: '7–9 mins',
    calories: '490 kcal',
    origin: 'Stackly Bistro Kitchen',
    isBeverage: false,
  },
  {
    id: 'smoked-turkey-club',
    name: 'Avocado & Poached Egg Sourdough',
    category: 'Sandwiches',
    price: 390,
    rating: 4.8,
    reviews: 104,
    image: '/images/avocado-sandwich.jpg',
    shortDescription:
      'Charred country sourdough topped with fanned Haas avocado, soft poached egg, and chili threads.',
    fullDescription:
      'Thick-cut artisanal dark sourdough brushed with garlic olive oil, layered with smashed avocado, fanned fresh avocado slices, a warm poached egg, and mixed garden greens.',
    prepTime: '8 mins',
    calories: '470 kcal',
    origin: 'Stackly Bistro Kitchen',
    isBeverage: false,
  },

  // 9. Snacks
  {
    id: 'french-butter-croissant',
    name: 'Cultured French Butter Croissant',
    category: 'Snacks',
    price: 190,
    rating: 4.9,
    reviews: 238,
    badge: 'Best Seller',
    popular: true,
    bestSeller: true,
    image: '/images/butter-croissant.jpg',
    shortDescription:
      '27 honeycomb layers of flaky, golden French-butter pastry baked crisp every morning.',
    fullDescription:
      'Hand-laminated over three days using Normandy-style cultured butter for shatteringly crisp golden ridges and an airy, tender honeycomb crumb inside.',
    prepTime: 'Ready / Warmed',
    calories: '310 kcal',
    origin: 'Morning Pastry Oven',
    isBeverage: false,
  },
  {
    id: 'almond-praline-danish',
    name: 'Raspberry Swirl Brioche Danish',
    category: 'Snacks',
    price: 230,
    rating: 4.8,
    reviews: 95,
    image: '/images/snack-croissant.jpg',
    shortDescription:
      'Spiral laminated puff pastry dipped in berry glaze and topped with freeze-dried raspberries.',
    fullDescription:
      'Golden spiral-laminated pastry baked crisp, half-dipped in silky ruby berry glaze, and finished with tangy freeze-dried raspberries.',
    prepTime: 'Ready / Warmed',
    calories: '340 kcal',
    origin: 'Morning Pastry Oven',
    isBeverage: false,
  },

  // 10. Desserts
  {
    id: 'espresso-classic-tiramisu',
    name: 'House Espresso Tiramisu',
    category: 'Desserts',
    price: 330,
    rating: 4.9,
    reviews: 189,
    badge: 'Best Seller',
    bestSeller: true,
    image: '/images/dessert-tiramisu.jpg',
    shortDescription:
      'Savoiardi biscuits soaked in Stackly Cafe espresso layered with whipped mascarpone and cocoa.',
    fullDescription:
      'Crafted using authentic Italian mascarpone mousse, ladyfingers steeped in freshly pulled Stackly Cafe espresso, and finished with bitter Valrhona cocoa powder.',
    prepTime: 'Ready to Serve',
    calories: '390 kcal',
    origin: 'In-House Patisserie',
    isBeverage: false,
  },
  {
    id: 'caramel-espresso-panna',
    name: 'Warm Walnut Fudge Brownie',
    category: 'Desserts',
    price: 290,
    rating: 4.8,
    reviews: 82,
    image: '/images/chocolate-brownie.jpg',
    shortDescription:
      'Dense dark cocoa walnut brownie served warm with vanilla bean cream and dark chocolate drizzle.',
    fullDescription:
      'Rich espresso-infused dark chocolate fudge brownie studded with toasted walnuts and topped with cool vanilla bean cream and warm cocoa syrup.',
    prepTime: 'Ready / Warmed',
    calories: '415 kcal',
    origin: 'In-House Patisserie',
    isBeverage: false,
  },
]

