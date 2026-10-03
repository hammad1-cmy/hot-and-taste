/* Fact-Forcing Declaration:
  Importers/Callers: index.html line 482 via <script src="app.js"></script>.
  Affected API: Master QSR category database, continuous menu renderer with themed hero banners, 2-way IntersectionObserver scrollspy engine, slide-out cart drawer, and live KDS 4-step order tracker sync.
  Data Schemas:
    CartItem: { cartItemId: string, id: string, name: string, price: number, image: string, qty: number, options: object, notes: string }
    OrderRecord: { id: string, orderNumber: string, items: CartItem[], total: number, branch: string, type: string, status: string, time: string, instructions: string }
  User Verbatim Instruction: "i really like the dr zesty part and its placement right below , also its animation i really enjoy and love that adopt that part , regarding revrse engineering you failed at that as in kfc if you see closely few deals appear than there is a option of full menu than we click ther than whole menu is shown starting from deals than we go down than show burger with a banner of burger and attractive match theme than burger starts so also on upper side which is shown switch automatically from deal to burger thanscroll more down than to loaded fries banner also on upper side automatically switch from burger to loaded fries , if you wanna understand what i mean , check kfc or most importantly to understand and before implementation check website of restaurant name 'daily deli co.' ... yes also at last show make diagram which can be understand even by five year old child ,of order processing , like how you will track in steps , like first recieve , than prepare freshly than dispatch and than deliver . also at last also a section tellign story and also number to contact"
*/

// ==========================================
// 1. MASTER MENU DATABASE ACROSS QSR CATEGORIES
// ==========================================
const MENU_CATEGORIES = [
  {
    id: 'combos',
    slug: 'cat-combos',
    name: 'Deals & Combos',
    icon: '🔥',
    kicker: 'Signature Box Meals',
    title: 'Hot Combos & Family Feasts',
    desc: 'Complete curated meals paired with seasoned fries and chilled drinks for individuals, couples & families.',
    themeClass: 'theme-combos'
  },
  {
    id: 'burgers',
    slug: 'cat-burgers',
    name: 'Burgers',
    icon: '',
    kicker: '100% Prime Angus & 12-Spice Crispy Chicken',
    title: 'Burgers',
    desc: 'Buttery brioche buns toasted in garlic butter, stacked with double-smashed beef or golden crunchy fillets.',
    themeClass: 'theme-burgers'
  },
  {
    id: 'pizzas',
    slug: 'cat-pizzas',
    name: 'Pizzas',
    icon: '',
    kicker: '24-Hour Fermented Dough',
    title: 'Stone-Fired Pizzas',
    desc: 'Hand-stretched dough topped with San Marzano style sauce, rich dairy mozzarella, and charred in 450°C stone ovens.',
    themeClass: 'theme-pizzas'
  },
  {
    id: 'fries',
    slug: 'cat-fries',
    name: 'Loaded Fries & Sides',
    icon: '',
    kicker: 'Crispy Golden Sides',
    title: 'Loaded Fries & Bites',
    desc: 'Golden crisp skin-on fries smothered in aged cheddar sauce, jalapeno ranch, and smoked chicken chunks.',
    themeClass: 'theme-fries'
  },
  {
    id: 'shawarmas',
    slug: 'cat-shawarmas',
    name: 'Shawarmas',
    icon: '',
    kicker: 'Charcoal Flame Roasted',
    title: 'Artisan Shawarmas & Wraps',
    desc: 'Marinated chicken spit-roasted over hot coals, wrapped in warm Lebanese pita with authentic toum garlic cream.',
    themeClass: 'theme-shawarmas'
  },
  {
    id: 'beverages',
    slug: 'cat-beverages',
    name: 'Beverages',
    icon: '',
    kicker: 'Frosty Quenchers',
    title: 'Chilled Drinks & Shakes',
    desc: 'Ice-cold carbonated sodas, rich Belgian chocolate shakes, and creamy vanilla milkshakes.',
    themeClass: 'theme-beverages'
  }
];

const MENU_ITEMS = [
  // 1. Deals & Combos
  {
    id: 'deal-sovereign',
    name: 'Sovereign Family Feast',
    category: 'combos',
    price: 3200,
    originalPrice: 4200,
    desc: '2 Angus Burgers, 14" Crown Pizza, Loaded Fries, Drinks.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    badge: 'Deal',
    badgeClass: 'badge-deal',
    options: {
      flavours: ['Smoky BBQ Blend', 'Spicy Peri Peri Fusion', 'Tikka Charcoal Sensation'],
      spiceLevels: ['Mild Tangy', 'Medium Zesty', 'Flaming Hot Extra'],
      drinks: ['4x Chilled Coca-Cola (330ml)', '4x Chilled Sprite (330ml)', '4x Chilled Fanta (330ml)', '2x Coke + 2x Sprite'],
      sauces: ['Garlic Mayo Dip (2x)', 'Chipotle Fire Sauce (2x)', 'Jalapeno Ranch (2x)', 'Honey Mustard (2x)'],
      crusts: ['Royal Crown Kebab Stuffed', 'Deep Pan Fluffy', 'Thin Italian Hand-Tossed']
    }
  },
  {
    id: 'deal-duo',
    name: 'Zesty Duo Smash Box',
    category: 'combos',
    price: 1899,
    originalPrice: 2400,
    desc: '2 Angus Smashburgers, Seasoned Crinkle Fries, 2 Drinks.',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80',
    badge: 'Popular',
    badgeClass: 'badge-popular',
    options: {
      flavours: ['Signature House Blend', 'Smoky Jalapeno BBQ', 'Creamy Mushroom Garlic'],
      spiceLevels: ['Mild Classic', 'Medium Spice', 'Extra Hot Fire'],
      drinks: ['2x Chilled Coca-Cola', '2x Chilled Sprite', '1x Coke + 1x Sprite'],
      sauces: ['Secret Smash Sauce', 'Garlic Mayo Dip', 'Chipotle Sauce']
    }
  },
  {
    id: 'deal-solo-crisp',
    name: 'Crunch Master Solo Box',
    category: 'combos',
    price: 999,
    originalPrice: 1300,
    desc: '1 Mighty Zinger Burger, Golden Fries, 1 Chilled Drink.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    badge: 'Chef Special',
    badgeClass: 'badge-chef',
    options: {
      flavours: ['Authentic 12-Spice Crispy', 'Peri Peri Glaze', 'Sweet Chili Crunch'],
      spiceLevels: ['Mild Herb', 'Medium Hot', 'Atomic Fire Crunch'],
      drinks: ['Chilled Coca-Cola', 'Chilled Sprite', 'Chilled Fanta', 'Fresh Mineral Water'],
      sauces: ['Spicy Garlic Cream', 'Sweet Chili Mayo', 'Tangy BBQ']
    }
  },

  // 2. Burgers
  {
    id: 'burg-smash-classic',
    name: 'Double Prime Angus Smash Burger',
    category: 'burgers',
    price: 1099,
    originalPrice: 1350,
    desc: 'Twin Angus patties, melted Wisconsin cheddar, caramelized onions.',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80',
    badge: 'Popular',
    badgeClass: 'badge-popular',
    options: {
      flavours: ['Original Brioche Sensation', 'Smoked Pepper Jack Style', 'Caramelized Onion Deluxe'],
      spiceLevels: ['Mild Savory', 'Medium Peppery', 'Spicy Jalapeno Loaded'],
      drinks: ['No Drink', 'Add Chilled Coca-Cola (+Rs. 150)', 'Add Sprite (+Rs. 150)', 'Add Belgian Chocolate Shake (+Rs. 450)'],
      sauces: ['Secret House Smash Sauce', 'Chipotle Fire Aioli', 'Smoky BBQ Dip']
    }
  },
  {
    id: 'burg-mighty-zinger',
    name: 'Mighty 12-Spice Zinger Tower',
    category: 'burgers',
    price: 650,
    originalPrice: 850,
    desc: 'Crispy 12-spice breast fillet, cheddar cheese, garlic emulsion.',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80',
    badge: 'Chef Special',
    badgeClass: 'badge-chef',
    options: {
      flavours: ['Mighty Extra Crispy', 'Ghost Pepper Glaze (+Rs. 60)', 'Honey Butter Crunch'],
      spiceLevels: ['Medium Kick', 'Very Spicy Hot', 'Extra Hot Dynamite'],
      drinks: ['No Drink', 'Add Chilled Coca-Cola (+Rs. 150)', 'Add Sprite (+Rs. 150)'],
      sauces: ['Spicy Garlic Emulsion', 'Creamy Mayo Ranch', 'Sweet Chili Dip']
    }
  },
  {
    id: 'burg-truffle-beef',
    name: 'Truffle Mushroom Swiss Smash',
    category: 'burgers',
    price: 1250,
    originalPrice: 1550,
    desc: 'Angus beef, sauteed butter portobello mushrooms, Swiss Emmental.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    badge: 'Chef Special',
    badgeClass: 'badge-chef',
    options: {
      flavours: ['Black Truffle Essence', 'Double Swiss Mushroom Lux', 'Herb Garlic Butter Glaze'],
      spiceLevels: ['Mild Creamy Savory', 'Medium Peppery'],
      drinks: ['No Drink', 'Add Chilled Coke (+Rs. 150)', 'Add Belgian Thick Shake (+Rs. 450)'],
      sauces: ['Black Truffle Aioli', 'Garlic Herb Butter Dip', 'Smoky Truffle BBQ']
    }
  },

  // 3. Pizzas
  {
    id: 'piz-crown-tikka',
    name: 'Royal Crown Crust Chicken Tikka (14")',
    category: 'pizzas',
    price: 1850,
    originalPrice: 2200,
    desc: 'Stuffed kebab crown crust, charcoal chicken tikka, mozzarella.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    badge: 'Popular',
    badgeClass: 'badge-popular',
    options: {
      crusts: ['Royal Crown Kebab Stuffed', 'Cheese Burst Stuffed Rim (+Rs. 250)', 'Italian Thin Hand-Tossed', 'Thick Golden Deep Pan'],
      flavours: ['Lahori Charcoal Tikka', 'Spicy Mughlai Fusion', 'Creamy Tikka Supreme'],
      spiceLevels: ['Mild Zesty', 'Medium Hot Tikka', 'Fiery Red Chili Blast'],
      sauces: ['Garlic Herb Ranch Dip', 'Chipotle Chili Mayo', 'Tangy BBQ Sauce'],
      drinks: ['No Drink', 'Add 1.5L Coca-Cola (+Rs. 280)', 'Add 1.5L Sprite (+Rs. 280)']
    }
  },
  {
    id: 'piz-fajita-supreme',
    name: 'Creamy Fajita Supreme Stone Pizza (14")',
    category: 'pizzas',
    price: 1799,
    originalPrice: 2150,
    desc: 'Mexican marinated chicken, charred bell peppers, mushrooms, mozzarella.',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80',
    badge: 'Chef Special',
    badgeClass: 'badge-chef',
    options: {
      crusts: ['Italian Stone-Baked Thin', 'Cheese Burst (+Rs. 250)', 'Royal Crown Stuffed (+Rs. 300)', 'Deep Pan'],
      flavours: ['Creamy Herb Fajita', 'Spicy Mexican Ranchero', 'Smoky BBQ Fajita'],
      spiceLevels: ['Mild Herb Cream', 'Medium Jalapeno Kick', 'Extra Spicy Mexican Fire'],
      sauces: ['Jalapeno Ranch Dip', 'Garlic Mayo', 'Spicy Chipotle']
    }
  },
  {
    id: 'piz-cheese-classic',
    name: 'Triple Cheese Margherita (14")',
    category: 'pizzas',
    price: 1450,
    originalPrice: 1750,
    desc: 'Buffalo mozzarella, aged parmesan, fresh aromatic basil leaves.',
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=600&q=80',
    badge: 'Deal',
    badgeClass: 'badge-deal',
    options: {
      crusts: ['Hand-Tossed Classic Italian', 'Thin & Crispy Crust', 'Cheese Stuffed Edge (+Rs. 250)'],
      flavours: ['Classic San Marzano Basil', 'Garlic Herb Butter Infused', 'Four-Cheese Supreme'],
      spiceLevels: ['Mild Authentic Italian', 'Red Chili Flake Sprinkle'],
      sauces: ['Garlic Herb Dip', 'Fiery Marinara Dip']
    }
  },

  // 4. Loaded Fries & Sides
  {
    id: 'fries-animal-style',
    name: 'Signature Animal Style Loaded Fries',
    category: 'fries',
    price: 650,
    originalPrice: 850,
    desc: 'Crispy skin-on fries, minced beef, caramelized onions, cheddar.',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80',
    badge: 'Popular',
    badgeClass: 'badge-popular',
    options: {
      flavours: ['Classic Angus Beef Animal Style', 'Smoked Chicken Chunk Loaded', 'Crispy Bacon & Chive Style'],
      spiceLevels: ['Mild Creamy Cheddar', 'Medium Jalapeno Tang', 'Extra Hot Fire Drizzle'],
      sauces: ['Secret Animal Sauce (Extra)', 'Jalapeno Ranch', 'Chipotle Mayo']
    }
  },
  {
    id: 'fries-cheese-jalapeno',
    name: 'Fiery Jalapeno Melt Fries',
    category: 'fries',
    price: 550,
    originalPrice: 700,
    desc: 'Gooey liquid queso, pickled jalapenos, smoky paprika dusting.',
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80',
    badge: 'Chef Special',
    badgeClass: 'badge-chef',
    options: {
      flavours: ['Spicy Queso Loaded', 'Smoky BBQ Drizzle', 'Herb Parmesan Dust'],
      spiceLevels: ['Mild Cheesy', 'Medium Hot Jalapeno', 'Flamin Volcano Heat'],
      sauces: ['Liquid Queso Dip', 'Garlic Mayo Dip', 'Chipotle Sauce']
    }
  },
  {
    id: 'side-crunchy-strips',
    name: '12-Spice Crispy Chicken Tenders (6 Pcs)',
    category: 'fries',
    price: 650,
    originalPrice: 800,
    desc: 'Whole chicken tenders in 12-spice batter, honey dip.',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80',
    badge: 'Chef Special',
    badgeClass: 'badge-chef',
    options: {
      flavours: ['12-Spice Original Crispy', 'Fiery Nashville Hot Glaze', 'Garlic Parmesan Rub'],
      spiceLevels: ['Mild Savory', 'Medium Kick', 'Dynamite Heat'],
      sauces: ['Garlic Honey Dip', 'Chipotle Mayo', 'Jalapeno Ranch']
    }
  },

  // 5. Shawarmas
  {
    id: 'shaw-lebanese-spit',
    name: 'Charcoal Spit-Roasted Chicken Shawarma',
    category: 'shawarmas',
    price: 499,
    originalPrice: 650,
    desc: 'Wood-roasted marinated chicken, Lebanese toum garlic, pickles, pita.',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=80',
    badge: 'Popular',
    badgeClass: 'badge-popular',
    options: {
      flavours: ['Authentic Beirut Garlic Toum', 'Spicy Peri Peri Charcoal', 'Tahini Herb Sensation'],
      spiceLevels: ['Mild Garlic Rich', 'Medium Spicy', 'Extra Hot Chili Toum'],
      sauces: ['Authentic Toum Garlic Cream', 'Spicy Harissa Mayo', 'Sesame Tahini']
    }
  },
  {
    id: 'shaw-cheese-platter',
    name: 'Cheesy Shawarma Platter Bowl',
    category: 'shawarmas',
    price: 799,
    originalPrice: 999,
    desc: 'Shredded spiced chicken over seasoned rice, mozzarella, toum.',
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=600&q=80',
    badge: 'Chef Special',
    badgeClass: 'badge-chef',
    options: {
      flavours: ['Melted Mozzarella Platter', 'Smoky Charcoal BBQ Platter', 'Garlic Mayo Explosion'],
      spiceLevels: ['Mild Fragrant', 'Medium Zesty', 'Extra Hot Fire'],
      sauces: ['Garlic Mayo Toum (Extra)', 'Harissa Chili Dip', 'Creamy Ranch']
    }
  },

  // 6. Beverages
  {
    id: 'bev-shake-chocolate',
    name: 'Belgian Chocolate Thick Shake',
    category: 'beverages',
    price: 550,
    originalPrice: 700,
    desc: 'Dark Belgian chocolate ganache, rich dairy soft serve.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80',
    badge: 'Popular',
    badgeClass: 'badge-popular',
    options: {
      flavours: ['Dark Belgian Chocolate Ganache', 'Nutella Hazelnut Swirl (+Rs. 100)', 'Oreo Cookie Crunch (+Rs. 80)'],
      sauces: ['Whipped Dairy Cream (Included)', 'Extra Chocolate Fudge Drizzle (+Rs. 50)']
    }
  },
  {
    id: 'bev-coke-can',
    name: 'Chilled Soft Drink Can (330ml)',
    category: 'beverages',
    price: 150,
    originalPrice: 180,
    desc: 'Ice-cold carbonated can: Coca-Cola, Sprite, or Fanta.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80',
    badge: 'Deal',
    badgeClass: 'badge-deal',
    options: {
      drinks: ['Chilled Coca-Cola (330ml)', 'Chilled Sprite (330ml)', 'Chilled Fanta Orange (330ml)', 'Fresh Mineral Water (500ml)']
    }
  }
];

// ==========================================
// 2. APPLICATION STATE & LOCALSTORAGE REPOSITORY
// ==========================================
class StorefrontState {
  constructor() {
    this.cart = this.loadCart();
    this.currentCategory = 'combos';
    this.orderMode = 'delivery';
    this.currentBranch = 'Khuda Baksh Rd Hub';
    this.searchQuery = '';
    this.activeFilter = 'all';
    this.isCartOpen = false;
    this.customizingItem = null;
    this.customQty = 1;
    this.customSelectedOptions = {};
  }

  loadCart() {
    try {
      const data = localStorage.getItem('azfc_cart');
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem('azfc_cart', JSON.stringify(this.cart));
      window.dispatchEvent(new Event('cartUpdated'));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }

  addToCart(item, qty = 1, options = {}, notes = '') {
    const cartItemId = `${item.id}-${JSON.stringify(options)}-${notes.trim()}`;
    const existingIndex = this.cart.findIndex(i => i.cartItemId === cartItemId);

    if (existingIndex > -1) {
      this.cart[existingIndex].qty += qty;
    } else {
      this.cart.push({
        cartItemId,
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        qty: qty,
        options: options,
        notes: notes.trim()
      });
    }
    this.saveCart();
  }

  removeFromCart(cartItemId) {
    this.cart = this.cart.filter(i => i.cartItemId !== cartItemId);
    this.saveCart();
  }

  updateQty(cartItemId, delta) {
    const item = this.cart.find(i => i.cartItemId === cartItemId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
      this.removeFromCart(cartItemId);
    } else {
      this.saveCart();
    }
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
  }

  getCartCount() {
    return this.cart.reduce((sum, item) => sum + item.qty, 0);
  }

  getCartSubtotal() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  }
}

const state = new StorefrontState();

// ==========================================
// 3. UI INITIALIZATION & CONTINUOUS MENU RENDERING
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderCategoryPills();
  renderCategorizedMenu();
  initScrollspy();
  initHeroCarousel();
  bindGlobalEvents();
  syncCartUI();
  listenToKdsStorageSync();
});

// Render Sticky Category Navigation Rail
function renderCategoryPills() {
  const container = document.getElementById('categoryNav');
  if (!container) return;

  container.innerHTML = MENU_CATEGORIES.map((cat, idx) => `
    <a href="#${cat.slug}" class="category-pill ${idx === 0 ? 'active' : ''}" data-cat="${cat.id}">
      <span>${cat.icon}</span>
      <span>${cat.name}</span>
    </a>
  `).join('');

  // Smooth scroll click handler
  container.querySelectorAll('.category-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = pill.getAttribute('href').substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        highlightPill(pill.dataset.cat);
      }
    });
  });
}

// Render Continuous Categorized Menu with Themed Banners (Daily Deli Co. & KFC Pattern)
function renderCategorizedMenu() {
  const container = document.getElementById('menuContainer') || document.getElementById('categorizedMenuContainer');
  if (!container) return;

  let query = state.searchQuery.toLowerCase().trim();
  let filter = state.activeFilter;

  const html = MENU_CATEGORIES.map(cat => {
    // Filter items belonging to this category
    let items = MENU_ITEMS.filter(item => item.category === cat.id);

    if (query) {
      items = items.filter(i => i.name.toLowerCase().includes(query) || i.desc.toLowerCase().includes(query));
    }
    if (filter === 'deals') items = items.filter(i => i.badge === 'Deal');
    if (filter === 'popular') items = items.filter(i => i.badge === 'Popular');
    if (filter === 'chef') items = items.filter(i => i.badge === 'Chef Special');

    if (items.length === 0) return '';

    return `
      <section class="menu-category-section" id="${cat.slug}" data-category-id="${cat.id}">
        <!-- Themed Atmospheric Visual Hero Banner -->
        <div class="category-theme-banner ${cat.themeClass}">
          <div class="banner-content">
            <span class="banner-kicker">${cat.kicker}</span>
            <h3 class="banner-title">${cat.icon} ${cat.title}</h3>
            <p class="banner-desc">${cat.desc}</p>
          </div>
        </div>

        <!-- Category Items Grid -->
        <div class="menu-grid">
          ${items.map(item => `
            <div class="menu-card" data-item-id="${item.id}">
              <div class="card-media">
                <img src="${item.image}" alt="${item.name}" class="card-img" loading="lazy" />
                <div class="badge-tag-wrap">
                  <span class="badge-tag ${item.badgeClass}">${item.badge}</span>
                </div>
              </div>
              <div class="card-body">
                <h4 class="card-title">${item.name}</h4>
                <p class="card-desc">${item.desc}</p>
                <div class="card-footer">
                  <div class="card-pricing-wrap">
                    ${item.originalPrice ? `<span class="card-original-price">Rs. ${item.originalPrice.toLocaleString()}</span>` : ''}
                    <span class="card-price">Rs. ${item.price.toLocaleString()}</span>
                  </div>
                  <button class="card-action-btn" onclick="openItemCustomizer('${item.id}')" aria-label="Add ${item.name} to Cart">
                    <span>Add to Cart +</span>
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }).join('');

  if (!html) {
    container.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <p style="font-size: 16px; font-weight: 700;">No signature dishes found matching your search.</p>
        <button onclick="clearSearch()" style="margin-top: 12px; background: var(--primary-gradient); border: none; padding: 8px 18px; border-radius: 20px; font-weight: 800; cursor: pointer;">Clear Search</button>
      </div>
    `;
  } else {
    container.innerHTML = html;
  }
}

// ==========================================
// 4. TWO-WAY SCROLLSPY NAVIGATION ENGINE
// ==========================================
function syncHeaderHeightVar() {
  const header = document.querySelector('.app-header');
  if (!header) return;
  const apply = () =>
    document.documentElement.style.setProperty(
      '--app-header-h',
      `${Math.round(header.getBoundingClientRect().height)}px`
    );
  apply();
  if (typeof ResizeObserver !== 'undefined') new ResizeObserver(apply).observe(header);
  window.addEventListener('resize', apply);
}

function initScrollspy() {
  const sections = document.querySelectorAll('.menu-category-section');
  if (sections.length === 0) return;

  syncHeaderHeightVar();

  const observerOptions = {
    root: null,
    rootMargin: '-120px 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const catId = entry.target.getAttribute('data-category-id');
        if (catId) {
          highlightPill(catId);
        }
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

function highlightPill(catId) {
  const pills = document.querySelectorAll('.category-pill');
  pills.forEach(pill => {
    if (pill.dataset.cat === catId) {
      pill.classList.add('active');
      pill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    } else {
      pill.classList.remove('active');
    }
  });
}

// ==========================================
// 5. HERO CAROUSEL CONTROLLER
// ==========================================
let currentSlide = 0;
let carouselTimer = null;

function initHeroCarousel() {
  const track = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('prevSlideBtn');
  const nextBtn = document.getElementById('nextSlideBtn');
  const dots = document.querySelectorAll('.carousel-dot');

  if (!track) return;

  function updateCarousel() {
    track.style.transform = `translateX(-${currentSlide * 33.3333}%)`;
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentSlide);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % 3;
    updateCarousel();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + 3) % 3;
    updateCarousel();
  }

  if (nextBtn) nextBtn.addEventListener('click', (e) => { e.preventDefault(); nextSlide(); resetTimer(); });
  if (prevBtn) prevBtn.addEventListener('click', (e) => { e.preventDefault(); prevSlide(); resetTimer(); });

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const targetIndex = e.target.dataset.index !== undefined ? parseInt(e.target.dataset.index, 10) : parseInt(e.target.dataset.slide, 10);
      if (!isNaN(targetIndex)) {
        currentSlide = targetIndex;
        updateCarousel();
        resetTimer();
      }
    });
  });

  // Wire Hero quick action buttons to open customizer
  document.querySelectorAll('.hero-order-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const itemId = btn.dataset.id;
      if (itemId && window.openItemCustomizer) {
        window.openItemCustomizer(itemId);
      }
    });
  });

  function startTimer() {
    carouselTimer = setInterval(nextSlide, 5000);
  }
  function resetTimer() {
    clearInterval(carouselTimer);
    startTimer();
  }
  startTimer();
}

// ==========================================
// 6. DYNAMIC QSR CUSTOMIZER MODAL (FLAVOURS, SPICE, DRINKS, SAUCES, CRUSTS)
// ==========================================
window.openItemCustomizer = function(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  state.customizingItem = item;
  state.customQty = 1;
  state.customSelectedOptions = {};

  const modal = document.getElementById('customizerModal');
  const img = document.getElementById('modalCover');
  const cat = document.getElementById('modalCategoryTag');
  const name = document.getElementById('modalItemTitle');
  const desc = document.getElementById('modalItemDesc');
  const price = document.getElementById('modalPriceDisplay');
  const qty = document.getElementById('modalQtyDisplay');
  const notes = document.getElementById('modalCookingNotes');
  const dynamicContainer = document.getElementById('customizerOptionsDynamic');

  if (img) img.style.backgroundImage = `url('${item.image}')`;
  if (cat) cat.innerText = item.category.toUpperCase();
  if (name) name.innerText = item.name;
  if (desc) desc.innerText = item.desc;
  if (price) price.innerText = `Rs. ${item.price.toLocaleString()}`;
  if (qty) qty.innerText = '1';
  if (notes) notes.value = '';

  // Universal dynamic schema option builder
  if (dynamicContainer) {
    let optHtml = '';
    const opts = item.options || {};

    // 1. Crust / Base (Pizzas & Combos)
    if (opts.crusts && opts.crusts.length > 0) {
      optHtml += `
        <div class="custom-step-group">
          <div class="custom-section-title">
            <span>1. Choose Crust Style</span>
            <span class="section-opt">Required</span>
          </div>
          <div class="custom-options-grid">
            ${opts.crusts.map((crust, idx) => `
              <div class="custom-pill-opt ${idx === 0 ? 'selected' : ''}" onclick="selectOption(this, 'crust', '${crust.replace(/'/g, "\\'")}')">
                <span>${crust}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
      state.customSelectedOptions['crust'] = opts.crusts[0];
    }

    // 2. Flavour Style
    if (opts.flavours && opts.flavours.length > 0) {
      optHtml += `
        <div class="custom-step-group">
          <div class="custom-section-title">
            <span>2. Select Flavour Style</span>
            <span class="section-opt">Required</span>
          </div>
          <div class="custom-options-grid">
            ${opts.flavours.map((flv, idx) => `
              <div class="custom-pill-opt ${idx === 0 ? 'selected' : ''}" onclick="selectOption(this, 'flavour', '${flv.replace(/'/g, "\\'")}')">
                <span>${flv}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
      state.customSelectedOptions['flavour'] = opts.flavours[0];
    }

    // 3. Spice Level Intensity
    if (opts.spiceLevels && opts.spiceLevels.length > 0) {
      optHtml += `
        <div class="custom-step-group">
          <div class="custom-section-title">
            <span>3. Spice Level Intensity</span>
            <span class="section-opt">Required</span>
          </div>
          <div class="custom-options-grid">
            ${opts.spiceLevels.map((spc, idx) => `
              <div class="custom-pill-opt ${idx === 0 ? 'selected' : ''}" onclick="selectOption(this, 'spice', '${spc.replace(/'/g, "\\'")}')">
                <span>${spc}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
      state.customSelectedOptions['spice'] = opts.spiceLevels[0];
    }

    // 4. Chilled Drink Selection
    if (opts.drinks && opts.drinks.length > 0) {
      optHtml += `
        <div class="custom-step-group">
          <div class="custom-section-title">
            <span>4. Chilled Beverage</span>
            <span class="section-opt">${item.category === 'combos' ? 'Included' : 'Choice'}</span>
          </div>
          <div class="custom-options-grid">
            ${opts.drinks.map((drk, idx) => `
              <div class="custom-pill-opt ${idx === 0 ? 'selected' : ''}" onclick="selectOption(this, 'drink', '${drk.replace(/'/g, "\\'")}')">
                <span>${drk}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
      state.customSelectedOptions['drink'] = opts.drinks[0];
    }

    // 5. Signature Dipping Sauces
    if (opts.sauces && opts.sauces.length > 0) {
      optHtml += `
        <div class="custom-step-group">
          <div class="custom-section-title">
            <span>5. Signature Dipping Sauce</span>
            <span class="section-opt">Optional</span>
          </div>
          <div class="custom-options-grid">
            ${opts.sauces.map((sauce, idx) => `
              <div class="custom-pill-opt ${idx === 0 ? 'selected' : ''}" onclick="selectOption(this, 'sauce', '${sauce.replace(/'/g, "\\'")}')">
                <span>${sauce}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
      state.customSelectedOptions['sauce'] = opts.sauces[0];
    }

    dynamicContainer.innerHTML = optHtml;
  }

  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
};

window.closeCustomizer = function() {
  const modal = document.getElementById('customizerModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

window.selectOption = function(el, key, val) {
  const parent = el.parentElement;
  if (parent) {
    parent.querySelectorAll('.custom-pill-opt').forEach(p => p.classList.remove('selected'));
  }
  el.classList.add('selected');
  state.customSelectedOptions[key] = val;
};

window.adjustCustomQty = function(delta) {
  state.customQty = Math.max(1, state.customQty + delta);
  const qtyEl = document.getElementById('modalQtyDisplay');
  const priceEl = document.getElementById('modalPriceDisplay');
  if (qtyEl) qtyEl.innerText = state.customQty;
  if (priceEl && state.customizingItem) {
    const total = state.customizingItem.price * state.customQty;
    priceEl.innerText = `Rs. ${total.toLocaleString()}`;
  }
};

window.confirmCustomizerAdd = function() {
  if (!state.customizingItem) return;
  const notes = document.getElementById('modalCookingNotes')?.value || '';
  state.addToCart(state.customizingItem, state.customQty, state.customSelectedOptions, notes);
  closeCustomizer();
  showToast(`Added to Bucket • ${state.customQty}x ${state.customizingItem.name}`, 'success');
  syncCartUI();
};

// ==========================================
// 7. SLIDE-OUT CART DRAWER & KFC-STYLE CHECKOUT
// ==========================================
function syncCartUI() {
  const badge = document.getElementById('cartBadge') || document.getElementById('cartBadgeCount') || document.getElementById('mobileCartBadge');
  const countHeader = document.getElementById('cartDrawerCount') || document.getElementById('cartItemsCountHeader');
  const itemsContainer = document.getElementById('cartDrawerItems') || document.getElementById('cartItemsList');
  const subtotalEl = document.getElementById('cartSubtotal') || document.getElementById('cartSubtotalText');
  const totalEl = document.getElementById('cartTotal') || document.getElementById('cartGrandTotalText');
  const deliveryFeeEl = document.getElementById('cartDeliveryFeeText') || document.getElementById('cartDeliveryFee');
  const meterFill = document.getElementById('freeDeliveryMeterFill') || document.getElementById('freeDeliveryFill');
  const freeText = document.getElementById('freeDeliveryText') || document.getElementById('freeDeliveryMsg');
  const cartModeText = document.getElementById('cartModeText');
  const headerAmount = document.getElementById('cartHeaderAmount');

  const count = state.getCartCount();
  const subtotal = state.getCartSubtotal();
  const deliveryFee = subtotal >= 2000 || subtotal === 0 ? 0 : 150;
  const total = subtotal + deliveryFee;

  document.querySelectorAll('#cartBadge, #cartBadgeCount, #mobileCartBadge').forEach(el => {
    el.innerText = count;
  });
  if (headerAmount) headerAmount.innerText = `Rs. ${total.toLocaleString()}`;
  if (countHeader) countHeader.innerText = `${count} Items`;
  if (subtotalEl) subtotalEl.innerText = `Rs. ${subtotal.toLocaleString()}`;
  if (deliveryFeeEl) {
    deliveryFeeEl.innerText = deliveryFee === 0 ? 'FREE' : `Rs. ${deliveryFee}`;
    deliveryFeeEl.style.color = deliveryFee === 0 ? '#34D399' : '#F59E0B';
  }
  if (totalEl) totalEl.innerText = `Rs. ${total.toLocaleString()}`;
  if (cartModeText) cartModeText.innerText = state.orderMode || 'Delivery';

  // Free delivery threshold meter (Rs. 2000)
  if (meterFill) {
    const pct = subtotal === 0 ? 0 : Math.min(100, (subtotal / 2000) * 100);
    meterFill.style.width = `${pct}%`;
  }
  if (freeText) {
    if (subtotal >= 2000) {
      freeText.innerHTML = `<strong>🎉 You have Unlocked FREE Express Delivery!</strong>`;
    } else {
      const remaining = 2000 - subtotal;
      freeText.innerHTML = `Add <strong>Rs. ${remaining.toLocaleString()}</strong> more for FREE Express Delivery!`;
    }
  }

  if (itemsContainer) {
    if (state.cart.length === 0) {
      itemsContainer.innerHTML = `
        <div style="text-align: center; padding: 48px 20px; color: var(--text-muted);">
          <div style="font-size: 36px; margin-bottom: 12px; color: var(--color-gold);">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          </div>
          <p style="font-weight: 800; color: #FFF; font-size: 16px;">Your Bucket is Empty</p>
          <p style="font-size: 13px; margin-top: 6px;">Add chef signature burgers, pizzas, or family feasts!</p>
        </div>
      `;
    } else {
      itemsContainer.innerHTML = state.cart.map(item => {
        const safeId = encodeURIComponent(item.cartItemId);
        return `
        <div class="cart-item-card" data-id="${item.cartItemId}">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
          <div class="cart-item-info">
            <h4 class="cart-item-name">${item.name}</h4>
            <p class="cart-item-customs">
              ${Object.values(item.options).filter(Boolean).join(' • ')}
              ${item.notes ? `<br><em>Note: ${item.notes}</em>` : ''}
            </p>
            <div class="cart-item-bottom">
              <span class="cart-item-price">Rs. ${(item.price * item.qty).toLocaleString()}</span>
              <div class="cart-item-qty">
                <button type="button" class="cart-qty-btn cart-qty-minus" onclick="window.updateItemQty(decodeURIComponent('${safeId}'), -1)" data-id="${item.cartItemId}" aria-label="Decrease quantity">−</button>
                <span>${item.qty}</span>
                <button type="button" class="cart-qty-btn cart-qty-plus" onclick="window.updateItemQty(decodeURIComponent('${safeId}'), 1)" data-id="${item.cartItemId}" aria-label="Increase quantity">+</button>
              </div>
              <button type="button" class="cart-delete-btn" onclick="window.removeItem(decodeURIComponent('${safeId}'))" data-id="${item.cartItemId}" aria-label="Remove item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="pointer-events: none;"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              </button>
            </div>
          </div>
        </div>
      `;
      }).join('');
    }
  }
}

// Unified Cart Event Delegation for rock-solid click handling
function initCartItemDelegation() {
  const container = document.getElementById('cartDrawerItems') || document.getElementById('cartItemsList');
  if (!container || container._delegated) return;
  container.addEventListener('click', (e) => {
    const minusBtn = e.target.closest('.cart-qty-minus');
    if (minusBtn) {
      e.preventDefault();
      e.stopPropagation();
      const id = minusBtn.dataset.id;
      if (id) window.updateItemQty(id, -1);
      return;
    }
    const plusBtn = e.target.closest('.cart-qty-plus');
    if (plusBtn) {
      e.preventDefault();
      e.stopPropagation();
      const id = plusBtn.dataset.id;
      if (id) window.updateItemQty(id, 1);
      return;
    }
    const delBtn = e.target.closest('.cart-delete-btn');
    if (delBtn) {
      e.preventDefault();
      e.stopPropagation();
      const id = delBtn.dataset.id;
      if (id) window.removeItem(id);
      return;
    }
  });
  container._delegated = true;
}

window.openCart = function() {
  const drawer = document.getElementById('cartDrawer');
  const dimmer = document.getElementById('drawerBackdrop');
  if (drawer) drawer.classList.add('open');
  if (dimmer) dimmer.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeCart = function() {
  const drawer = document.getElementById('cartDrawer');
  const dimmer = document.getElementById('drawerBackdrop');
  if (drawer) drawer.classList.remove('open');
  if (dimmer) dimmer.classList.remove('active');
  document.body.style.overflow = '';
};

window.updateItemQty = function(cartItemId, delta) {
  state.updateQty(cartItemId, delta);
  syncCartUI();
};

window.removeItem = function(cartItemId) {
  state.removeFromCart(cartItemId);
  syncCartUI();
};

// KFC Pakistan-Style Mandatory Location & Customer Details Flow
let pendingCheckoutMethod = 'cod';

window.checkoutCOD = function() {
  if (state.cart.length === 0) {
    showToast('Please add delicious items to your bucket first!', 'warning');
    return;
  }
  pendingCheckoutMethod = 'cod';
  promptCheckoutDetails();
};

window.checkoutWhatsApp = function() {
  if (state.cart.length === 0) {
    showToast('Please add delicious items to your bucket first!', 'warning');
    return;
  }
  pendingCheckoutMethod = 'whatsapp';
  promptCheckoutDetails();
};

function promptCheckoutDetails() {
  closeCart();
  const modal = document.getElementById('checkoutDetailsModal');
  const payableEl = document.getElementById('checkoutPayableAmount');
  const methodEl = document.getElementById('checkoutPaymentMethodName');
  const branchSelect = document.getElementById('custBranchSelect');

  const subtotal = state.getCartSubtotal();
  const deliveryFee = subtotal >= 2000 ? 0 : 150;
  const total = subtotal + deliveryFee;

  if (payableEl) payableEl.innerText = `Rs. ${total.toLocaleString()}`;
  if (methodEl) {
    methodEl.innerText = pendingCheckoutMethod === 'cod' ? 'Cash on Delivery' : 'WhatsApp Order Confirmation';
  }

  // Auto-fill saved profile if available
  try {
    const savedProfile = JSON.parse(localStorage.getItem('azfc_customer_profile') || '{}');
    if (savedProfile.fullName) document.getElementById('custFullName').value = savedProfile.fullName;
    if (savedProfile.phone) document.getElementById('custPhone').value = savedProfile.phone;
    if (savedProfile.address) document.getElementById('custAddress').value = savedProfile.address;
    if (savedProfile.branch && branchSelect) branchSelect.value = savedProfile.branch;
  } catch (e) {
    console.log(e);
  }

  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

window.closeCheckoutDetails = function() {
  const modal = document.getElementById('checkoutDetailsModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

window.confirmAndTransmitOrder = function() {
  const nameInput = document.getElementById('custFullName');
  const phoneInput = document.getElementById('custPhone');
  const addressInput = document.getElementById('custAddress');
  const branchSelect = document.getElementById('custBranchSelect');

  const fullName = nameInput?.value.trim() || '';
  const phone = phoneInput?.value.trim() || '';
  const address = addressInput?.value.trim() || '';
  const branch = branchSelect?.value || 'Khuda Baksh Rd Hub';

  if (!fullName) {
    alert('Please enter your full name for order delivery.');
    nameInput?.focus();
    return;
  }

  if (!phone || phone.length < 10) {
    alert('Please enter a valid Pakistani mobile number (e.g. 0300-1234567).');
    phoneInput?.focus();
    return;
  }

  if (!address) {
    alert('Please enter your complete street address and landmark for the courier rider.');
    addressInput?.focus();
    return;
  }

  // Cache customer profile
  localStorage.setItem('azfc_customer_profile', JSON.stringify({ fullName, phone, address, branch }));

  const subtotal = state.getCartSubtotal();
  const deliveryFee = subtotal >= 2000 ? 0 : 150;
  const total = subtotal + deliveryFee;
  const orderId = 'HT-' + Math.floor(1000 + Math.random() * 9000);

  const orderRecord = {
    id: orderId,
    orderNumber: orderId,
    customer: fullName,
    customerPhone: phone,
    customerAddress: address,
    branch: branch,
    branchId: branch.includes('Khuda') ? 'branch-1' : branch.includes('Dohlanwal') ? 'branch-2' : 'branch-3',
    type: 'Delivery',
    items: state.cart.map(i => `${i.name} (x${i.qty})${Object.values(i.options).length ? ' [' + Object.values(i.options).join(', ') + ']' : ''}`).join(', '),
    specialNotes: state.cart.map(i => i.notes).filter(Boolean).join('; ') || address,
    amount: `Rs. ${total.toLocaleString()}`,
    numericAmount: total,
    status: 'pending',
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    timestamp: Date.now()
  };

  // Transmit to hot_taste_orders local storage KDS queue
  let orders = [];
  try {
    const existing = localStorage.getItem('hot_taste_orders');
    orders = existing ? JSON.parse(existing) : [];
  } catch {
    orders = [];
  }
  orders.unshift(orderRecord);
  localStorage.setItem('hot_taste_orders', JSON.stringify(orders));
  localStorage.setItem('azfc_active_order_id', orderId);

  // Close details modal
  closeCheckoutDetails();

  // If WhatsApp checkout, open WhatsApp directly
  if (pendingCheckoutMethod === 'whatsapp') {
    let msg = `*NEW ORDER CONFIRMATION - AZFC HOT & TASTE PRO*\n`;
    msg += `🏷️ *Order ID:* ${orderId}\n`;
    msg += `👤 *Customer:* ${fullName} (${phone})\n`;
    msg += `📍 *Delivery Address:* ${address}\n`;
    msg += `🏢 *Kitchen Hub:* ${branch}\n\n`;
    msg += `*Order Items:*\n`;
    state.cart.forEach((i, idx) => {
      msg += `${idx + 1}. *${i.name}* x${i.qty} - Rs. ${i.price * i.qty}\n`;
      const optStr = Object.values(i.options).filter(Boolean).join(' • ');
      if (optStr) msg += `   _${optStr}_\n`;
      if (i.notes) msg += `   _Note: ${i.notes}_\n`;
    });
    msg += `\n*Total Payable:* *Rs. ${total}* (Cash on Delivery)`;
    window.open(`https://wa.me/923014492190?text=${encodeURIComponent(msg)}`, '_blank');
  }

  // Clear cart and show active tracker
  state.clearCart();
  syncCartUI();
  showToast(`Order ${orderId} transmitted to Kitchen!`, 'success');
  openTracker();
};

// ==========================================
// 8. LIVE KDS ORDER TRACKER MODAL & REALTIME 4-STAGE SYNC
// ==========================================
window.openTracker = function() {
  const modal = document.getElementById('orderTrackerModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    updateTrackerContent();
  }
};

window.closeTracker = function() {
  const modal = document.getElementById('orderTrackerModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

function updateTrackerContent() {
  const emptyState = document.getElementById('trackerEmptyState');
  const activeState = document.getElementById('trackerActiveState');
  const orderIdEl = document.getElementById('trackerOrderId');
  const branchEl = document.getElementById('trackerBranchName');
  const progressBar = document.getElementById('trackerProgressBar');
  const etaTimer = document.getElementById('trackerEtaTimer');
  const riderNameEl = document.getElementById('trackerRiderName');

  let activeOrderId = localStorage.getItem('azfc_active_order_id');
  let orders = [];
  try {
    const data = localStorage.getItem('hot_taste_orders');
    orders = data ? JSON.parse(data) : [];
  } catch {
    orders = [];
  }

  // CRITICAL FIX: Only show tracker if user actually placed an order
  // Don't fall back to orders[0] - that shows tracker even when user hasn't ordered!
  const activeOrder = activeOrderId ? orders.find(o => o.id === activeOrderId) : null;

  if (!activeOrder) {
    if (emptyState) emptyState.classList.remove('hidden');
    if (activeState) activeState.classList.add('hidden');
    if (orderIdEl) orderIdEl.innerText = 'No Active Order';
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');
  if (activeState) activeState.classList.remove('hidden');

  if (orderIdEl) orderIdEl.innerText = activeOrder.orderNumber || activeOrder.id;
  if (branchEl) branchEl.innerText = `Dispatched from ${activeOrder.branch || 'Khuda Baksh Rd Hub'}`;

  const riderPhoneLabel = document.getElementById('trackerRiderPhoneLabel');
  const riderWaBtn = document.getElementById('trackerRiderWaBtn');

  if (activeOrder.riderName && riderNameEl) {
    riderNameEl.innerText = `${activeOrder.riderName} (${activeOrder.riderBike || 'Fleet Motorbike #01'})`;
  } else if (riderNameEl) {
    riderNameEl.innerText = 'Ali Raza (Fleet Motorbike #01)';
  }

  const activeRiderPhone = activeOrder.riderPhone || '03074484814';
  if (riderPhoneLabel) {
    riderPhoneLabel.innerText = `Direct Motorbike Dispatch • Rider: ${activeRiderPhone}`;
  }

  if (riderWaBtn) {
    const rawRiderPhone = activeRiderPhone.replace(/[^0-9]/g, '');
    const cleanRiderPhone = rawRiderPhone.startsWith('0') ? '92' + rawRiderPhone.slice(1) : (rawRiderPhone.startsWith('92') ? rawRiderPhone : '92' + rawRiderPhone);
    const orderIdRef = activeOrder.orderNumber || activeOrder.id;
    const msg = `Assalam-o-Alaikum! I am tracking my AZFC Order #${orderIdRef}. Please update me on the live delivery status.`;
    riderWaBtn.href = `https://wa.me/${cleanRiderPhone}?text=${encodeURIComponent(msg)}`;
  }

  // 4 Steps: pending (received) -> cooking (in oven) -> dispatched -> delivered
  const stepMap = {
    'pending': { idx: 0, width: '15%', eta: '25:00 min' },
    'received': { idx: 0, width: '15%', eta: '25:00 min' },
    'cooking': { idx: 1, width: '45%', eta: '18:00 min' },
    'dispatched': { idx: 2, width: '75%', eta: '08:30 min' },
    'delivered': { idx: 3, width: '100%', eta: 'Delivered!' }
  };

  const currentInfo = stepMap[activeOrder.status] || stepMap['pending'];

  const nodes = [
    document.getElementById('stepNode1'),
    document.getElementById('stepNode2'),
    document.getElementById('stepNode3'),
    document.getElementById('stepNode4')
  ];

  nodes.forEach((node, idx) => {
    if (!node) return;
    node.classList.remove('active', 'completed');
    if (idx < currentInfo.idx) node.classList.add('completed');
    else if (idx === currentInfo.idx) node.classList.add('active');
  });

  if (progressBar) progressBar.style.width = currentInfo.width;
  if (etaTimer) etaTimer.innerText = currentInfo.eta;
}

function listenToKdsStorageSync() {
  window.addEventListener('storage', (e) => {
    if (e.key === 'hot_taste_orders' || e.key === 'azfc_active_order_id') {
      updateTrackerContent();
    }
  });
}

// ==========================================
// 9. SEARCH, FILTERS, FAST MODAL DISMISSAL & CAPTAIN ZESTY INTERACTION
// ==========================================
function bindGlobalEvents() {
  // Search Input
  const searchInput = document.getElementById('menuSearchInput') || document.getElementById('liveSearchInput');
  const clearBtn = document.getElementById('clearSearchBtn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      if (clearBtn) clearBtn.classList.toggle('hidden', !state.searchQuery);
      renderCategorizedMenu();
      initScrollspy();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      clearSearch();
    });
  }

  // Filter Chips
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.activeFilter = chip.dataset.filter;
      renderCategorizedMenu();
      initScrollspy();
    });
  });

  // Order Mode Switcher (Delivery vs Pickup)
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.orderMode = btn.dataset.mode;
      const cartModeText = document.getElementById('cartModeText');
      if (cartModeText) cartModeText.innerText = state.orderMode || 'Delivery';
      showToast(`Switched to ${btn.dataset.mode.toUpperCase()} mode`, 'info');
    });
  });

  // Branch Selector
  const branchSelect = document.getElementById('branchSelect');
  if (branchSelect) {
    branchSelect.addEventListener('change', (e) => {
      state.currentBranch = e.target.value;
      showToast(`Selected Hub: ${state.currentBranch}`, 'info');
    });
  }

  // Fast Zero-Lag Modal Triggers & Dismissals (Supports all Primary and Secondary aliases)
  const cartOpenButtons = ['cartToggleBtn', 'navCartBtn', 'viewCartFloatingBtn', 'openCartBtn', 'mobileBottomCartBtn'];
  cartOpenButtons.forEach(btnId => {
    document.getElementById(btnId)?.addEventListener('click', openCart);
  });

  const cartCloseButtons = ['closeCartBtn', 'cartDrawerClose'];
  cartCloseButtons.forEach(btnId => {
    document.getElementById(btnId)?.addEventListener('click', closeCart);
  });
  document.getElementById('drawerBackdrop')?.addEventListener('click', closeCart);

  // Cart Drawer Checkout Action Buttons
  document.getElementById('codCheckoutBtn')?.addEventListener('click', checkoutCOD);
  document.getElementById('waCheckoutBtn')?.addEventListener('click', checkoutWhatsApp);

  const trackerOpenButtons = ['openTrackerBtn', 'navTrackerBtn', 'mobileBottomTrackBtn'];
  trackerOpenButtons.forEach(btnId => {
    document.getElementById(btnId)?.addEventListener('click', openTracker);
  });
  document.getElementById('trackerCloseBtn')?.addEventListener('click', closeTracker);
  document.getElementById('trackerBrowseMenuBtn')?.addEventListener('click', () => {
    closeTracker();
    document.getElementById('categorizedMenuContainer')?.scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('modalCloseBtn')?.addEventListener('click', closeCustomizer);
  document.getElementById('modalQtyMinus')?.addEventListener('click', () => adjustCustomQty(-1));
  document.getElementById('modalQtyPlus')?.addEventListener('click', () => adjustCustomQty(1));
  document.getElementById('modalConfirmBtn')?.addEventListener('click', confirmCustomizerAdd);

  document.getElementById('closeCheckoutDetailsBtn')?.addEventListener('click', closeCheckoutDetails);
  document.getElementById('confirmCheckoutSubmitBtn')?.addEventListener('click', confirmAndTransmitOrder);

  // Dismiss modals on backdrop click
  ['customizerModal', 'checkoutDetailsModal', 'orderTrackerModal'].forEach(modalId => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    }
  });

  // Dismiss all active modals on 'Escape' keypress
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCustomizer();
      closeCart();
      closeCheckoutDetails();
      closeTracker();
    }
  });

  // Captain Zesty Anime-Style Scroll Animation
  // Hand-raising motion + manga-style speech bubble on scroll (like anime books)
  const zestyWidget = document.getElementById('mascotWrapper') || document.getElementById('mascotWidget');
  const mascotCard = document.querySelector('.mascot-card');

  if (zestyWidget) {
    zestyWidget.classList.add('interactive-zesty-widget');
    zestyWidget.style.cursor = 'pointer';

    // IntersectionObserver for anime-style scroll animation
    const mascotObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Anime-style entrance: happy face + hand wave + speech bubble pop-in
          setTimeout(() => {
            zestyWidget.classList.add('super-happy');
            if (mascotCard) mascotCard.classList.add('show-message');
          }, 150);
        } else {
          // Return to calm when scrolled away
          zestyWidget.classList.remove('super-happy');
          if (mascotCard) mascotCard.classList.remove('show-message');
        }
      });
    }, {
      threshold: 0.4,
      rootMargin: '0px 0px -100px 0px'
    });

    mascotObserver.observe(zestyWidget);

    // Click interaction
    zestyWidget.addEventListener('click', () => {
      zestyWidget.classList.add('super-happy');
      if (mascotCard) mascotCard.classList.add('show-message');
      showToast('Captain Zesty says: "Hot, Crisp & Freshly Smashed Just For You!"', 'info');
      setTimeout(() => {
        zestyWidget.classList.remove('super-happy');
        if (mascotCard) mascotCard.classList.remove('show-message');
      }, 3500);
    });
  }

  // Initialize unified cart event delegation
  initCartItemDelegation();

  // Network Offline/Online Listeners
  window.addEventListener('online', () => {
    document.getElementById('networkBanner')?.classList.add('hidden');
    showToast('Connection Restored: Live KDS Synchronized', 'info');
  });
  window.addEventListener('offline', () => {
    document.getElementById('networkBanner')?.classList.remove('hidden');
  });
}

window.clearSearch = function() {
  state.searchQuery = '';
  const input = document.getElementById('menuSearchInput');
  const clearBtn = document.getElementById('clearSearchBtn');
  if (input) input.value = '';
  if (clearBtn) clearBtn.classList.add('hidden');
  renderCategorizedMenu();
  initScrollspy();
};

// Green "Added to Bucket" confirmation toast. `variant`: 'success' (green) | 'warning' (amber) | 'info' (neutral)
function showToast(msg, variant = 'success') {
  const toast = document.getElementById('cartToast');
  const text = document.getElementById('toastMsg') || document.getElementById('toastText');
  if (!toast || !text) return;

  text.innerText = msg;
  toast.classList.remove('toast-success', 'toast-warning', 'toast-info');
  toast.classList.add(`toast-${variant}`, 'show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
