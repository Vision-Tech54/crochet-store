/**
 * Crochet & Co. - Products Database
 * Handmade Crochet Boutique - Easy & Aesthetic Creations
 * All prices in Pakistani Rupees (PKR)
 */

const CATEGORIES = [
  {
    id: 'scrunchies',
    name: 'Crochet Scrunchies',
    slug: 'scrunchies',
    description: 'Fluffy, cloud-soft ruffled hair scrunchies hand-crocheted over snag-free elastics using gentle milk cotton.',
    image: 'images/categories/category-scrunchies.jpg',
    fallbackImage: 'images/product-images/scrunchie-pastel-ruffle.jpg',
    tagline: 'Fluffy Pastel Hair Accents',
    itemCount: 3
  },
  {
    id: 'coasters',
    name: 'Crochet Coasters',
    slug: 'coasters',
    description: 'Thick, absorbent, and cheerful botanical and granny square drink coasters hand-crocheted to protect your desk in style.',
    image: 'images/categories/category-coasters.jpg',
    fallbackImage: 'images/product-images/coaster-granny-square.jpg',
    tagline: 'Warm Hugs for Your Mugs',
    itemCount: 3
  },
  {
    id: 'bookmarks',
    name: 'Crochet Bookmarks',
    slug: 'bookmarks',
    description: 'Whimsical handmade bookmarks featuring sprouting leaves and daisy ribbons that never damage book pages.',
    image: 'images/categories/category-bookmarks.jpg',
    fallbackImage: 'images/product-images/bookmark-little-sprout.jpg',
    tagline: 'Cozy Companions for Book Lovers',
    itemCount: 3
  },
  {
    id: 'keychains',
    name: 'Simple Keychains',
    slug: 'keychains',
    description: 'Sweet floral charms, blooming bell blossoms, fruit accents, and aesthetic ribbon bow keychains to brighten up your daily essentials.',
    image: 'images/categories/category-keychains.jpg',
    fallbackImage: 'images/product-images/keychain-daisy.jpg',
    tagline: 'Tiny Tokens of Joy',
    itemCount: 5
  },
  {
    id: 'hair-clips',
    name: 'Simple Hair Clips',
    slug: 'hair-clips',
    description: 'Dainty crochet daisies, blush petals, and lavender blossoms secured onto snag-free golden alligator clips.',
    image: 'images/categories/category-hairclips.jpg',
    fallbackImage: 'images/product-images/hairclips-floral-set.jpg',
    tagline: 'Whimsical Hair Accents',
    itemCount: 3
  }
];

const PRODUCTS = [
  // ==========================================
  // CATEGORY 1: CROCHET SCRUNCHIES
  // ==========================================
  {
    id: 1,
    name: 'Blush Ruffle Pastel Scrunchie',
    slug: 'blush-ruffle-pastel-scrunchie',
    category: 'scrunchies',
    categoryName: 'Crochet Scrunchies',
    price: 350,
    originalPrice: 450,
    rating: 4.9,
    reviewsCount: 34,
    badge: 'Best Seller',
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    shortDesc: 'A cloud-soft double-ruffled crochet scrunchie in baby blush pink and cream milk cotton yarn.',
    description: 'Treat your hair with zero breakage! Hand-crocheted with plush double ruffles using 5-ply milk cotton yarn over a strong, snag-free elastic band. Gentle on all hair textures and holds high ponytails or messy buns securely without leaving creases.',
    materials: '100% Combed Milk Cotton Yarn, Seamless Elastic Hair Band',
    dimensions: 'Diameter: Approx. 11 cm (Outer ruffle) | Expands comfortably for 2-3 twists',
    care: 'Gently hand wash in cool soapy water. Squeeze out excess moisture with a towel and air dry flat.',
    colors: [
      { name: 'Blush Pink & Cream', hex: '#FADADD' },
      { name: 'Lavender Mist', hex: '#E2D4F0' },
      { name: 'Sage & Buttercup', hex: '#D6E8D5' }
    ],
    images: [
      'images/product-images/scrunchie-pastel-ruffle.jpg',
      'images/categories/category-scrunchies.jpg'
    ],
    stock: 20
  },
  {
    id: 2,
    name: 'Daisy Bloom Lavender Scrunchie',
    slug: 'daisy-bloom-lavender-scrunchie',
    category: 'scrunchies',
    categoryName: 'Crochet Scrunchies',
    price: 390,
    originalPrice: 490,
    rating: 5.0,
    reviewsCount: 27,
    badge: 'Popular',
    isFeatured: true,
    isBestSeller: false,
    isNewArrival: true,
    shortDesc: 'Lavender ruffled hair scrunchie adorned with a dainty miniature white daisy blossom with sunny yellow core.',
    description: 'A charming cottagecore essential! Crocheted in a soothing lilac hue and finished with a hand-stitched blooming micro-daisy. Lightweight, bouncy, and looks equally adorable worn in your hair or styled on your wrist as a pastel bracelet.',
    materials: 'Soft Milk Cotton Yarn, Stretchy Durable Elastic Core',
    dimensions: 'Diameter: 10.5 cm | Daisy Size: 3.5 cm',
    care: 'Hand wash gently. Avoid harsh detergents or scrubbing the floral charm.',
    colors: [
      { name: 'Lavender Lilac', hex: '#D6C7E8' },
      { name: 'Baby Pink Daisy', hex: '#F7C6D0' },
      { name: 'Mint Meadow', hex: '#C8E6D3' }
    ],
    images: [
      'images/product-images/scrunchie-daisy-flower.jpg',
      'images/categories/category-scrunchies.jpg'
    ],
    stock: 15
  },
  {
    id: 3,
    name: 'Pastel Dream Cloud Scrunchie',
    slug: 'pastel-dream-cloud-scrunchie',
    category: 'scrunchies',
    categoryName: 'Crochet Scrunchies',
    price: 350,
    originalPrice: 420,
    rating: 4.8,
    reviewsCount: 19,
    badge: 'Sale',
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: false,
    shortDesc: 'Extra-fluffy ruffled scrunchie crocheted in alternating pastel swirls of cream, peach, and baby blue.',
    description: 'Like a pastel cloud for your hair! Features rich, rippling crochet ruffles that add instant volume and whimsical texture to simple hairstyles. Perfect for daily school wear, college routines, and casual weekend outings.',
    materials: '100% Milk Cotton Yarn, Non-Crease Elastic',
    dimensions: 'Diameter: 11 cm',
    care: 'Spot clean or hand wash in cold water.',
    colors: [
      { name: 'Pastel Swirl Trio', hex: '#FBE8E0' },
      { name: 'Buttercream Cream', hex: '#FFF9E6' }
    ],
    images: [
      'images/product-images/scrunchie-pastel-ruffle.jpg',
      'images/categories/category-scrunchies.jpg'
    ],
    stock: 18
  },

  // ==========================================
  // CATEGORY 2: CROCHET COASTERS
  // ==========================================
  {
    id: 4,
    name: 'Pastel Granny Square Mug Coaster',
    slug: 'pastel-granny-square-mug-coaster',
    category: 'coasters',
    categoryName: 'Crochet Coasters',
    price: 290,
    originalPrice: 380,
    rating: 5.0,
    reviewsCount: 42,
    badge: 'Best Seller',
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    shortDesc: 'A classic beginner-friendly pastel granny square mug coaster with a rustic wooden center accent button.',
    description: 'The quintessential beginner crochet creation! Handcrafted using the timeless, easy granny square stitch with 100% combed milk cotton yarn. Thick, absorbent, and completely flat to keep mugs, iced matcha glasses, and tumblers sturdy while protecting your desk from heat and spills.',
    materials: '100% Combed Milk Cotton Yarn, Natural Wooden Accent Button',
    dimensions: '11 cm x 11 cm (Fits standard mugs, glasses, and teacups)',
    care: 'Machine washable on gentle cycle or hand wash in cool water. Lay flat to air dry.',
    colors: [
      { name: 'Blush Pink & Buttercup', hex: '#F7C6D0' },
      { name: 'Mint Green & Cream', hex: '#C8E6D3' },
      { name: 'Pastel Sky Blue', hex: '#D6E8F7' }
    ],
    images: [
      'images/product-images/coaster-granny-square.jpg',
      'images/categories/category-coasters.jpg'
    ],
    stock: 25
  },
  {
    id: 5,
    name: 'Golden Sunflower Mug Coaster',
    slug: 'golden-sunflower-mug-coaster',
    category: 'coasters',
    categoryName: 'Crochet Coasters',
    price: 320,
    originalPrice: 420,
    rating: 4.9,
    reviewsCount: 31,
    badge: 'Trending',
    isFeatured: true,
    isBestSeller: false,
    isNewArrival: true,
    shortDesc: 'Warm golden sunflower coaster with rich textured petals and chocolate brown center seed circle.',
    description: 'Add golden hour warmth to your workspace! Crafted with double-thick textured stitches to catch spills and insulate hot coffee mugs or cold matcha lattes. Sturdy, reusable, and easy to wash.',
    materials: '100% Pure Combed Cotton Yarn',
    dimensions: 'Diameter: 13 cm',
    care: 'Hand wash in lukewarm water. Lay flat to dry.',
    colors: [
      { name: 'Golden Marigold & Cocoa', hex: '#F2A93B' },
      { name: 'Sunset Amber', hex: '#E89138' }
    ],
    images: [
      'images/product-images/coaster-sunflower-mug.jpg',
      'images/categories/category-coasters.jpg'
    ],
    stock: 22
  },
  {
    id: 6,
    name: 'Pastel Blossom Coaster Duo (Set of 2)',
    slug: 'pastel-blossom-coaster-duo',
    category: 'coasters',
    categoryName: 'Crochet Coasters',
    price: 550,
    originalPrice: 700,
    rating: 4.9,
    reviewsCount: 18,
    badge: 'Value Pack',
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    shortDesc: 'Set of 2 matching scalloped floral drink coasters in coordinating blush peach and sage green tones.',
    description: 'The cutest aesthetic gift set! Includes 2 handcrafted botanical floral coasters in soothing pastel tones. Packaged with a twine ribbon and boutique care card, perfect for housewarmings, student desks, and tea lovers.',
    materials: 'Combed Cotton Yarn, Double Layer Construction',
    dimensions: 'Diameter: 12 cm each',
    care: 'Hand wash gently. Iron on low with a pressing cloth if needed.',
    colors: [
      { name: 'Blush & Sage Duo', hex: '#F7C6D0' },
      { name: 'Buttercup & Lilac Duo', hex: '#FFF2B2' }
    ],
    images: [
      'images/product-images/coaster-granny-square.jpg',
      'images/product-images/coaster-sunflower-mug.jpg'
    ],
    stock: 14
  },

  // ==========================================
  // CATEGORY 3: CROCHET BOOKMARKS
  // ==========================================
  {
    id: 7,
    name: 'Little Sprout Leaf Bookmark',
    slug: 'little-sprout-leaf-bookmark',
    category: 'bookmarks',
    categoryName: 'Crochet Bookmarks',
    price: 280,
    originalPrice: 380,
    rating: 5.0,
    reviewsCount: 48,
    badge: 'Customer Love',
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    shortDesc: 'An adorable green crochet sprout stem with two tiny leaves peeking charmingly out of your favorite book.',
    description: 'The internet-famous crochet sprout bookmark! Handcrafted with vibrant leafy green cotton yarn, this little plant sprout rests flat between your pages while the two 3D leaves poke out from the top of the book spine. Never creases or tears delicate book pages.',
    materials: '100% Mercerized Cotton Thread (Durable & Non-Fraying)',
    dimensions: 'Stem Length: 28 cm (Fits paperback and hardcover) | Leaves: 4 cm across',
    care: 'Gently hand wash in cool water if dusty.',
    colors: [
      { name: 'Fresh Spring Green', hex: '#63B76C' },
      { name: 'Pastel Sage Mint', hex: '#95C5A8' },
      { name: 'Olive Green', hex: '#7D8C51' }
    ],
    images: [
      'images/product-images/bookmark-little-sprout.jpg',
      'images/categories/category-bookmarks.jpg'
    ],
    stock: 30
  },
  {
    id: 8,
    name: 'Daisy Ribbon Floral Bookmark',
    slug: 'daisy-ribbon-floral-bookmark',
    category: 'bookmarks',
    categoryName: 'Crochet Bookmarks',
    price: 340,
    originalPrice: 450,
    rating: 4.9,
    reviewsCount: 35,
    badge: 'Trending',
    isFeatured: true,
    isBestSeller: false,
    isNewArrival: true,
    shortDesc: 'Handcrafted pastel daisy blossom with a flat crochet stem marker and delicate leaf tassel charm.',
    description: 'A romantic addition to your reading journal or favorite novel. Features a detailed crochet daisy bloom that hangs over the book top, a slim braided green stem that lays smoothly between pages, and a cute little leaf weight at the bottom.',
    materials: 'Fine Combed Milk Cotton Thread',
    dimensions: 'Total Length: 32 cm | Flower: 4.5 cm diameter',
    care: 'Lay flat when not inside a book.',
    colors: [
      { name: 'Blush Pink Daisy', hex: '#FADADD' },
      { name: 'Sunny White Daisy', hex: '#FFF4A3' },
      { name: 'Lavender Blossom', hex: '#D9C6E8' }
    ],
    images: [
      'images/product-images/bookmark-daisy-chain.jpg',
      'images/categories/category-bookmarks.jpg'
    ],
    stock: 24
  },
  {
    id: 9,
    name: 'Forget-Me-Not Bloom Bookmark',
    slug: 'forget-me-not-bloom-bookmark',
    category: 'bookmarks',
    categoryName: 'Crochet Bookmarks',
    price: 310,
    originalPrice: 400,
    rating: 4.8,
    reviewsCount: 21,
    badge: 'New Arrival',
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    shortDesc: 'A delicate pastel blue flower bookmark with dainty beaded core and trailing scalloped lace stem.',
    description: 'Mark your place in soft fairytale style. Features a 5-petal baby blue blossom with a gold center bead and an ultra-thin lace stem that sits flat without stretching book bindings.',
    materials: 'Micro Cotton Thread, Gold Seed Bead',
    dimensions: 'Length: 30 cm | Flower: 3.5 cm',
    care: 'Gently wipe with soft damp cloth.',
    colors: [
      { name: 'Sky Forget-Me-Not', hex: '#B8DCF5' },
      { name: 'Buttercup Yellow', hex: '#FFF6B8' }
    ],
    images: [
      'images/product-images/bookmark-little-sprout.jpg',
      'images/product-images/bookmark-daisy-chain.jpg'
    ],
    stock: 19
  },

  // ==========================================
  // CATEGORY 4: SIMPLE KEYCHAINS
  // ==========================================
  {
    id: 10,
    name: 'Daisy Bloom Crochet Keychain',
    slug: 'daisy-bloom-crochet-keychain',
    category: 'keychains',
    categoryName: 'Simple Keychains',
    price: 450,
    originalPrice: 600,
    rating: 4.9,
    reviewsCount: 38,
    badge: 'Best Seller',
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    shortDesc: 'Cheerful blooming daisy keychain handcrafted with plush milk cotton yarn and gold lobster swivel clip.',
    description: 'Add a sunny burst of handmade happiness to your keys, handbag, or pencil case! Hand-crocheted petal by petal using premium 5-ply milk cotton yarn, this blooming daisy is pillowy, lightweight, and durable. Comes with an anti-tarnish gold lobster clasp and delicate green leaf charm.',
    materials: '100% Combed Milk Cotton Yarn, Polyester Fiberfill, Gold-plated Zinc Alloy Hardware',
    dimensions: 'Flower: 7.5 cm diameter | Total Length with Clasp: 12.5 cm',
    care: 'Spot clean gently with a damp microfiber cloth and mild soap. Lay flat to dry.',
    colors: [
      { name: 'Sunny Yellow & White', hex: '#FFF4A3' },
      { name: 'Blush Pink & Cream', hex: '#E8A6B4' },
      { name: 'Lavender Mist', hex: '#D9C6E8' }
    ],
    images: [
      'images/product-images/keychain-daisy.jpg',
      'images/categories/category-keychains.jpg'
    ],
    stock: 22
  },
  {
    id: 11,
    name: 'Sweet Strawberry Charm Keychain',
    slug: 'sweet-strawberry-charm-keychain',
    category: 'keychains',
    categoryName: 'Simple Keychains',
    price: 420,
    originalPrice: 550,
    rating: 4.8,
    reviewsCount: 29,
    badge: 'Popular',
    isFeatured: true,
    isBestSeller: false,
    isNewArrival: true,
    shortDesc: 'Adorable 3D amigurumi strawberry charm with hand-embroidered seeds and tiny crochet blossom.',
    description: 'Sweet, vibrant, and utterly charming! This plush 3D strawberry is hand-stitched with fine red and green cotton threads, complete with delicate embroidered seeds and a mini white blossom with gold swivel hook.',
    materials: 'Combed Cotton Yarn, Recycled Polyester Fluff, Gold-Tone Swivel Clasp',
    dimensions: 'Berry: 4.5 cm x 3.5 cm | Total Drop: 9.5 cm',
    care: 'Hand wash gently in cool water if needed. Lay flat to dry.',
    colors: [
      { name: 'Ripe Red & Leaf Green', hex: '#E55964' },
      { name: 'Pastel Baby Pink', hex: '#F8BFC9' }
    ],
    images: [
      'images/product-images/keychain-strawberry.jpg',
      'images/categories/category-keychains.jpg'
    ],
    stock: 18
  },
  {
    id: 12,
    name: 'Blooming Tulip Charm Keychain',
    slug: 'blooming-tulip-charm-keychain',
    category: 'keychains',
    categoryName: 'Simple Keychains',
    price: 390,
    originalPrice: 500,
    rating: 4.8,
    reviewsCount: 23,
    badge: 'Popular',
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    shortDesc: 'An adorable 3D amigurumi pink tulip flower charm with wooden beads and bronze swivel clasp.',
    description: 'Add botanical cottagecore charm to your everyday carry! Hand-crocheted in petal-soft pink milk cotton yarn with twin green leaves and smooth natural wooden beads on a vintage bronze lobster clasp.',
    materials: '100% Milk Cotton Yarn, Natural Wood Beads, Antique Bronze Clasp',
    dimensions: 'Tulip: 5.5 cm x 4.5 cm | Total Length: 13.5 cm',
    care: 'Spot clean with mild damp sponge.',
    colors: [
      { name: 'Pastel Rose Pink', hex: '#EAA6B8' },
      { name: 'Buttercup Yellow', hex: '#FFF2B2' }
    ],
    images: [
      'images/product-images/keychain-tulip.jpg',
      'images/categories/category-keychains.jpg'
    ],
    stock: 20
  },
  {
    id: 16,
    name: 'Pink Crochet Bow Keychain',
    slug: 'pink-crochet-bow-keychain',
    category: 'keychains',
    categoryName: 'Simple Keychains',
    price: 350,
    originalPrice: 450,
    rating: 4.9,
    reviewsCount: 34,
    badge: 'Trending',
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: true,
    shortDesc: 'A sweet handmade baby pink crochet bow keychain with flowing ribbon tails and a gold swivel clasp.',
    description: 'Delicate, sweet, and charming! Hand-crocheted from ultra-soft 5-ply combed milk cotton yarn in an adorable baby pink hue, this dainty ribbon bow keychain features neat structured loops and pretty draped tails. Finished with an anti-tarnish gold-plated swivel lobster clasp and split keyring, it adds the perfect touch of handmade sweetness to keys, tote bags, backpacks, and AirPods.',
    materials: '100% Combed Milk Cotton Yarn, Anti-Tarnish Gold-Plated Swivel Lobster Clasp & Keyring',
    dimensions: 'Bow: 6.8 cm x 4.8 cm | Ribbon Tail Drop: 4.2 cm | Total Length with Clasp: 11.5 cm',
    care: 'Spot clean gently with a damp cloth and mild soap. Lay flat to dry.',
    colors: [
      { name: 'Baby Blush Pink', hex: '#FADADD' },
      { name: 'Petal Rose Pink', hex: '#F4B6C2' },
      { name: 'Dusty Pink & Cream', hex: '#E8A6B4' }
    ],
    images: [
      'images/product-images/keychain-pink-bow.jpg',
      'images/categories/category-keychains.jpg'
    ],
    stock: 25
  },
  {
    id: 17,
    name: 'Purple Lily of the Valley Crochet Keychain',
    slug: 'purple-lily-of-the-valley-crochet-keychain',
    category: 'keychains',
    categoryName: 'Simple Keychains',
    price: 390,
    originalPrice: 490,
    rating: 4.9,
    reviewsCount: 28,
    badge: 'Popular',
    isFeatured: true,
    isBestSeller: false,
    isNewArrival: true,
    shortDesc: 'Handmade pastel purple crochet lily of the valley bell charm with delicate scalloped blossoms and gold clasp.',
    description: 'Fairytale floral sweetness! Hand-crocheted using soft 5-ply milk cotton yarn in enchanting pastel purple and lilac tones, this delicate lily of the valley keychain features hanging bell-shaped blossoms with ruffled scalloped rims and gentle sage green leaves. Mounted on an anti-tarnish gold lobster swivel clasp and keyring, it adds magical cottagecore charm to tote bags, keys, backpacks, and accessories.',
    materials: '100% Combed Milk Cotton Yarn, Anti-Tarnish Gold-Plated Swivel Lobster Clasp & Split Ring',
    dimensions: 'Blossoms Cluster: 7.5 cm x 4.0 cm | Total Drop with Clasp: 12.5 cm',
    care: 'Spot clean gently with a damp microfiber cloth and mild soap. Lay flat to air dry.',
    colors: [
      { name: 'Pastel Purple Lilac', hex: '#BFA2DB' },
      { name: 'Lavender Mist', hex: '#D6C7E8' },
      { name: 'Soft Violet', hex: '#8E6EAC' }
    ],
    images: [
      'images/product-images/keychain-lily-of-valley.jpg',
      'images/categories/category-keychains.jpg'
    ],
    stock: 20
  },

  // ==========================================
  // CATEGORY 5: SIMPLE HAIR CLIPS
  // ==========================================
  {
    id: 13,
    name: 'Daisy Crochet Snap Clips (Set of 2)',
    slug: 'daisy-crochet-snap-clips',
    category: 'hair-clips',
    categoryName: 'Simple Hair Clips',
    price: 380,
    originalPrice: 480,
    rating: 4.9,
    reviewsCount: 37,
    badge: 'Best Seller',
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    shortDesc: 'Pair of sweet crochet daisy flower barrettes mounted on snag-free gold alligator clips.',
    description: 'Keep your fringe neat with fairytale floral sweetness! Features 2 handcrafted mini daisies in white and blush pink mounted onto gold alligator clips with teeth-grip that stay securely in thin or thick hair.',
    materials: 'Fine Combed Cotton Thread, 5.5 cm Gold-Tone Alligator Clips',
    dimensions: 'Daisy Diameter: 3.2 cm | Clip Length: 5.5 cm',
    care: 'Keep dry. Wipe metal clips with soft cloth.',
    colors: [
      { name: 'Daisy Duo (White & Blush)', hex: '#FFF2B2' },
      { name: 'Pastel Lavender & Sage', hex: '#D6C7E8' }
    ],
    images: [
      'images/product-images/hairclips-floral-set.jpg',
      'images/categories/category-hairclips.jpg'
    ],
    stock: 25
  },
  {
    id: 14,
    name: 'Blush Petal Crochet Hair Clip',
    slug: 'blush-petal-crochet-hair-clip',
    category: 'hair-clips',
    categoryName: 'Simple Hair Clips',
    price: 350,
    originalPrice: 440,
    rating: 4.8,
    reviewsCount: 24,
    badge: 'Popular',
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    shortDesc: 'A dainty handcrafted blush pink crochet petal barrette accented with a sweet white blossom.',
    description: 'Add soft cottagecore romance to your everyday hairstyle! Hand-stitched with premium milk cotton yarn in a delicate blush pink teardrop weave with a white accent flower, set securely on a gold alligator clip.',
    materials: '100% Combed Milk Cotton Thread, Gold Alligator Clip',
    dimensions: 'Clip Length: 5.5 cm | Petal Width: 3.0 cm',
    care: 'Spot clean gently.',
    colors: [
      { name: 'Blush & White Flower', hex: '#FADADD' },
      { name: 'Peach Blossom', hex: '#FBE8E0' }
    ],
    images: [
      'images/product-images/hairclip-strawberry.jpg',
      'images/categories/category-hairclips.jpg'
    ],
    stock: 16
  },
  {
    id: 15,
    name: 'Lavender Floral Alligator Clip',
    slug: 'lavender-floral-alligator-clip',
    category: 'hair-clips',
    categoryName: 'Simple Hair Clips',
    price: 360,
    originalPrice: 450,
    rating: 4.9,
    reviewsCount: 22,
    badge: 'Customer Love',
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: true,
    shortDesc: 'A delicate textured lavender sprig blossom hand-crocheted on a snag-free gold alligator clip.',
    description: 'Bring calming wildflower beauty to your hair! Meticulously hand-crocheted with fine purple cotton thread in a 3D double lavender blossom sprig with green stem, attached to a teeth-grip gold alligator clip that holds hair securely.',
    materials: 'Fine Combed Cotton Thread, Gold-Tone Alligator Clip',
    dimensions: 'Sprig: 5 cm x 3.5 cm | Clip: 5.5 cm',
    care: 'Keep dry. Wipe metal clip with soft cloth.',
    colors: [
      { name: 'Lavender Mist', hex: '#A389D4' },
      { name: 'Deep Violet', hex: '#7D5BA6' }
    ],
    images: [
      'images/product-images/hairclip-butterfly.jpg',
      'images/categories/category-hairclips.jpg'
    ],
    stock: 19
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
