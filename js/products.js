/**
 * Crochet & Co. - Products Database
 * Handmade Crochet Boutique
 * All prices in Pakistani Rupees (PKR)
 */

const CATEGORIES = [
  {
    id: 'keychains',
    name: 'Crochet Keychains',
    slug: 'keychains',
    description: 'Delightful floral, fruit, and amigurumi key charms to brighten your keys and bags.',
    image: 'images/categories/category-keychains.jpg',
    fallbackImage: 'images/product-images/keychain-daisy.jpg',
    tagline: 'Tiny Tokens of Joy',
    itemCount: 5
  },
  {
    id: 'earrings',
    name: 'Handmade Earrings',
    slug: 'earrings',
    description: 'Ultra-lightweight, hypoallergenic crochet florals and geometric drops crafted with milk cotton.',
    image: 'images/categories/category-earrings.jpg',
    fallbackImage: 'images/product-images/earrings-floral.jpg',
    tagline: 'Feather-Light Elegance',
    itemCount: 5
  },
  {
    id: 'pouches',
    name: 'Crochet Mini Pouches',
    slug: 'pouches',
    description: 'Charming vintage kiss-lock coin purses and drawstring pouches for coins, lipstick, and AirPods.',
    image: 'images/categories/category-pouches.jpg',
    fallbackImage: 'images/product-images/pouch-granny-square.jpg',
    tagline: 'Vintage Charm & Utility',
    itemCount: 5
  },
  {
    id: 'hairbands',
    name: 'Crochet Hairbands',
    slug: 'hairbands',
    description: 'Soft floral headbands, cable-knit wraps, and vintage scalloped bandanas that pamper your hair.',
    image: 'images/categories/category-hairbands.jpg',
    fallbackImage: 'images/product-images/hairband-sage-floral.jpg',
    tagline: 'Cottagecore Grace',
    itemCount: 5
  },
  {
    id: 'hair-clips',
    name: 'Handmade Hair Clips',
    slug: 'hair-clips',
    description: 'Dainty crochet daisies, berries, and pastel barrettes mounted on snag-free gold alligator clips.',
    image: 'images/categories/category-hairclips.jpg',
    fallbackImage: 'images/product-images/hairclips-floral-set.jpg',
    tagline: 'Whimsical Hair Accents',
    itemCount: 5
  },
  {
    id: 'jewellery',
    name: 'Aesthetic Jewellery',
    slug: 'jewellery',
    description: 'Dreamy cottagecore chokers, micro-crochet rose pendants, flower garden bracelets, and dainty butterfly rings.',
    image: 'images/categories/category-jewellery.jpg',
    fallbackImage: 'images/product-images/jewellery-daisy-choker.jpg',
    tagline: 'Dainty & Dreamy Adornments',
    itemCount: 5
  }
];

const PRODUCTS = [
  // CATEGORY 1: KEYCHAINS
  {
    id: 1,
    name: 'Daisy Bloom Crochet Keychain',
    slug: 'daisy-bloom-crochet-keychain',
    category: 'keychains',
    categoryName: 'Crochet Keychains',
    price: 650,
    originalPrice: 850,
    rating: 4.9,
    reviewsCount: 38,
    badge: 'Best Seller',
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    shortDesc: 'A cheerful blooming daisy keychain handcrafted with plush milk cotton yarn and a premium gold lobster swivel clip.',
    description: 'Add a sunny burst of handmade happiness to your keys, handbag, or backpack! Hand-crocheted petal by petal using premium 5-ply milk cotton yarn, this blooming daisy is pillowy, lightweight, and durable. Comes with an anti-tarnish gold-plated lobster clasp and delicate green leaf charm.',
    materials: '100% Combed Milk Cotton Yarn, Polyester Fiberfill, Gold-plated Zinc Alloy Hardware',
    dimensions: 'Flower: 7.5 cm diameter | Total Length with Clasp: 12.5 cm',
    care: 'Spot clean gently with a damp microfiber cloth and mild baby soap. Lay flat in shade to dry.',
    colors: [
      { name: 'Sunny Yellow & White', hex: '#FFF4A3' },
      { name: 'Blush Pink & Cream', hex: '#E8A6B4' },
      { name: 'Lavender Mist', hex: '#D9C6E8' },
      { name: 'Soft Peach', hex: '#F5DFD7' }
    ],
    images: [
      'images/product-images/keychain-daisy.jpg',
      'images/categories/category-keychains.jpg'
    ],
    stock: 14
  },
  {
    id: 2,
    name: 'Sweet Strawberry Charm Keychain',
    slug: 'sweet-strawberry-charm-keychain',
    category: 'keychains',
    categoryName: 'Crochet Keychains',
    price: 590,
    originalPrice: 750,
    rating: 4.8,
    reviewsCount: 29,
    badge: 'Popular',
    isFeatured: true,
    isBestSeller: false,
    isNewArrival: true,
    shortDesc: 'An adorable 3D amigurumi strawberry charm complete with embroidered seeds and tiny crochet blossom.',
    description: 'Sweet, vibrant, and utterly charming! This 3D plush strawberry is meticulously hand-stitched with fine red and pastel green cotton threads, complete with delicate embroidered seeds and a mini white blossom with gold bell.',
    materials: 'Organic Combed Cotton Yarn, Recycled Polyester Fluff, Gold-Tone Hardware',
    dimensions: 'Berry: 4.5 cm x 3.5 cm | Total Drop: 9.5 cm',
    care: 'Hand wash gently in cool water if needed. Do not wring or tumble dry.',
    colors: [
      { name: 'Ripe Red & Leaf Green', hex: '#E55964' },
      { name: 'Pastel Baby Pink', hex: '#F8BFC9' },
      { name: 'Lilac Berry', hex: '#C6A9E0' }
    ],
    images: [
      'images/product-images/keychain-strawberry.jpg',
      'images/categories/category-keychains.jpg'
    ],
    stock: 9
  },
  {
    id: 3,
    name: 'Mini Amigurumi Teddy Bear Keychain',
    slug: 'mini-amigurumi-teddy-bear-keychain',
    category: 'keychains',
    categoryName: 'Crochet Keychains',
    price: 850,
    originalPrice: 1100,
    rating: 5.0,
    reviewsCount: 44,
    badge: 'Customer Love',
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    shortDesc: 'Handmade miniature cuddly teddy bear with a tiny crochet bow tie and safety eyes.',
    description: 'Your pocket-sized snuggle companion! Each teddy bear takes over 2 hours of delicate micro-crochet stitchwork. Features safety bead eyes, hand-embroidered snout, and a removable pastel neck ribbon.',
    materials: 'Super Soft Velvet Chenille & Milk Cotton Yarn, Safety Eyes, Golden Keyring',
    dimensions: 'Height: 8 cm | Width: 6 cm',
    care: 'Surface wipe only. Avoid soaking safety eyes in hot water.',
    colors: [
      { name: 'Warm Cream Teddy', hex: '#F9F1E6' },
      { name: 'Caramel Latte', hex: '#D3A374' },
      { name: 'Dusty Rose', hex: '#DFA5B2' }
    ],
    images: [
      'images/product-images/keychain-bear.jpg',
      'images/categories/category-keychains.jpg'
    ],
    stock: 7
  },
  {
    id: 4,
    name: 'Radiant Sunflower Bag Charm',
    slug: 'radiant-sunflower-bag-charm',
    category: 'keychains',
    categoryName: 'Crochet Keychains',
    price: 690,
    originalPrice: 890,
    rating: 4.9,
    reviewsCount: 31,
    badge: 'Trending',
    isFeatured: true,
    isBestSeller: false,
    isNewArrival: true,
    shortDesc: 'A rich textured sunflower charm with dual-tone golden petals and a chocolate seed center.',
    description: 'Capture the warmth of golden hour wherever you go. This botanical sunflower charm is crafted with layered crochet petals for stunning 3D depth and tactile beauty.',
    materials: '100% Mercerized Cotton Yarn, Metal Swivel Clasp',
    dimensions: 'Diameter: 8 cm | Total Length: 13 cm',
    care: 'Gently brush off dust with a soft cosmetic brush. Spot clean as needed.',
    colors: [
      { name: 'Golden Marigold & Cocoa', hex: '#F2A93B' },
      { name: 'Pastel Sunset Ochre', hex: '#F5C678' }
    ],
    images: [
      'images/product-images/keychain-sunflower.jpg',
      'images/categories/category-keychains.jpg'
    ],
    stock: 11
  },
  {
    id: 5,
    name: 'Lucky Four-Leaf Clover Keychain',
    slug: 'lucky-four-leaf-clover-keychain',
    category: 'keychains',
    categoryName: 'Crochet Keychains',
    price: 520,
    originalPrice: 650,
    rating: 4.7,
    reviewsCount: 18,
    badge: 'Sale',
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: false,
    shortDesc: 'A dainty four-leaf clover charm symbolising hope, faith, love, and continuous good fortune.',
    description: 'Crafted with lush forest and mint yarns, this sweet four-leaf clover charm makes the perfect thoughtful gift for students, drivers, and cherished friends.',
    materials: 'Milk Cotton Yarn, Hypoallergenic Clasp, Brass Ring',
    dimensions: 'Clover: 6 cm x 6 cm | Length: 11 cm',
    care: 'Spot clean with mild damp sponge.',
    colors: [
      { name: 'Emerald Clover', hex: '#589B6E' },
      { name: 'Pastel Sage Green', hex: '#95C5A8' },
      { name: 'Mint Dream', hex: '#B8E2CE' }
    ],
    images: [
      'images/product-images/keychain-clover.jpg',
      'images/categories/category-keychains.jpg'
    ],
    stock: 16
  },

  // CATEGORY 2: EARRINGS
  {
    id: 6,
    name: 'Pastel Flora Drop Earrings',
    slug: 'pastel-flora-drop-earrings',
    category: 'earrings',
    categoryName: 'Handmade Earrings',
    price: 890,
    originalPrice: 1150,
    rating: 5.0,
    reviewsCount: 52,
    badge: 'Best Seller',
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    shortDesc: 'Ultra-lightweight floral dangle earrings with soft pink petals, lavender buds, and golden hooks.',
    description: 'Experience earrings so lightweight you will forget you are wearing them! These delicate floral cascades are crochet-woven using feather-soft micro cotton yarn and finished with genuine 18K gold-plated stainless steel hooks that are 100% hypoallergenic and sensitive-skin friendly.',
    materials: 'Fine Micro Cotton Thread, 18K Gold-Plated Stainless Steel French Hooks, Glass Seed Beads',
    dimensions: 'Drop Length: 5.5 cm | Width: 2.8 cm | Weight: only 3 grams per pair',
    care: 'Store flat in jewelry pouch. Avoid spraying perfume or hairspray directly onto earrings.',
    colors: [
      { name: 'Blush Pink & Cream', hex: '#E8A6B4' },
      { name: 'Lavender & White', hex: '#D9C6E8' },
      { name: 'Sage & Buttercream', hex: '#C2D9C8' }
    ],
    images: [
      'images/product-images/earrings-floral.jpg',
      'images/categories/category-earrings.jpg'
    ],
    stock: 15
  },
  {
    id: 7,
    name: 'Daisy Pearl Crochet Stud Earrings',
    slug: 'daisy-pearl-crochet-stud-earrings',
    category: 'earrings',
    categoryName: 'Handmade Earrings',
    price: 750,
    originalPrice: 950,
    rating: 4.8,
    reviewsCount: 34,
    badge: 'New',
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    shortDesc: 'Dainty white daisy studs with luminous faux freshwater pearls set in the floral centers.',
    description: 'Understated elegance for college, work, and high-tea gatherings. These micro-crochet daisy studs feature crisp white petals, a warm buttery heart, and a faux freshwater pearl core with surgical steel posts.',
    materials: 'Egyptian Mercerized Cotton, Surgical Steel Stud Posts, Pearl Cabochon',
    dimensions: 'Flower: 1.8 cm diameter | Stud Post: 1.1 cm',
    care: 'Keep in dry jewelry box when not in use.',
    colors: [
      { name: 'Classic Daisy White', hex: '#FFFFFF' },
      { name: 'Pastel Primrose', hex: '#FDF1B8' },
      { name: 'Baby Pink Rose', hex: '#F7C6CF' }
    ],
    images: [
      'images/product-images/earrings-pearl-daisy.jpg',
      'images/categories/category-earrings.jpg'
    ],
    stock: 12
  },
  {
    id: 8,
    name: 'Boho Sunset Crochet Hoop Earrings',
    slug: 'boho-sunset-crochet-hoop-earrings',
    category: 'earrings',
    categoryName: 'Handmade Earrings',
    price: 920,
    originalPrice: 1200,
    rating: 4.9,
    reviewsCount: 27,
    badge: 'Trending',
    isFeatured: true,
    isBestSeller: false,
    isNewArrival: false,
    shortDesc: 'Modern lightweight circular hoops lovingly hand-wrapped and scalloped with pastel gradient yarn.',
    description: 'A contemporary twist on the classic hoop earring. Lightweight brass hoops are meticulously hand-bound with scalloped crochet edge in warm peach, cream, and dusty rose hues.',
    materials: 'Brass Hoops, Milk Cotton Thread, Hypoallergenic Earring Wires',
    dimensions: 'Diameter: 4.2 cm | Total Drop: 5.5 cm',
    care: 'Wipe metal hooks with dry cloth. Store in air-tight pouch.',
    colors: [
      { name: 'Sunset Terracotta & Peach', hex: '#EAA999' },
      { name: 'Lavender Haze', hex: '#D2B9E3' },
      { name: 'Earthy Sand & Cream', hex: '#EFE3D5' }
    ],
    images: [
      'images/product-images/earrings-boho-hoop.jpg',
      'images/categories/category-earrings.jpg'
    ],
    stock: 8
  },
  {
    id: 9,
    name: 'Cherry Blossom Dangle Drops',
    slug: 'cherry-blossom-dangle-drops',
    category: 'earrings',
    categoryName: 'Handmade Earrings',
    price: 850,
    originalPrice: 1050,
    rating: 4.9,
    reviewsCount: 39,
    badge: 'Popular',
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    shortDesc: 'Whimsical pastel sakura blossoms suspended gracefully from shimmering gold chain links.',
    description: 'Inspired by springtime in full bloom. Three cascading miniature sakura blossoms sway with your every movement, catching the light beautifully.',
    materials: 'Micro Combed Cotton, Gold-plated Chain & Leverback Hooks',
    dimensions: 'Total Length: 6 cm | Blossom Width: 2 cm',
    care: 'Store hanging or flat to maintain the delicate drape.',
    colors: [
      { name: 'Sakura Blush Pink', hex: '#F4B8C5' },
      { name: 'Snow Cream Blossom', hex: '#FFF5F0' }
    ],
    images: [
      'images/product-images/earrings-cherry.jpg',
      'images/categories/category-earrings.jpg'
    ],
    stock: 10
  },
  {
    id: 10,
    name: 'Mini Sunflower Bloom Earrings',
    slug: 'mini-sunflower-bloom-earrings',
    category: 'earrings',
    categoryName: 'Handmade Earrings',
    price: 780,
    originalPrice: 980,
    rating: 4.7,
    reviewsCount: 22,
    badge: 'Sale',
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: false,
    shortDesc: 'Vibrant miniature crochet sunflowers that bring instant cheer and warmth to any outfit.',
    description: 'Add a bohemian ray of sunshine to your style! These cheerful miniature sunflowers are crafted petal by petal with chocolate brown center seed-knot stitches.',
    materials: 'Mercerized Cotton, Nickel-Free Gold Hooks',
    dimensions: 'Flower: 3 cm diameter | Drop: 4.5 cm',
    care: 'Avoid getting wet. Keep away from water and oil-based serums.',
    colors: [
      { name: 'Golden Honey Sunflower', hex: '#F4B042' },
      { name: 'Pastel Lemon Chiffon', hex: '#FDF0A6' }
    ],
    images: [
      'images/product-images/earrings-sunflower.jpg',
      'images/categories/category-earrings.jpg'
    ],
    stock: 14
  },

  // CATEGORY 3: MINI POUCHES
  {
    id: 11,
    name: 'Vintage Rose Kiss-Lock Coin Purse',
    slug: 'vintage-rose-kiss-lock-coin-purse',
    category: 'pouches',
    categoryName: 'Crochet Mini Pouches',
    price: 1450,
    originalPrice: 1850,
    rating: 5.0,
    reviewsCount: 61,
    badge: 'Best Seller',
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    shortDesc: 'An heirloom-quality crochet coin purse with an ornate antique brass kiss-lock frame and lined interior.',
    description: 'Step into vintage nostalgia! Handcrafted with textured popcorn rose stitches, this exquisite kiss-lock purse opens with a satisfying snap. Fully lined with pastel floral cotton fabric so coins, keys, or AirPods never slip out.',
    materials: '100% Milk Cotton Outer, 100% Floral Cotton Lining, Antique Embossed Brass Frame',
    dimensions: 'Width: 12 cm | Height: 11 cm | Base Depth: 5 cm',
    care: 'Gently spot clean exterior with damp cloth. Do not soak metal frame.',
    colors: [
      { name: 'Vintage Rose Pink', hex: '#E8A6B4' },
      { name: 'Warm Cream & Caramel', hex: '#F7EDE2' },
      { name: 'French Lavender', hex: '#D7C4E6' }
    ],
    images: [
      'images/product-images/pouch-granny-square.jpg',
      'images/categories/category-pouches.jpg'
    ],
    stock: 8
  },
  {
    id: 12,
    name: 'Pastel Tulip Drawstring Mini Pouch',
    slug: 'pastel-tulip-drawstring-mini-pouch',
    category: 'pouches',
    categoryName: 'Crochet Mini Pouches',
    price: 1250,
    originalPrice: 1550,
    rating: 4.9,
    reviewsCount: 45,
    badge: 'New',
    isFeatured: true,
    isBestSeller: false,
    isNewArrival: true,
    shortDesc: 'A dreamy drawstring pouch shaped like a blossoming tulip bouquet, finished with crochet tulip-bell beads.',
    description: 'The cutest pouch you will ever own! Designed with a blooming scalloped tulip rim and dual braided drawstrings ending in sweet miniature 3D tulip buds. Ideal for jewellery, cosmetics, and wireless earbuds.',
    materials: 'Combed Milk Cotton Yarn, Wooden Accent Beads, Braided Cotton Cords',
    dimensions: 'Height: 14 cm | Width: 13 cm',
    care: 'Hand wash in cold water with gentle detergent. Reshape and air dry flat.',
    colors: [
      { name: 'Tulip Pink & Mint Sage', hex: '#F4ADC0' },
      { name: 'Buttercup Yellow & Cream', hex: '#FCE79D' },
      { name: 'Lilac & Soft Violet', hex: '#CCAEE8' }
    ],
    images: [
      'images/product-images/pouch-tulip.jpg',
      'images/categories/category-pouches.jpg'
    ],
    stock: 11
  },
  {
    id: 13,
    name: 'Honeycomb Drawstring AirPods Pouch',
    slug: 'honeycomb-drawstring-airpods-pouch',
    category: 'pouches',
    categoryName: 'Crochet Mini Pouches',
    price: 990,
    originalPrice: 1290,
    rating: 4.8,
    reviewsCount: 33,
    badge: 'Trending',
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    shortDesc: 'Cushioned honeycomb waffle-stitch pouch with charging cable slit and secure wooden toggle.',
    description: 'Keep your precious wireless earbuds scratch-free and safe. The thick, waffle honeycomb crochet pattern acts as natural impact shock-absorption while looking effortlessly chic.',
    materials: 'Dense Combed Cotton Yarn, Natural Wood Toggle Button',
    dimensions: 'Height: 8.5 cm | Width: 7.5 cm (Fits AirPods 1, 2, 3 & Pro)',
    care: 'Machine wash on delicate cold cycle inside a mesh laundry bag.',
    colors: [
      { name: 'Warm Sand Beige', hex: '#E8D8C8' },
      { name: 'Sage Green', hex: '#B2CEBA' },
      { name: 'Dusty Rose Pink', hex: '#EAA9B8' }
    ],
    images: [
      'images/product-images/pouch-drawstring.jpg',
      'images/categories/category-pouches.jpg'
    ],
    stock: 13
  },
  {
    id: 14,
    name: 'Granny Square Card & Coin Wallet',
    slug: 'granny-square-card-coin-wallet',
    category: 'pouches',
    categoryName: 'Crochet Mini Pouches',
    price: 1150,
    originalPrice: 1400,
    rating: 4.9,
    reviewsCount: 28,
    badge: 'Popular',
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    shortDesc: 'A nostalgic granny square card wallet with pastel floral centers and magnetic snap closure.',
    description: 'Celebrate classic cottagecore craft with this authentic patchwork granny square card wallet. Accommodates up to 10 cards, folded banknotes, and coins with a hidden magnetic snap clasp.',
    materials: 'Milk Cotton Yarn, Cotton Twill Lining, Magnetic Metal Clasp',
    dimensions: '11.5 cm x 8.5 cm',
    care: 'Spot clean with mild soapy water. Air dry away from direct heater.',
    colors: [
      { name: 'Pastel Meadow Patchwork', hex: '#F7DFD4' },
      { name: 'Retro Cream & Earth', hex: '#E8DEC8' }
    ],
    images: [
      'images/product-images/pouch-card-wallet.jpg',
      'images/categories/category-pouches.jpg'
    ],
    stock: 9
  },
  {
    id: 15,
    name: 'Cloud Nine Pastel Makeup Pouch',
    slug: 'cloud-nine-pastel-makeup-pouch',
    category: 'pouches',
    categoryName: 'Crochet Mini Pouches',
    price: 1650,
    originalPrice: 2100,
    rating: 5.0,
    reviewsCount: 37,
    badge: 'Luxury',
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: false,
    shortDesc: 'A fluffy, spacious crochet clutch pouch with smooth nylon zipper and pearl charm puller.',
    description: 'Store your everyday lip tints, compact powder, scrunchies, and perfume roller in absolute handmade style. Soft cloud stitch texture with premium smooth metal zipper.',
    materials: 'Chunky Cotton Blend, Water-resistant Nylon Inner Liner, Pearl Puller',
    dimensions: 'Width: 19 cm | Height: 13 cm | Gusset: 6 cm',
    care: 'Hand wash gently. Hang to dry.',
    colors: [
      { name: 'Cloud White & Cream', hex: '#FFFBF7' },
      { name: 'Cotton Candy Pink', hex: '#FAD5DE' },
      { name: 'Dreamy Lavender', hex: '#E4D5F2' }
    ],
    images: [
      'images/product-images/pouch-cloud-makeup.jpg',
      'images/categories/category-pouches.jpg'
    ],
    stock: 6
  },

  // CATEGORY 4: HAIRBANDS
  {
    id: 16,
    name: 'Meadow Floral Knitted Headband',
    slug: 'meadow-floral-knitted-headband',
    category: 'hairbands',
    categoryName: 'Crochet Hairbands',
    price: 1100,
    originalPrice: 1400,
    rating: 4.9,
    reviewsCount: 48,
    badge: 'Best Seller',
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    shortDesc: 'A wide pastel sage headband embellished with hand-crocheted blush wild roses and daisy buds.',
    description: 'Transform your hair look effortlessly! Hand-knit with a gentle stretch and wide band design that keeps flyaways tamed without any headache-inducing pressure behind the ears. Adorned with delicate 3D pastel floral clusters.',
    materials: 'Soft Milk Cotton Elastic Yarn, Gentle Fabric Covered Band',
    dimensions: 'Band Width: 5.5 cm | Flexible stretch fits all head sizes',
    care: 'Gently hand wash in lukewarm water. Air dry flat on a clean towel.',
    colors: [
      { name: 'Sage Green & Blush Floral', hex: '#A8C9B4' },
      { name: 'Vanilla Cream & Daisy', hex: '#FAF3E3' },
      { name: 'Lilac Mist & Violet', hex: '#D5C3E8' }
    ],
    images: [
      'images/product-images/hairband-sage-floral.jpg',
      'images/categories/category-hairbands.jpg'
    ],
    stock: 11
  },
  {
    id: 17,
    name: 'Pastel Twist Knit Headband',
    slug: 'pastel-twist-knit-headband',
    category: 'hairbands',
    categoryName: 'Crochet Hairbands',
    price: 950,
    originalPrice: 1200,
    rating: 4.8,
    reviewsCount: 36,
    badge: 'Cozy',
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    shortDesc: 'A chic turban-style twisted front headband hand-crocheted in ribbed pastel tones.',
    description: 'The ultimate bad hair day savior! Featuring a graceful crossover knot at the crown and ribbed texture that stays securely in place all day long.',
    materials: '100% Acrylic Milk Wool Blend (No itching, ultra soft)',
    dimensions: 'Width: 8 cm | Elasticated circumference 50-60 cm',
    care: 'Gentle hand wash. Lay flat to preserve shape.',
    colors: [
      { name: 'Dusty Rose Pink', hex: '#E29EA9' },
      { name: 'Oatmeal Heather', hex: '#EFE5D7' },
      { name: 'Pale Sky Lavender', hex: '#D2C2E8' }
    ],
    images: [
      'images/product-images/hairband-twist.jpg',
      'images/categories/category-hairbands.jpg'
    ],
    stock: 14
  },
  {
    id: 18,
    name: 'Daisy Bloom Bandana Headscarf',
    slug: 'daisy-bloom-bandana-headscarf',
    category: 'hairbands',
    categoryName: 'Crochet Hairbands',
    price: 1350,
    originalPrice: 1700,
    rating: 5.0,
    reviewsCount: 57,
    badge: 'Trending',
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    shortDesc: 'A classic triangular cottagecore hair bandana patterned with floating white daisies and tie straps.',
    description: 'The viral crochet hair bandana loved worldwide! Beautifully breathable open-mesh triangular lace with hand-sewn daisy blossoms and long, comfortable tie strings that tie under your hair or over your ponytail.',
    materials: '100% Breathable Combed Cotton',
    dimensions: 'Triangle Base: 48 cm | Depth: 25 cm | Ties: 30 cm each',
    care: 'Cool hand wash. Low steam iron on reverse.',
    colors: [
      { name: 'Forest Mint & White Daisy', hex: '#C2E5D3' },
      { name: 'Cream Ivory & Yellow Core', hex: '#FFF9EE' },
      { name: 'Pastel Sunset Peach', hex: '#FAD9CE' }
    ],
    images: [
      'images/product-images/hairband-bandana.jpg',
      'images/categories/category-hairbands.jpg'
    ],
    stock: 8
  },
  {
    id: 19,
    name: 'Chunky Cable Knit Cozy Headband',
    slug: 'chunky-cable-knit-cozy-headband',
    category: 'hairbands',
    categoryName: 'Crochet Hairbands',
    price: 990,
    originalPrice: 1250,
    rating: 4.7,
    reviewsCount: 25,
    badge: 'Cozy',
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: false,
    shortDesc: 'A plush braided cable crochet headband that keeps your ears warm and your style on point.',
    description: 'Chunky yet incredibly soft against delicate skin. Expertly crocheted with traditional braided cable stitchwork that provides insulating warmth without weight.',
    materials: 'Micro-loft Cotton Fleece Yarn',
    dimensions: 'Width: 10 cm | Stretch fits heads 52-62 cm',
    care: 'Hand wash gently. Dry flat in towel.',
    colors: [
      { name: 'Warm Cream White', hex: '#FFFBF2' },
      { name: 'Blush Powder Pink', hex: '#F7C6D0' },
      { name: 'Earthy Taupe', hex: '#CDBEAF' }
    ],
    images: [
      'images/product-images/hairband-cable-knit.jpg',
      'images/categories/category-hairbands.jpg'
    ],
    stock: 12
  },
  {
    id: 20,
    name: 'Scalloped Vintage Lace Hairband',
    slug: 'scalloped-vintage-lace-hairband',
    category: 'hairbands',
    categoryName: 'Crochet Hairbands',
    price: 880,
    originalPrice: 1100,
    rating: 4.8,
    reviewsCount: 19,
    badge: 'Dainty',
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    shortDesc: 'A delicate slim lace hairband with scalloped picot edges and comfortable satin-wrapped inner band.',
    description: 'Perfect for weddings, Eid celebrations, and daytime garden strolls. The slender profile adds an effortless, romantic vintage charm to any hairstyle.',
    materials: 'Fine Mercerized Cotton Lace, Flexible Satin-Covered Plastic Core',
    dimensions: 'Band Width: 2.2 cm',
    care: 'Spot clean only. Store on a headband stand.',
    colors: [
      { name: 'Antique Ivory', hex: '#FAF6EE' },
      { name: 'Blush Pearl', hex: '#F8DFE4' },
      { name: 'Lavender Wisp', hex: '#EAE1F5' }
    ],
    images: [
      'images/product-images/hairband-vintage-lace.jpg',
      'images/categories/category-hairbands.jpg'
    ],
    stock: 15
  },

  // CATEGORY 5: HAIR CLIPS
  {
    id: 21,
    name: 'Daisy Crochet Snap Clips (Set of 2)',
    slug: 'daisy-crochet-snap-clips-set-of-2',
    category: 'hair-clips',
    categoryName: 'Handmade Hair Clips',
    price: 550,
    originalPrice: 700,
    rating: 4.9,
    reviewsCount: 42,
    badge: 'Best Seller',
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    shortDesc: 'A pair of handcrafted crochet daisy hair clips mounted on snag-free gold alligator clips.',
    description: 'Keep your fringe neat and your style blooming! Each clip is handcrafted with petal-perfect daisy blossoms securely bound to teeth-grip alligator clips that never pull or snag fine hair.',
    materials: '100% Combed Cotton, Gold-Plated Steel Hair Clips with Teeth',
    dimensions: 'Flower: 3.5 cm | Clip Length: 5.5 cm',
    care: 'Gently wipe clean with dry cloth.',
    colors: [
      { name: 'Daisy White & Sunny Core', hex: '#FFFFFF' },
      { name: 'Pastel Pink Petals', hex: '#FAD5DD' },
      { name: 'Soft Lilac Petals', hex: '#E1D1F2' }
    ],
    images: [
      'images/product-images/hairclips-floral-set.jpg',
      'images/categories/category-hairclips.jpg'
    ],
    stock: 20
  },
  {
    id: 22,
    name: 'Pastel Butterfly Crochet Hair Pin',
    slug: 'pastel-butterfly-crochet-hair-pin',
    category: 'hair-clips',
    categoryName: 'Handmade Hair Clips',
    price: 490,
    originalPrice: 650,
    rating: 4.8,
    reviewsCount: 31,
    badge: 'Popular',
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    shortDesc: 'A whimsical 3D layered butterfly hairpin with pearl antennae and pastel wing gradients.',
    description: 'Flutter into pure cottagecore aesthetic. Hand-crocheted layered butterfly wings perched on a gold bobby pin or alligator clip, creating a floating butterfly look in your hair or braid.',
    materials: 'Micro Cotton Thread, Mini Pearl Beads, Gold Plated Clip',
    dimensions: 'Wing Span: 4.5 cm | Height: 3.8 cm',
    care: 'Store flat in accessory tray.',
    colors: [
      { name: 'Lavender & Sky Butterfly', hex: '#D5C4EC' },
      { name: 'Peach & Rosy Wing', hex: '#F5CFC5' },
      { name: 'Mint & Vanilla', hex: '#CAEBD8' }
    ],
    images: [
      'images/product-images/hairclip-butterfly.jpg',
      'images/categories/category-hairclips.jpg'
    ],
    stock: 16
  },
  {
    id: 23,
    name: 'Strawberry Blossoms Hair Clip',
    slug: 'strawberry-blossoms-hair-clip',
    category: 'hair-clips',
    categoryName: 'Handmade Hair Clips',
    price: 520,
    originalPrice: 690,
    rating: 4.9,
    reviewsCount: 26,
    badge: 'Cute',
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: false,
    shortDesc: 'A cute duo of miniature 3D crochet strawberry and white blossom on an alligator hair clip.',
    description: 'Adorably fresh and sweet! Features a ripe mini strawberry with seed embroidery paired with a blooming white blossom and tiny green mint leaf.',
    materials: '100% Milk Cotton Yarn, Non-slip Metal Clip',
    dimensions: 'Total Length: 6 cm | Strawberry: 2.5 cm',
    care: 'Avoid getting soaked in swimming pools or shower.',
    colors: [
      { name: 'Berry Red & White Blossom', hex: '#E85B69' },
      { name: 'Blush Pink Strawberry', hex: '#F5A8B8' }
    ],
    images: [
      'images/product-images/hairclip-strawberry.jpg',
      'images/categories/category-hairclips.jpg'
    ],
    stock: 18
  },
  {
    id: 24,
    name: 'Lavender Bloom Alligator Clip',
    slug: 'lavender-bloom-alligator-clip',
    category: 'hair-clips',
    categoryName: 'Handmade Hair Clips',
    price: 480,
    originalPrice: 620,
    rating: 4.7,
    reviewsCount: 19,
    badge: 'Sale',
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: false,
    shortDesc: 'A calming sprig of miniature crochet lavender florets resting gracefully on a gold metal clip.',
    description: 'Subtle, romantic, and beautifully fragrant in spirit. Tiny violet and lavender stitches clustered along a sage green stem bring an ethereal floral touch to half-up styles.',
    materials: 'Fine Cotton Floss, Steel Alligator Clip',
    dimensions: 'Length: 6.5 cm | Width: 2 cm',
    care: 'Gently brush petals with clean dry brush.',
    colors: [
      { name: 'French Violet & Lilac', hex: '#B899D8' },
      { name: 'Pastel Lilac Mist', hex: '#D9C8EC' }
    ],
    images: [
      'images/product-images/hairclip-lavender.jpg',
      'images/categories/category-hairclips.jpg'
    ],
    stock: 14
  },
  {
    id: 25,
    name: 'Fluffy Cloud Hair Barrette',
    slug: 'fluffy-cloud-hair-barrette',
    category: 'hair-clips',
    categoryName: 'Handmade Hair Clips',
    price: 580,
    originalPrice: 750,
    rating: 5.0,
    reviewsCount: 35,
    badge: 'Customer Love',
    isFeatured: true,
    isBestSeller: false,
    isNewArrival: true,
    shortDesc: 'A soft pillowy crochet cloud with tiny embroidered golden stars mounted on an automatic barrette.',
    description: 'Dreamy cottage vibes for your hair! This pillowy cloud is handcrafted using plush bouclé cotton yarn and sprinkled with tiny hand-stitched golden metallic thread stars.',
    materials: 'Bouclé Cotton Yarn, French Barrette Fastener, Metallic Thread',
    dimensions: 'Cloud: 6 cm x 3.5 cm | Barrette: 6 cm',
    care: 'Spot clean gently with baby soap.',
    colors: [
      { name: 'Fluffy Dream White', hex: '#FFFFFF' },
      { name: 'Pastel Powder Blue', hex: '#D6E8F7' },
      { name: 'Cotton Candy Pink', hex: '#F8D8E2' }
    ],
    images: [
      'images/product-images/hairclip-cloud.jpg',
      'images/categories/category-hairclips.jpg'
    ],
    stock: 15
  },

  // CATEGORY 6: AESTHETIC JEWELLERY
  {
    id: 26,
    name: 'Pastel Daisy Chain Crochet Choker',
    slug: 'pastel-daisy-chain-crochet-choker',
    category: 'jewellery',
    categoryName: 'Aesthetic Jewellery',
    price: 890,
    originalPrice: 1150,
    rating: 5.0,
    reviewsCount: 41,
    badge: 'Trending',
    isFeatured: true,
    isBestSeller: false,
    isNewArrival: true,
    shortDesc: 'Dainty micro-crochet daisy chain choker with luminous faux pearl centers and an adjustable 14K gold-plated extender chain.',
    description: 'Elevate your cottagecore look with our handcrafted Daisy Chain Choker. Micro-crocheted petal by petal in delicate pastel cream and blush pink, each daisy is centered with an iridescent faux pearl and connected along a dainty hypoallergenic gold chain.',
    materials: 'Fine 100% Combed Cotton Thread, Faux Pearl Accents, 14K Gold-Plated Brass Chain & Lobster Clasp',
    dimensions: 'Choker Length: 33 cm + 7 cm extender chain | Daisy Diameter: 1.6 cm',
    care: 'Store flat in dry jewelry pouch. Avoid exposure to water, perfume, and cosmetics.',
    colors: [
      { name: 'Blush & Ivory Pearl', hex: '#FADADD' },
      { name: 'Buttercup & Cream', hex: '#FFF4A3' },
      { name: 'Lavender Breeze', hex: '#D9C6E8' }
    ],
    images: [
      'images/product-images/jewellery-daisy-choker.jpg',
      'images/categories/category-jewellery.jpg'
    ],
    stock: 12
  },
  {
    id: 27,
    name: 'Vintage Rose Lace Pendant Necklace',
    slug: 'vintage-rose-lace-pendant-necklace',
    category: 'jewellery',
    categoryName: 'Aesthetic Jewellery',
    price: 950,
    originalPrice: 1250,
    rating: 4.9,
    reviewsCount: 36,
    badge: 'Customer Love',
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    shortDesc: 'A romantic 3D micro-crochet English rose pendant with tiny sage leaves and a genuine freshwater teardrop pearl on gold chain.',
    description: 'An heirloom-quality piece that captures timeless botanical romance. Each English rose bud is painstakingly micro-crocheted using fine silk-blend cotton threads, paired with tiny hand-stitched sage leaves and a luminous teardrop pearl.',
    materials: 'Silk Cotton Embroidery Thread, Natural Freshwater Teardrop Pearl, 14K Gold-Filled Fine Cable Chain',
    dimensions: 'Pendant: 2.2 cm x 2.0 cm | Chain Length: 45 cm + 5 cm extender',
    care: 'Gently wipe with a soft dry cloth. Keep away from water and direct perfume spray.',
    colors: [
      { name: 'Dusty Rose & Gold', hex: '#E29CA7' },
      { name: 'Antique Cream & Gold', hex: '#FDFBF7' },
      { name: 'Mauve Blossom', hex: '#B87B8E' }
    ],
    images: [
      'images/product-images/jewellery-rose-pendant.jpg',
      'images/categories/category-jewellery.jpg'
    ],
    stock: 10
  },
  {
    id: 28,
    name: 'Blossom Garden Micro-Crochet Bracelet',
    slug: 'blossom-garden-micro-crochet-bracelet',
    category: 'jewellery',
    categoryName: 'Aesthetic Jewellery',
    price: 780,
    originalPrice: 990,
    rating: 4.9,
    reviewsCount: 28,
    badge: 'Best Seller',
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: true,
    shortDesc: 'A whimsical wristlet featuring a rainbow garden of pastel micro-blossoms accented with faceted gold spacer beads.',
    description: 'A delicate pastel flower garden wrapped around your wrist! Featuring miniature hand-crocheted blossoms in blush, peach, lilac, buttercup, and sage, separated by tiny gleaming gold beads with an easy-hook lobster clasp.',
    materials: 'Fine Mercerized Cotton Thread, Micro Faceted Gold Beads, Gold-Plated Clasp',
    dimensions: 'Length: 16 cm + 4 cm adjustable extender | Flower Size: 1.2 cm',
    care: 'Store flat in jewelry box. Avoid getting wet or soaking.',
    colors: [
      { name: 'Pastel Garden Medley', hex: '#F9D5D3' },
      { name: 'Monochrome Blush & Pearl', hex: '#E8A6B4' },
      { name: 'Sky & Daisy Harmony', hex: '#CDE5F7' }
    ],
    images: [
      'images/product-images/jewellery-blossom-bracelet.jpg',
      'images/categories/category-jewellery.jpg'
    ],
    stock: 14
  },
  {
    id: 29,
    name: 'Fairycore Butterfly & Blossom Ring Set',
    slug: 'fairycore-butterfly-blossom-ring-set',
    category: 'jewellery',
    categoryName: 'Aesthetic Jewellery',
    price: 620,
    originalPrice: 790,
    rating: 4.8,
    reviewsCount: 22,
    badge: 'New Arrival',
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    shortDesc: 'A dreamy set of 2 adjustable gold rings featuring an ethereal micro-crochet pastel butterfly and tiny forget-me-not.',
    description: 'Add whimsical cottagecore magic to your hands! This dainty 2-piece ring set features an ultra-fine crochet butterfly with micro-pearl antennae and a charming mini forget-me-not flower. Mounted on open-back adjustable gold-plated bands to fit any finger size.',
    materials: 'Micro Mercerized Cotton Thread, Faux Pearl Accents, 18K Gold-Plated Adjustable Brass Bands',
    dimensions: 'Butterfly: 1.8 cm across | Flower: 1.0 cm | Ring Band: Fully Adjustable (US 5-9)',
    care: 'Do not wear while washing hands, sanitizing, or bathing.',
    colors: [
      { name: 'Lilac & White Blossom', hex: '#D6C7E8' },
      { name: 'Blush Pink & Peach', hex: '#F7C6D0' },
      { name: 'Mint & Baby Yellow', hex: '#D2EBD9' }
    ],
    images: [
      'images/product-images/jewellery-butterfly-rings.jpg',
      'images/categories/category-jewellery.jpg'
    ],
    stock: 16
  },
  {
    id: 30,
    name: 'Boho Scalloped Lace Wrist Cuff',
    slug: 'boho-scalloped-lace-wrist-cuff',
    category: 'jewellery',
    categoryName: 'Aesthetic Jewellery',
    price: 850,
    originalPrice: 1100,
    rating: 4.9,
    reviewsCount: 19,
    badge: 'Exclusive',
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    shortDesc: 'Victorian-inspired scalloped micro-crochet lace cuff bracelet with seed pearl border and mother-of-pearl button.',
    description: 'Intricate vintage elegance reimagined. Handcrafted with ultrafine cotton threads into an ornate Victorian scalloped lace motif, detailed with woven seed pearls along the borders and fastened with a genuine mother-of-pearl button.',
    materials: '100% Combed Micro Cotton Lace Yarn, Glass Seed Pearls, Natural Mother-of-Pearl Button',
    dimensions: 'Width: 3.5 cm | Length: 17 cm (Comfortable wrist fit)',
    care: 'Hand wash gently in cold water with mild silk detergent. Lay flat to dry on towel.',
    colors: [
      { name: 'Vintage Antique Cream', hex: '#FFF8F0' },
      { name: 'Soft Peach Blush', hex: '#FBE8E0' },
      { name: 'Dusty Rose Lace', hex: '#E5B8C2' }
    ],
    images: [
      'images/product-images/jewellery-lace-cuff.jpg',
      'images/categories/category-jewellery.jpg'
    ],
    stock: 8
  }
];

// Helper Functions
function formatPrice(amount) {
  return 'Rs. ' + Number(amount).toLocaleString('en-PK');
}

function getProductById(id) {
  const numId = parseInt(id, 10);
  return PRODUCTS.find(p => p.id === numId) || null;
}

function getProductsByCategory(categorySlug) {
  if (!categorySlug || categorySlug === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.category.toLowerCase() === categorySlug.toLowerCase());
}

function getRelatedProducts(productId, limit = 4) {
  const current = getProductById(productId);
  if (!current) return PRODUCTS.slice(0, limit);
  const sameCategory = PRODUCTS.filter(p => p.category === current.category && p.id !== current.id);
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);
  const others = PRODUCTS.filter(p => p.id !== current.id && !sameCategory.includes(p));
  return [...sameCategory, ...others].slice(0, limit);
}

// Fallback image helper
function getProductMainImage(product) {
  if (product && product.images && product.images.length > 0) {
    return product.images[0];
  }
  return 'images/categories/category-keychains.jpg';
}
