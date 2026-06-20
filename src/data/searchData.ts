export type SearchItem = {
  id: string
  title: string
  category: string
  type: 'product' | 'page' | 'look' | 'article'
  path: string
  image?: string
  price?: string
}

export const searchData: SearchItem[] = [
  // ── Abayas ──────────────────────────────────────────────
  { id: 'a1', title: 'Midnight Classic Abaya', category: 'Abayas', type: 'product', path: '/abayas', price: 'AED 1,800',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=120&h=160&fit=crop&q=80' },
  { id: 'a2', title: 'Gold Thread Abaya', category: 'Abayas', type: 'product', path: '/abayas', price: 'AED 2,600',
    image: 'https://images.unsplash.com/photo-1772474500365-c2c520545f44?w=120&h=160&fit=crop&q=80' },
  { id: 'a3', title: 'Onyx Crystal Abaya', category: 'Abayas', type: 'product', path: '/abayas', price: 'AED 3,200',
    image: 'https://images.unsplash.com/photo-1772474578035-bebcd90b355d?w=120&h=160&fit=crop&q=80' },
  { id: 'a4', title: 'Ivory Embossed Abaya', category: 'Abayas', type: 'product', path: '/abayas', price: 'AED 2,800',
    image: 'https://images.unsplash.com/photo-1760083545495-b297b1690672?w=120&h=160&fit=crop&q=80' },
  { id: 'a5', title: 'Deep Navy Abaya', category: 'Abayas', type: 'product', path: '/abayas', price: 'AED 1,950',
    image: 'https://images.unsplash.com/photo-1728487235101-664d87965931?w=120&h=160&fit=crop&q=80' },
  { id: 'a6', title: 'Rose Dust Kaftan Abaya', category: 'Abayas', type: 'product', path: '/abayas', price: 'AED 2,200',
    image: 'https://images.unsplash.com/photo-1752794673269-dc356838c5fd?w=120&h=160&fit=crop&q=80' },
  { id: 'a7', title: 'Sage Linen Abaya', category: 'Abayas', type: 'product', path: '/abayas', price: 'AED 1,600',
    image: 'https://images.unsplash.com/photo-1762376128087-bc29c6df08c0?w=120&h=160&fit=crop&q=80' },
  { id: 'a8', title: 'Midnight Blossom Abaya', category: 'Abayas', type: 'product', path: '/abayas', price: 'AED 2,950',
    image: 'https://images.unsplash.com/photo-1772474587292-08b3e8932acd?w=120&h=160&fit=crop&q=80' },
  { id: 'a9', title: 'Pearl Shimmer Abaya', category: 'Abayas', type: 'product', path: '/abayas', price: 'AED 3,400',
    image: 'https://images.unsplash.com/photo-1736342182213-6c037467cb38?w=120&h=160&fit=crop&q=80' },

  // ── Evening Wear ─────────────────────────────────────────
  { id: 'e1', title: 'Golden Hour Gown', category: 'Evening Wear', type: 'product', path: '/evening-wear', price: 'AED 5,800',
    image: 'https://images.unsplash.com/photo-1771774470158-2b18c74757f1?w=120&h=160&fit=crop&q=80' },
  { id: 'e2', title: 'Pearl Embroidered Gown', category: 'Evening Wear', type: 'product', path: '/evening-wear', price: 'AED 5,200',
    image: 'https://images.unsplash.com/photo-1776841818478-16dbaba4001a?w=120&h=160&fit=crop&q=80' },
  { id: 'e3', title: 'Golden Veil Kaftan', category: 'Evening Wear', type: 'product', path: '/evening-wear', price: 'AED 3,800',
    image: 'https://images.unsplash.com/photo-1774460699436-c408cc1408c3?w=120&h=160&fit=crop&q=80' },
  { id: 'e4', title: 'Champagne Silk Kaftan', category: 'Evening Wear', type: 'product', path: '/evening-wear', price: 'AED 3,200',
    image: 'https://images.unsplash.com/photo-1776841818483-700f88aace44?w=120&h=160&fit=crop&q=80' },
  { id: 'e5', title: 'Noir Crystal Co-ord', category: 'Evening Wear', type: 'product', path: '/evening-wear', price: 'AED 4,100',
    image: 'https://images.unsplash.com/photo-1764998112680-2f617dc9be40?w=120&h=160&fit=crop&q=80' },
  { id: 'e6', title: 'Burgundy Velvet Gown', category: 'Evening Wear', type: 'product', path: '/evening-wear', price: 'AED 6,400',
    image: 'https://images.unsplash.com/photo-1770045517872-73c5301fa137?w=120&h=160&fit=crop&q=80' },
  { id: 'e7', title: 'Ivory Feather Trim Gown', category: 'Evening Wear', type: 'product', path: '/evening-wear', price: 'AED 7,200',
    image: 'https://images.unsplash.com/photo-1756483492038-974f2a2ff341?w=120&h=160&fit=crop&q=80' },
  { id: 'e8', title: 'Emerald Wrap Kaftan', category: 'Evening Wear', type: 'product', path: '/evening-wear', price: 'AED 2,900',
    image: 'https://images.unsplash.com/photo-1768767112566-dc12dbe40aae?w=120&h=160&fit=crop&q=80' },
  { id: 'e9', title: 'Midnight Jumpsuit', category: 'Evening Wear', type: 'product', path: '/evening-wear', price: 'AED 3,500',
    image: 'https://images.unsplash.com/photo-1776841819019-999c928d9928?w=120&h=160&fit=crop&q=80' },

  // ── Resort ───────────────────────────────────────────────
  { id: 'r1', title: 'Linen Resort Dress', category: 'Resort', type: 'product', path: '/resort-collection', price: 'AED 1,650',
    image: 'https://images.unsplash.com/photo-1767451629607-d368381d1e4c?w=120&h=160&fit=crop&q=80' },
  { id: 'r2', title: 'Azure Resort Co-ord', category: 'Resort', type: 'product', path: '/resort-collection', price: 'AED 1,900',
    image: 'https://images.unsplash.com/photo-1759825413444-e7bd2dab7091?w=120&h=160&fit=crop&q=80' },
  { id: 'r3', title: 'Saffron Silk Dress', category: 'Resort', type: 'product', path: '/resort-collection', price: 'AED 2,100',
    image: 'https://images.unsplash.com/photo-1773777498906-bfd9f2271ee1?w=120&h=160&fit=crop&q=80' },
  { id: 'r4', title: 'White Eyelet Cover-Up', category: 'Resort', type: 'product', path: '/resort-collection', price: 'AED 980',
    image: 'https://images.unsplash.com/photo-1777545151770-000221c89fde?w=120&h=160&fit=crop&q=80' },
  { id: 'r5', title: 'Terracotta Wrap Dress', category: 'Resort', type: 'product', path: '/resort-collection', price: 'AED 1,750',
    image: 'https://images.unsplash.com/photo-1763559038700-a4dd423bafba?w=120&h=160&fit=crop&q=80' },
  { id: 'r6', title: 'Aqua Silk Co-ord', category: 'Resort', type: 'product', path: '/resort-collection', price: 'AED 2,200',
    image: 'https://images.unsplash.com/photo-1759825413442-dfcd3449d061?w=120&h=160&fit=crop&q=80' },
  { id: 'r7', title: 'Blush Printed Top', category: 'Resort', type: 'product', path: '/resort-collection', price: 'AED 650',
    image: 'https://images.unsplash.com/photo-1767440398636-eb35f46bb342?w=120&h=160&fit=crop&q=80' },
  { id: 'r8', title: 'Ivory Crochet Cover-Up', category: 'Resort', type: 'product', path: '/resort-collection', price: 'AED 1,100',
    image: 'https://images.unsplash.com/photo-1776633734208-3cdf89a7fbf0?w=120&h=160&fit=crop&q=80' },

  // ── New Arrivals ─────────────────────────────────────────
  { id: 'n1', title: 'Midnight Silk Abaya', category: 'New Arrivals', type: 'product', path: '/new-arrivals', price: 'AED 2,400',
    image: 'https://images.unsplash.com/photo-1772474500365-c2c520545f44?w=120&h=160&fit=crop&q=80' },
  { id: 'n5', title: 'Ivory Embossed Abaya', category: 'New Arrivals', type: 'product', path: '/new-arrivals', price: 'AED 2,800',
    image: 'https://images.unsplash.com/photo-1760083545495-b297b1690672?w=120&h=160&fit=crop&q=80' },
  { id: 'n6', title: 'Champagne Evening Set', category: 'New Arrivals', type: 'product', path: '/new-arrivals', price: 'AED 4,100',
    image: 'https://images.unsplash.com/photo-1771774470158-2b18c74757f1?w=120&h=160&fit=crop&q=80' },
  { id: 'n8', title: 'Onyx Crystal Abaya', category: 'New Arrivals', type: 'product', path: '/new-arrivals', price: 'AED 3,200',
    image: 'https://images.unsplash.com/photo-1772474578035-bebcd90b355d?w=120&h=160&fit=crop&q=80' },

  // ── Bespoke Services ─────────────────────────────────────
  { id: 'b1', title: 'Bridal Couture', category: 'Bespoke', type: 'product', path: '/bespoke-services', price: 'From AED 8,000' },
  { id: 'b2', title: 'Evening Masterpiece', category: 'Bespoke', type: 'product', path: '/bespoke-services', price: 'From AED 5,000' },
  { id: 'b3', title: 'Signature Abaya', category: 'Bespoke', type: 'product', path: '/bespoke-services', price: 'From AED 2,500' },
  { id: 'b4', title: 'Complete Wardrobe', category: 'Bespoke', type: 'product', path: '/bespoke-services', price: 'Bespoke pricing' },

  // ── Journal ──────────────────────────────────────────────
  { id: 'j0', title: 'The Art of the Abaya: A Story of Reinvention', category: 'Journal', type: 'article', path: '/journal' },
  { id: 'j1', title: 'Fabric Diaries: Why We Chose Italian Silk', category: 'Journal', type: 'article', path: '/journal' },
  { id: 'j2', title: 'Dressing for Power: The New Language of Modest Fashion', category: 'Journal', type: 'article', path: '/journal' },
  { id: 'j3', title: 'Resort Ready: Building Your Holiday Wardrobe', category: 'Journal', type: 'article', path: '/journal' },
  { id: 'j4', title: 'Inside the Atelier: A Day in Our Dubai Studio', category: 'Journal', type: 'article', path: '/journal' },
  { id: 'j5', title: 'Embroidery: The Language of Our Craft', category: 'Journal', type: 'article', path: '/journal' },
  { id: 'j6', title: 'How to Style an Abaya for Every Occasion', category: 'Journal', type: 'article', path: '/journal' },

  // ── Pages ────────────────────────────────────────────────
  { id: 'p1', title: 'New Arrivals', category: 'Page', type: 'page', path: '/new-arrivals' },
  { id: 'p2', title: 'Collections', category: 'Page', type: 'page', path: '/collections' },
  { id: 'p3', title: 'Lookbook — SS 2025', category: 'Page', type: 'page', path: '/lookbook' },
  { id: 'p4', title: 'Bespoke Services', category: 'Page', type: 'page', path: '/bespoke-services' },
  { id: 'p5', title: 'About Shelby Atelier', category: 'Page', type: 'page', path: '/about' },
  { id: 'p6', title: 'The Journal', category: 'Page', type: 'page', path: '/journal' },
  { id: 'p7', title: 'Contact Us', category: 'Page', type: 'page', path: '/contact' },
]
