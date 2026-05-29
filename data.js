// ============================================================
//  TerviesDummy – Product Data
// ============================================================

const PRODUCTS = [
  // ── SAREES ──────────────────────────────────────────────
  {
    id: 1, name: "Kanchipuram Pure Silk Saree", category: "saree",
    price: 8499, originalPrice: 12000, fabric: "silk", occasion: "bridal",
    color: "red", rating: 4.8, reviews: 124, badge: "Bestseller", sale: false,
    images: [
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80",
      "https://images.unsplash.com/photo-1610189020017-6e56e5e7e70c?w=600&q=80"
    ],
    sizes: ["Free Size"],
    description: "A timeless Kanchipuram silk saree woven with intricate zari borders and pallu. Perfect for weddings and grand celebrations.",
    details: { Weight: "800g", Blouse: "Included (unstitched)", Length: "6.3 meters", Care: "Dry clean only", Origin: "Kanchipuram, Tamil Nadu" }
  },
  {
    id: 2, name: "Banarasi Georgette Saree", category: "saree",
    price: 3299, originalPrice: 4500, fabric: "georgette", occasion: "festive",
    color: "blue", rating: 4.5, reviews: 89, badge: "New", sale: false,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80"
    ],
    sizes: ["Free Size"],
    description: "Elegant Banarasi georgette saree with intricate brocade weaving. The lightweight fabric drapes beautifully for all occasions.",
    details: { Weight: "500g", Blouse: "Included (unstitched)", Length: "6 meters", Care: "Dry clean only", Origin: "Varanasi, UP" }
  },
  {
    id: 3, name: "Chanderi Cotton Silk Saree", category: "saree",
    price: 1899, originalPrice: 2800, fabric: "silk", occasion: "casual",
    color: "green", rating: 4.3, reviews: 56, badge: "Sale", sale: true,
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&q=80"
    ],
    sizes: ["Free Size"],
    description: "Lightweight Chanderi cotton-silk blend with delicate gold motifs. Perfect for summer and office wear.",
    details: { Weight: "400g", Blouse: "Included (unstitched)", Length: "6.2 meters", Care: "Hand wash cold", Origin: "Chanderi, MP" }
  },
  {
    id: 4, name: "Pure Linen Jamdani Saree", category: "saree",
    price: 4299, originalPrice: 5500, fabric: "cotton", occasion: "casual",
    color: "white", rating: 4.6, reviews: 43, badge: null, sale: false,
    images: [
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=80"
    ],
    sizes: ["Free Size"],
    description: "Handwoven Jamdani linen saree with traditional motifs. A collector's piece for the connoisseur.",
    details: { Weight: "450g", Blouse: "Included (unstitched)", Length: "6 meters", Care: "Dry clean preferred", Origin: "Dhaniakhali, WB" }
  },

  // ── LEHENGAS ─────────────────────────────────────────────
  {
    id: 5, name: "Bridal Embroidered Lehenga Choli", category: "lehenga",
    price: 18999, originalPrice: 28000, fabric: "net", occasion: "bridal",
    color: "red", rating: 4.9, reviews: 67, badge: "Bestseller", sale: false,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "Custom"],
    description: "Stunning bridal lehenga with heavy zardozi and mirror work. Comes with matching choli and dupatta. A dream come true for your special day.",
    details: { Lehenga: "Net with silk lining", Blouse: "Fully stitched", Dupatta: "Included", Embroidery: "Zardozi + Mirror", Care: "Dry clean only" }
  },
  {
    id: 6, name: "Festive Silk Lehenga Choli", category: "lehenga",
    price: 7499, originalPrice: 11000, fabric: "silk", occasion: "festive",
    color: "pink", rating: 4.7, reviews: 92, badge: "New", sale: false,
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Vibrant festive lehenga in pure silk with gota patti work. Perfect for Navratri, Diwali, and family functions.",
    details: { Material: "Pure silk", Blouse: "Fully stitched", Dupatta: "Net with sequins", Work: "Gota patti", Care: "Dry clean" }
  },
  {
    id: 7, name: "Designer Floral Print Lehenga", category: "lehenga",
    price: 4199, originalPrice: 6000, fabric: "georgette", occasion: "party",
    color: "purple", rating: 4.4, reviews: 38, badge: "Sale", sale: true,
    images: [
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Contemporary floral print lehenga with digital print and heavy border. Great for parties and sangeet ceremonies.",
    details: { Material: "Georgette", Blouse: "Unstitched", Dupatta: "Chiffon", Print: "Digital floral", Care: "Dry clean" }
  },
  {
    id: 8, name: "Pastel Chiffon Lehenga Set", category: "lehenga",
    price: 5999, originalPrice: 8500, fabric: "chiffon", occasion: "party",
    color: "pink", rating: 4.5, reviews: 51, badge: null, sale: false,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    description: "Dreamy pastel chiffon lehenga with thread embroidery and sequin detailing. Perfect for cocktail parties and mehndi.",
    details: { Material: "Chiffon", Blouse: "Fully stitched", Dupatta: "Net", Work: "Thread embroidery + sequins", Care: "Dry clean" }
  },

  // ── KURTIS ───────────────────────────────────────────────
  {
    id: 9, name: "Lucknowi Chikankari Kurti", category: "kurti",
    price: 1299, originalPrice: 1800, fabric: "cotton", occasion: "casual",
    color: "white", rating: 4.6, reviews: 203, badge: "Bestseller", sale: false,
    images: [
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Authentic Lucknowi chikankari hand-embroidered kurti in pure cotton. Breathable and perfect for everyday wear.",
    details: { Fabric: "100% cotton", Work: "Chikankari hand embroidery", Length: "44 inches", Care: "Hand wash cold", Origin: "Lucknow, UP" }
  },
  {
    id: 10, name: "Block Print Straight Kurti", category: "kurti",
    price: 849, originalPrice: 1200, fabric: "cotton", occasion: "casual",
    color: "blue", rating: 4.2, reviews: 156, badge: null, sale: true,
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Handblock printed cotton kurti with Rajasthani motifs. Comfortable for daily wear and office.",
    details: { Fabric: "Cotton", Print: "Hand block print", Length: "42 inches", Care: "Machine wash", Origin: "Jaipur, Rajasthan" }
  },
  {
    id: 11, name: "Anarkali Kurti with Palazzo Set", category: "kurti",
    price: 2199, originalPrice: 3200, fabric: "georgette", occasion: "festive",
    color: "purple", rating: 4.5, reviews: 88, badge: "New", sale: false,
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Elegant Anarkali style kurti paired with matching flared palazzo. Perfect for festivals and family gatherings.",
    details: { Top: "Georgette", Bottom: "Cotton blend", Work: "Printed + embroidered borders", Care: "Dry clean" }
  },
  {
    id: 12, name: "Silk Blend A-Line Kurti", category: "kurti",
    price: 1599, originalPrice: 2400, fabric: "silk", occasion: "party",
    color: "green", rating: 4.4, reviews: 64, badge: null, sale: false,
    images: [
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    description: "A-line kurti in silk blend with subtle zari work on the hem and neckline. Versatile for both casual and semi-formal occasions.",
    details: { Fabric: "Silk blend", Work: "Zari border", Length: "46 inches", Care: "Dry clean recommended" }
  },

  // ── SHERWANIS ─────────────────────────────────────────────
  {
    id: 13, name: "Royal Brocade Sherwani", category: "sherwani",
    price: 12999, originalPrice: 18000, fabric: "silk", occasion: "bridal",
    color: "yellow", rating: 4.8, reviews: 45, badge: "Bestseller", sale: false,
    images: [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "Custom"],
    description: "Majestic brocade sherwani with intricate embroidery and churidar. Complete with stole and pocket square. Perfect for groom wear.",
    details: { Fabric: "Brocade with silk lining", Embroidery: "Thread + zari", Includes: "Sherwani + churidar + stole", Care: "Dry clean only" }
  },
  {
    id: 14, name: "Indo-Western Nehru Jacket Set", category: "sherwani",
    price: 4999, originalPrice: 7000, fabric: "cotton", occasion: "festive",
    color: "blue", rating: 4.5, reviews: 62, badge: "New", sale: false,
    images: [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Stylish indo-western Nehru jacket with matching kurta and trouser. A perfect blend of tradition and modernity.",
    details: { Jacket: "Cotton silk", Kurta: "Cotton", Trouser: "Cotton", Work: "Printed + buttons", Care: "Dry clean" }
  },
  {
    id: 15, name: "Festive Embroidered Kurta Set", category: "sherwani",
    price: 3499, originalPrice: 5000, fabric: "cotton", occasion: "festive",
    color: "green", rating: 4.3, reviews: 78, badge: null, sale: true,
    images: [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Elegant men's kurta with embroidered yoke and matching churidar. Ideal for Diwali, Eid, and festive occasions.",
    details: { Kurta: "Cotton with embroidery", Bottom: "Churidar included", Care: "Machine wash gentle" }
  },

  // ── ANARKALIS ─────────────────────────────────────────────
  {
    id: 16, name: "Floor-Length Anarkali Suit", category: "anarkali",
    price: 5499, originalPrice: 7500, fabric: "georgette", occasion: "festive",
    color: "purple", rating: 4.7, reviews: 93, badge: "Bestseller", sale: false,
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Dramatic floor-length Anarkali in georgette with heavy embroidery. Comes with matching churidar and dupatta.",
    details: { Top: "Georgette", Bottom: "Churidar (included)", Dupatta: "Chiffon", Work: "Sequin + thread embroidery", Care: "Dry clean" }
  },
  {
    id: 17, name: "Printed Cotton Anarkali Kurta", category: "anarkali",
    price: 1499, originalPrice: 2200, fabric: "cotton", occasion: "casual",
    color: "blue", rating: 4.4, reviews: 112, badge: null, sale: false,
    images: [
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Flowy cotton Anarkali with vibrant prints. Lightweight and comfortable for day-to-day wear.",
    details: { Fabric: "100% cotton", Print: "Digital print", Length: "52 inches", Care: "Machine wash" }
  },
  {
    id: 18, name: "Net Embroidered Anarkali Gown", category: "anarkali",
    price: 7999, originalPrice: 11000, fabric: "net", occasion: "party",
    color: "pink", rating: 4.6, reviews: 58, badge: "New", sale: false,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    description: "Gorgeous net Anarkali gown with all-over embroidery and sequin work. Perfect for sangeet and reception parties.",
    details: { Fabric: "Net with silk inner", Work: "Full embroidery + sequins", Dupatta: "Included", Care: "Dry clean only" }
  },

  // ── DUPATTAS ──────────────────────────────────────────────
  {
    id: 19, name: "Banarasi Brocade Dupatta", category: "dupatta",
    price: 1299, originalPrice: 2000, fabric: "silk", occasion: "festive",
    color: "red", rating: 4.5, reviews: 74, badge: null, sale: false,
    images: [
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80"
    ],
    sizes: ["Free Size"],
    description: "Gorgeous Banarasi brocade dupatta with golden zari weaving. Pairs beautifully with any ethnic outfit.",
    details: { Fabric: "Silk brocade", Dimensions: "2.5m × 1m", Work: "Zari weaving", Care: "Dry clean" }
  },
  {
    id: 20, name: "Phulkari Embroidered Dupatta", category: "dupatta",
    price: 899, originalPrice: 1400, fabric: "cotton", occasion: "casual",
    color: "yellow", rating: 4.3, reviews: 91, badge: "Sale", sale: true,
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&q=80"
    ],
    sizes: ["Free Size"],
    description: "Traditional Phulkari hand embroidered dupatta from Punjab. Vibrant floral patterns on cotton base.",
    details: { Fabric: "Cotton", Work: "Phulkari hand embroidery", Dimensions: "2.5m × 1m", Care: "Gentle hand wash", Origin: "Punjab" }
  },

  // ── MORE PRODUCTS ─────────────────────────────────────────
  {
    id: 21, name: "Ikkat Silk Saree", category: "saree",
    price: 5499, originalPrice: 7200, fabric: "silk", occasion: "festive",
    color: "purple", rating: 4.5, reviews: 47, badge: null, sale: false,
    images: ["https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80"],
    sizes: ["Free Size"],
    description: "Handwoven Ikkat silk saree with bold geometric patterns. Each piece is unique due to the resist-dyeing technique.",
    details: { Fabric: "Pure silk", Work: "Ikkat weave", Blouse: "Unstitched", Care: "Dry clean", Origin: "Pochampally, Telangana" }
  },
  {
    id: 22, name: "Cotton Bandhani Saree", category: "saree",
    price: 1599, originalPrice: 2400, fabric: "cotton", occasion: "casual",
    color: "yellow", rating: 4.2, reviews: 83, badge: "Sale", sale: true,
    images: ["https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=80"],
    sizes: ["Free Size"],
    description: "Vibrant Bandhani tie-dye cotton saree from Rajasthan. Bright colours perfect for summer festivals.",
    details: { Fabric: "Cotton", Technique: "Bandhani tie-dye", Blouse: "Included", Care: "Hand wash cold", Origin: "Jaipur, Rajasthan" }
  },
  {
    id: 23, name: "Embroidered Palazzo Suit", category: "kurti",
    price: 2799, originalPrice: 4000, fabric: "georgette", occasion: "party",
    color: "blue", rating: 4.5, reviews: 66, badge: "New", sale: false,
    images: ["https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&q=80"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Stunning three-piece palazzo suit with embroidered kurti, palazzo and dupatta. Great for parties and evening functions.",
    details: { Top: "Georgette", Bottom: "Palazzo pants included", Dupatta: "Included", Work: "Sequin + thread" }
  },
  {
    id: 24, name: "Patola Silk Saree", category: "saree",
    price: 9999, originalPrice: 14000, fabric: "silk", occasion: "bridal",
    color: "red", rating: 4.9, reviews: 29, badge: "Premium", sale: false,
    images: ["https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80"],
    sizes: ["Free Size"],
    description: "Authentic double-ikat Patola saree handwoven by artisans in Patan, Gujarat. A true heirloom piece.",
    details: { Fabric: "Pure silk", Technique: "Double ikat", Blouse: "Unstitched", Care: "Dry clean only", Origin: "Patan, Gujarat" }
  },
  {
    id: 25, name: "Sharara Suit Set", category: "anarkali",
    price: 4499, originalPrice: 6500, fabric: "georgette", occasion: "party",
    color: "green", rating: 4.6, reviews: 55, badge: null, sale: false,
    images: ["https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Trendy sharara suit with embroidered kurti and flared sharara pants. Perfect for mehndi and cocktail parties.",
    details: { Top: "Georgette embroidered", Bottom: "Sharara pants", Dupatta: "Chiffon included", Care: "Dry clean" }
  },
  {
    id: 26, name: "Linen Kurta Pajama Set", category: "sherwani",
    price: 1899, originalPrice: 2800, fabric: "cotton", occasion: "casual",
    color: "white", rating: 4.3, reviews: 88, badge: null, sale: true,
    images: ["https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Comfortable linen kurta pajama for everyday wear. Breathable fabric ideal for summer.",
    details: { Fabric: "Linen", Bottom: "Pajama included", Care: "Machine washable" }
  },
  {
    id: 27, name: "Velvet Lehenga Choli", category: "lehenga",
    price: 11999, originalPrice: 16000, fabric: "silk", occasion: "bridal",
    color: "purple", rating: 4.7, reviews: 36, badge: "Exclusive", sale: false,
    images: ["https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&q=80"],
    sizes: ["S", "M", "L", "XL", "Custom"],
    description: "Luxurious velvet lehenga with hand-embroidered choli and net dupatta. Perfect for winter weddings.",
    details: { Lehenga: "Velvet", Blouse: "Fully stitched", Dupatta: "Net with sequins", Work: "Heavy hand embroidery", Care: "Dry clean only" }
  },
  {
    id: 28, name: "Kalamkari Print Kurti", category: "kurti",
    price: 999, originalPrice: 1500, fabric: "cotton", occasion: "casual",
    color: "blue", rating: 4.1, reviews: 144, badge: "Sale", sale: true,
    images: ["https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=80"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Traditional Kalamkari hand-painted kurti with mythological motifs. Authentic artisan craft from Andhra Pradesh.",
    details: { Fabric: "Cotton", Print: "Hand-painted Kalamkari", Length: "44 inches", Care: "Gentle hand wash", Origin: "Srikalahasti, AP" }
  }
];

// Helper to format price in INR
function formatPrice(n) {
  return '₹' + n.toLocaleString('en-IN');
}

// Discount percent
function discountPct(price, orig) {
  return Math.round((1 - price / orig) * 100);
}
