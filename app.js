/**
 * HOT & TASTE FAST FOOD - CORE JAVASCRIPT ENGINE & ARCHITECTURE
 * Multi-Branch Ordering, Behavioral Psychology Triggers & KDS Stream
 */

// ==========================================
// 1. DATA DICTIONARIES (100% VERIFIED MENU)
// ==========================================
const LAHORE_BRANCHES = [
  { id: 'branch_1', name: 'Branch 1: Umar Park Khuda Baksh Rd', phone: '923038755099' },
  { id: 'branch_2', name: 'Branch 2: Dohlanwal Mor Near Goga Pan Shop', phone: '923082070044' },
  { id: 'branch_3', name: 'Branch 3: Sodiwal Main Road Lahore', phone: '923253664664' }
];

const MENU_CATEGORIES = [
  { id: 'deals', name: '🔥 Super Deals (1-17)' },
  { id: 'party_deals', name: '👑 Mega & Party Deals' },
  { id: 'pizzas', name: '🍕 Stone-Baked Pizzas' },
  { id: 'burgers', name: '🍔 Zinger & Burgers' },
  { id: 'shawarma_rolls', name: '🌯 Shawarma & Rolls' },
  { id: 'starters_fries', name: '🍟 Loaded Pizza Fries & Wings' }
];

const MENU_ITEMS = [
  // Super Deals 1-17
  {
    id: 'deal_1',
    category: 'deals',
    name: 'Deal 1',
    desc: '1 Small Pizza + 1 Regular Drink',
    price: 470,
    oldPrice: 580,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    type: 'deal',
    hasSpice: true,
    hasCrust: true
  },
  {
    id: 'deal_2',
    category: 'deals',
    name: 'Deal 2',
    desc: '1 Medium Pizza + 1 500ml Drink',
    price: 950,
    oldPrice: 1150,
    badge: 'Save 17%',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80',
    type: 'deal',
    hasSpice: true,
    hasCrust: true
  },
  {
    id: 'deal_3',
    category: 'deals',
    name: 'Deal 3',
    desc: '1 Large Pizza + 1.5L Drink',
    price: 1350,
    oldPrice: 1650,
    badge: 'Family Size',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80',
    type: 'deal',
    hasSpice: true,
    hasCrust: true
  },
  {
    id: 'deal_4',
    category: 'deals',
    name: 'Deal 4',
    desc: '1 Zinger Burger + 1 Regular Drink',
    price: 420,
    oldPrice: 520,
    badge: 'Hot Seller',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    type: 'burger_deal',
    hasSpice: true
  },
  {
    id: 'deal_5',
    category: 'deals',
    name: 'Deal 5',
    desc: '1 Chicken Patty Burger + 1 Regular Drink',
    price: 320,
    oldPrice: 400,
    badge: 'Budget Pick',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80',
    type: 'burger_deal',
    hasSpice: true
  },
  {
    id: 'deal_6',
    category: 'deals',
    name: 'Deal 6',
    desc: '1 Chicken Shawarma + 1 Regular Drink',
    price: 260,
    oldPrice: 320,
    badge: 'Best Value',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80',
    type: 'wrap_deal',
    hasSpice: true
  },
  {
    id: 'deal_7',
    category: 'deals',
    name: 'Deal 7',
    desc: '1 Zinger Shawarma + 1 Regular Drink',
    price: 340,
    oldPrice: 420,
    badge: 'Crispy Wrap',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80',
    type: 'wrap_deal',
    hasSpice: true
  },
  {
    id: 'deal_8',
    category: 'deals',
    name: 'Deal 8',
    desc: '1 Chicken Paratha Roll + 1 Regular Drink',
    price: 340,
    oldPrice: 410,
    badge: 'Desi Flavour',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    type: 'wrap_deal',
    hasSpice: true
  },
  {
    id: 'deal_9',
    category: 'deals',
    name: 'Deal 9',
    desc: '1 Zinger Paratha Roll + 1 Regular Drink',
    price: 410,
    oldPrice: 500,
    badge: 'Chef Choice',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    type: 'wrap_deal',
    hasSpice: true
  },
  {
    id: 'deal_10',
    category: 'deals',
    name: 'Deal 10',
    desc: '2 Zinger Burgers + 2 Regular Drinks',
    price: 820,
    oldPrice: 1040,
    badge: 'Twin Combo',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    type: 'burger_deal',
    hasSpice: true
  },
  {
    id: 'deal_11',
    category: 'deals',
    name: 'Deal 11',
    desc: '2 Chicken Burgers + 2 Regular Drinks',
    price: 620,
    oldPrice: 800,
    badge: 'Twin Saver',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80',
    type: 'burger_deal',
    hasSpice: true
  },
  {
    id: 'deal_12',
    category: 'deals',
    name: 'Deal 12 (Mega Zinger-Pizza Combo)',
    desc: '1 Zinger Burger + 1 Small Pizza + 1 Regular Drink',
    price: 830,
    oldPrice: 1080,
    badge: '🔥 #1 MOST ORDERED',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80',
    type: 'deal',
    hasSpice: true,
    hasCrust: true
  },
  {
    id: 'deal_13',
    category: 'deals',
    name: 'Deal 13',
    desc: '1 Zinger Burger + 1 Chicken Shawarma + 1 Reg Drink',
    price: 620,
    oldPrice: 780,
    badge: 'Combo Saver',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    type: 'burger_deal',
    hasSpice: true
  },
  {
    id: 'deal_14',
    category: 'deals',
    name: 'Deal 14',
    desc: '1 Zinger Burger + 1 Zinger Shawarma + 1 Reg Drink',
    price: 700,
    oldPrice: 860,
    badge: 'Double Crispy',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    type: 'burger_deal',
    hasSpice: true
  },
  {
    id: 'deal_15',
    category: 'deals',
    name: 'Deal 15',
    desc: '1 Small Pizza + 1 Chicken Shawarma + 1 Reg Drink',
    price: 670,
    oldPrice: 830,
    badge: 'Top Combo',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    type: 'deal',
    hasSpice: true,
    hasCrust: true
  },
  {
    id: 'deal_16',
    category: 'deals',
    name: 'Deal 16',
    desc: '1 Small Pizza + 1 Zinger Shawarma + 1 Reg Drink',
    price: 750,
    oldPrice: 920,
    badge: 'Supreme Deal',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    type: 'deal',
    hasSpice: true,
    hasCrust: true
  },
  {
    id: 'deal_17',
    category: 'deals',
    name: 'Deal 17',
    desc: '1 Zinger Burger + 1 French Fries + 1 Reg Drink',
    price: 630,
    oldPrice: 790,
    badge: 'Classic Feast',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    type: 'burger_deal',
    hasSpice: true
  },

  // Mega & Party Deals
  {
    id: 'party_deal',
    category: 'party_deals',
    name: 'Party Deal (3 Large Pizzas + Drink)',
    desc: '3 Fresh Large Pizzas + 1.5L Chilled Drink (Feeds 8-10)',
    price: 3950,
    oldPrice: 4800,
    badge: '👑 HUGE SAVINGS',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80',
    type: 'pizza',
    hasSpice: true,
    hasCrust: true
  },
  {
    id: 'family_deal_1',
    category: 'party_deals',
    name: 'Family Deal 1 (2 Large Pizzas)',
    desc: '2 Fresh Large Pizzas + 1.5L Chilled Drink (Feeds 5-7)',
    price: 2650,
    oldPrice: 3200,
    badge: 'Family Favorite',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80',
    type: 'pizza',
    hasSpice: true,
    hasCrust: true
  },
  {
    id: 'family_deal_2',
    category: 'party_deals',
    name: 'Family Deal 2 (2 Medium Pizzas)',
    desc: '2 Fresh Medium Pizzas + 1.5L Chilled Drink (Feeds 4-5)',
    price: 1850,
    oldPrice: 2250,
    badge: 'Weekend Saver',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    type: 'pizza',
    hasSpice: true,
    hasCrust: true
  },

  // Pizzas
  {
    id: 'p_fajita',
    category: 'pizzas',
    name: 'Chicken Fajita Pizza',
    desc: 'Marinated spicy fajita chicken, crisp onions, green peppers & mozzarella',
    price: 450,
    badge: 'Authentic',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80',
    type: 'pizza',
    hasSpice: true,
    hasCrust: true
  },
  {
    id: 'p_tikka',
    category: 'pizzas',
    name: 'Chicken Tikka Pizza',
    desc: 'Traditional smoked chicken tikka chunks with fresh onions and herbs',
    price: 450,
    badge: 'Desi Classic',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    type: 'pizza',
    hasSpice: true,
    hasCrust: true
  },
  {
    id: 'p_special',
    category: 'pizzas',
    name: 'Hot & Taste Special Pizza',
    desc: 'Loaded combo of smoked chicken, sausages, black olives, mushrooms & double cheese',
    price: 520,
    badge: '👑 House Special',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80',
    type: 'pizza',
    hasSpice: true,
    hasCrust: true
  },

  // Burgers
  {
    id: 'b_zinger',
    category: 'burgers',
    name: 'Crispy Zinger Burger',
    desc: 'Whole chicken breast fillet coated in spicy crispy crust with garlic mayo',
    price: 380,
    badge: 'Crispy Gold',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    type: 'burger',
    hasSpice: true
  },
  {
    id: 'b_tower',
    category: 'burgers',
    name: 'Tower Double Zinger Burger',
    desc: 'Double crispy fillet stack with melted cheese slice and hash brown',
    price: 560,
    badge: 'Monster Stack',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80',
    type: 'burger',
    hasSpice: true
  },
  {
    id: 'b_patty',
    category: 'burgers',
    name: 'Chicken Patty Burger',
    desc: 'Tender chicken minced patty with iceberg lettuce and savory house sauce',
    price: 260,
    badge: 'Classic',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80',
    type: 'burger',
    hasSpice: true
  },

  // Shawarma & Rolls
  {
    id: 's_chicken',
    category: 'shawarma_rolls',
    name: 'Chicken Shawarma',
    desc: 'Sliced spiced chicken in soft pita bread with signature garlic sauce & pickles',
    price: 200,
    badge: 'Lahore Favorite',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80',
    type: 'wrap',
    hasSpice: true
  },
  {
    id: 's_zinger',
    category: 'shawarma_rolls',
    name: 'Zinger Shawarma',
    desc: 'Crispy fried chicken strips wrapped with spicy garlic dip and veggies',
    price: 280,
    badge: 'Crispy Crunch',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80',
    type: 'wrap',
    hasSpice: true
  },
  {
    id: 's_paratha',
    category: 'shawarma_rolls',
    name: 'Chicken Paratha Roll',
    desc: 'Crispy golden fried paratha rolled with grilled chicken chunks & onions',
    price: 280,
    badge: 'Crispy Paratha',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    type: 'wrap',
    hasSpice: true
  },

  // Starters, Fries & Wings
  {
    id: 'pizza_fries',
    category: 'starters_fries',
    name: 'Special Loaded Pizza Fries',
    desc: 'Golden crispy fries smothered in pizza sauce, mozzarella cheese, chicken tikka chunks and black olives',
    price: 490,
    badge: '🔥 CHEF SIGNATURE',
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80',
    type: 'fries',
    hasSpice: true
  },
  {
    id: 'wings_10',
    category: 'starters_fries',
    name: 'Hot Crispy Wings (10 Pcs)',
    desc: '10 pieces of seasoned crispy fried chicken wings with spicy dipping sauce',
    price: 490,
    badge: 'Sharing Basket',
    image: 'https://images.unsplash.com/photo-1527477321005-4d45d314bc31?auto=format&fit=crop&w=600&q=80',
    type: 'wings',
    hasSpice: true
  },
  {
    id: 'cheese_fries',
    category: 'starters_fries',
    name: 'Loaded Cheesy Jalapeno Fries',
    desc: 'Crispy french fries topped with hot cheddar cheese sauce & sliced jalapenos',
    price: 380,
    badge: 'Spicy Cheese',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80',
    type: 'fries',
    hasSpice: true
  }
];

// Crust Upgrades & Customization Add-ons
const CRUST_OPTIONS = [
  { id: 'pan', name: 'Classic Pan Crust', price: 0 },
  { id: 'crown', name: '👑 Crown Crust (Cheese Pockets)', price: 150 },
  { id: 'kabab', name: '🍢 Seekh Kabab Stuffed Crust', price: 200 }
];

const SPICE_OPTIONS = [
  { id: 'mild', name: 'Mild 😊', price: 0 },
  { id: 'medium', name: 'Medium Spicy 🔥', price: 0, default: true },
  { id: 'extra_hot', name: 'Extra Hot 🌶️', price: 0 }
];

const IMPULSE_ADDONS = [
  { id: 'garlic_dip', name: 'Garlic Mayo Dip', price: 60 },
  { id: 'fiery_sauce', name: 'Fiery Chili Sauce', price: 50 },
  { id: 'extra_cheese', name: 'Extra Mozzarella Melt', price: 120 }
];

// ==========================================
// 2. STATE MANAGEMENT & STORE
// ==========================================
let currentBranch = LAHORE_BRANCHES[0];
let activeCategory = 'deals';
let cart = [];
let activeConfigItem = null;
let currentSlideIndex = 0;
let slideInterval = null;

// ==========================================
// 3. SECURITY UTILITY: XSS SANITIZATION
// ==========================================
function sanitizeHTML(str) {
  if (typeof str !== 'string') return '';
  const p = document.createElement('p');
  p.textContent = str;
  return p.innerHTML;
}

// ==========================================
// 4. UI INITIALIZATION & EVENT LISTENERS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initBranchSelector();
  initHeroCarousel();
  initCategoryNav();
  renderMenuGrid();
  initCartDrawer();
  initModalHandlers();
});

function initBranchSelector() {
  const branchSelect = document.getElementById('branchSelect');
  if (!branchSelect) return;

  branchSelect.innerHTML = LAHORE_BRANCHES.map(b =>
    `<option value="${b.id}">${sanitizeHTML(b.name)}</option>`
  ).join('');

  branchSelect.addEventListener('change', (e) => {
    const selected = LAHORE_BRANCHES.find(b => b.id === e.target.value);
    if (selected) {
      currentBranch = selected;
    }
  });
}

// ==========================================
// 5. HERO CAROUSEL LOGIC
// ==========================================
function initHeroCarousel() {
  const track = document.getElementById('heroSlidesTrack');
  const dots = document.querySelectorAll('.carousel-dot');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  const carousel = document.getElementById('heroCarousel');

  if (!track) return;

  function goToSlide(idx) {
    currentSlideIndex = idx;
    track.style.transform = `translateX(-${idx * 33.333}%)`;
    dots.forEach((dot, dIdx) => {
      dot.classList.toggle('active', dIdx === idx);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const newIdx = (currentSlideIndex - 1 + 3) % 3;
      goToSlide(newIdx);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const newIdx = (currentSlideIndex + 1) % 3;
      goToSlide(newIdx);
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-slide') || '0', 10);
      goToSlide(idx);
    });
  });

  function startAutoSlide() {
    slideInterval = setInterval(() => {
      goToSlide((currentSlideIndex + 1) % 3);
    }, 5000);
  }

  if (carousel) {
    carousel.addEventListener('mouseenter', () => clearInterval(slideInterval));
    carousel.addEventListener('mouseleave', startAutoSlide);
  }
  startAutoSlide();
}

// ==========================================
// 6. CATEGORY NAV & MENU RENDERING
// ==========================================
function initCategoryNav() {
  const nav = document.getElementById('categoryNav');
  if (!nav) return;

  nav.innerHTML = MENU_CATEGORIES.map(cat => `
    <button class="category-pill ${cat.id === activeCategory ? 'active' : ''}" data-cat="${cat.id}">
      ${cat.name}
    </button>
  `).join('');

  nav.querySelectorAll('.category-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      nav.querySelectorAll('.category-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-cat') || 'deals';
      renderMenuGrid();
    });
  });
}

function renderMenuGrid() {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;

  const items = MENU_ITEMS.filter(i => activeCategory === 'all' || i.category === activeCategory);

  grid.innerHTML = items.map(item => `
    <div class="menu-card" id="card-${item.id}">
      <div class="card-img-wrapper">
        <img src="${item.image}" class="card-img" alt="${sanitizeHTML(item.name)}" loading="lazy">
        ${item.badge ? `<span class="card-badge ${item.badge.includes('🔥') || item.badge.includes('👑') ? 'gold' : ''}">${sanitizeHTML(item.badge)}</span>` : ''}
      </div>
      <div class="card-body">
        <div class="card-header">
          <h3 class="card-title">${sanitizeHTML(item.name)}</h3>
        </div>
        <p class="card-desc">${sanitizeHTML(item.desc)}</p>
        <div class="card-footer">
          <div class="price-block">
            <span class="card-price">Rs. ${item.price}</span>
            ${item.oldPrice ? `<span class="card-old-price">Rs. ${item.oldPrice}</span>` : ''}
          </div>
          <button class="add-btn" onclick="openItemCustomizer('${item.id}', event)">
            <span>Customize</span>
            <span>➔</span>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// ==========================================
// 7. ITEM CUSTOMIZER MODAL & BEZIER FLY PHYSICS
// ==========================================
window.openItemCustomizer = function(itemId, event) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  activeConfigItem = {
    ...item,
    selectedCrust: item.hasCrust ? CRUST_OPTIONS[0] : null,
    selectedSpice: item.hasSpice ? SPICE_OPTIONS[1] : null,
    selectedAddons: [],
    specialNotes: '',
    currentComputedPrice: item.price
  };

  const modal = document.getElementById('customizerModal');
  const title = document.getElementById('modalItemTitle');
  const desc = document.getElementById('modalItemDesc');
  const headerImg = document.getElementById('modalHeaderImg');
  const body = document.getElementById('modalCustomizerBody');

  if (title) title.textContent = item.name;
  if (desc) desc.textContent = item.desc;
  if (headerImg) headerImg.style.backgroundImage = `url('${item.image}')`;

  if (body) {
    let html = '';

    // Crust Upgrades
    if (item.hasCrust) {
      html += `
        <div>
          <div class="customizer-section-title">
            <span>Pizza Crust Upgrade</span>
            <span style="font-size: 11px; color: var(--accent);">Optional</span>
          </div>
          <div class="options-grid">
            ${CRUST_OPTIONS.map((c, idx) => `
              <div class="option-pill ${idx === 0 ? 'active' : ''}" onclick="selectCrust('${c.id}', this)">
                <span class="option-pill-name">${c.name}</span>
                <span class="option-pill-price">${c.price === 0 ? 'Included' : `+Rs. ${c.price}`}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    // Spice Levels
    if (item.hasSpice) {
      html += `
        <div>
          <div class="customizer-section-title">
            <span>Spice Preference</span>
            <span style="font-size: 11px; color: var(--accent);">Included</span>
          </div>
          <div class="options-grid">
            ${SPICE_OPTIONS.map((s) => `
              <div class="option-pill ${s.default ? 'active' : ''}" onclick="selectSpice('${s.id}', this)">
                <span class="option-pill-name">${s.name}</span>
                <span class="option-pill-price">Rs. 0</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    // Impulse Add-ons & Dips
    html += `
      <div>
        <div class="customizer-section-title">
          <span>Add-ons & Dips</span>
          <span style="font-size: 11px; color: var(--accent);">Extra</span>
        </div>
        <div class="options-grid">
          ${IMPULSE_ADDONS.map(a => `
            <div class="option-pill" onclick="toggleAddon('${a.id}', this)">
              <span class="option-pill-name">${a.name}</span>
              <span class="option-pill-price">+Rs. ${a.price}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Special Kitchen Notes
    html += `
      <div>
        <div class="customizer-section-title">
          <span>Special Kitchen Instructions</span>
        </div>
        <textarea id="modalSpecialNotes" class="custom-notes-input" rows="2" placeholder="E.g., Make it extra crispy, sauce on the side..."></textarea>
      </div>
    `;

    body.innerHTML = html;
  }

  updateModalTotal();
  if (modal) modal.classList.add('open');
};

window.selectCrust = function(crustId, el) {
  const crust = CRUST_OPTIONS.find(c => c.id === crustId);
  if (!crust || !activeConfigItem) return;
  activeConfigItem.selectedCrust = crust;
  el.parentElement.querySelectorAll('.option-pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  updateModalTotal();
};

window.selectSpice = function(spiceId, el) {
  const spice = SPICE_OPTIONS.find(s => s.id === spiceId);
  if (!spice || !activeConfigItem) return;
  activeConfigItem.selectedSpice = spice;
  el.parentElement.querySelectorAll('.option-pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
};

window.toggleAddon = function(addonId, el) {
  const addon = IMPULSE_ADDONS.find(a => a.id === addonId);
  if (!addon || !activeConfigItem) return;

  const existsIdx = activeConfigItem.selectedAddons.findIndex(a => a.id === addonId);
  if (existsIdx > -1) {
    activeConfigItem.selectedAddons.splice(existsIdx, 1);
    el.classList.remove('active');
  } else {
    activeConfigItem.selectedAddons.push(addon);
    el.classList.add('active');
  }
  updateModalTotal();
};

function updateModalTotal() {
  if (!activeConfigItem) return;
  let total = activeConfigItem.price;
  if (activeConfigItem.selectedCrust) total += activeConfigItem.selectedCrust.price;
  activeConfigItem.selectedAddons.forEach(a => total += a.price);
  activeConfigItem.currentComputedPrice = total;

  const display = document.getElementById('modalPriceDisplay');
  if (display) display.textContent = `Rs. ${total}`;
}

function initModalHandlers() {
  const modal = document.getElementById('customizerModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const confirmBtn = document.getElementById('modalConfirmBtn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('open'));
  }

  if (confirmBtn && modal) {
    confirmBtn.addEventListener('click', (e) => {
      if (!activeConfigItem) return;
      const notesEl = document.getElementById('modalSpecialNotes');
      if (notesEl) activeConfigItem.specialNotes = notesEl.value.trim();

      // Trigger GPU Parabolic Bezier Fly to Cart
      triggerParabolicFlyToCart(e);

      // Show Green Cart Notification Toast
      showCartToast(`${activeConfigItem.name} added to cart!`);

      // Add to Cart Array
      cart.push({
        id: Date.now() + '_' + Math.random().toString(36).substr(2, 4),
        itemId: activeConfigItem.id,
        name: activeConfigItem.name,
        basePrice: activeConfigItem.price,
        unitPrice: activeConfigItem.currentComputedPrice,
        category: activeConfigItem.category,
        crust: activeConfigItem.selectedCrust ? activeConfigItem.selectedCrust.name : null,
        spice: activeConfigItem.selectedSpice ? activeConfigItem.selectedSpice.name : null,
        addons: [...activeConfigItem.selectedAddons],
        notes: activeConfigItem.specialNotes,
        qty: 1
      });

      modal.classList.remove('open');
      updateCartBadge();
      renderCartDrawer();
    });
  }
}

// Show Cart Green Notification Toast
function showCartToast(msg) {
  const toast = document.getElementById('cartToast');
  const toastMsg = document.getElementById('toastMsg');
  if (!toast) return;
  if (toastMsg && msg) toastMsg.textContent = msg;
  toast.classList.add('show');
  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// Parabolic Bezier Fly Animation
function triggerParabolicFlyToCart(e) {
  const cartBtn = document.getElementById('cartToggleBtn');
  if (!cartBtn) return;

  const startRect = e.target.getBoundingClientRect();
  const endRect = cartBtn.getBoundingClientRect();

  const ball = document.createElement('div');
  ball.className = 'fly-ball';
  ball.style.left = `${startRect.left + startRect.width / 2}px`;
  ball.style.top = `${startRect.top + startRect.height / 2}px`;
  document.body.appendChild(ball);

  const deltaX = (endRect.left + endRect.width / 2) - (startRect.left + startRect.width / 2);
  const deltaY = (endRect.top + endRect.height / 2) - (startRect.top + startRect.height / 2);

  const anim = ball.animate([
    { transform: 'translate(0, 0) scale(1.2)' },
    { transform: `translate(${deltaX * 0.5}px, ${deltaY - 100}px) scale(1.5)` },
    { transform: `translate(${deltaX}px, ${deltaY}px) scale(0.3)` }
  ], {
    duration: 600,
    easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)'
  });

  anim.onfinish = () => {
    ball.remove();
    cartBtn.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(1.25)' },
      { transform: 'scale(1)' }
    ], { duration: 300 });
  };
}

// ==========================================
// 8. CART DRAWER & WHATSAPP SERIALIZER
// ==========================================
function initCartDrawer() {
  const cartToggleBtn = document.getElementById('cartToggleBtn');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartDrawer = document.getElementById('cartDrawer');
  const checkoutBtn = document.getElementById('checkoutBtn');

  function openCart() {
    if (cartDrawer) cartDrawer.classList.add('open');
    if (cartOverlay) cartOverlay.classList.add('open');
  }

  function closeCart() {
    if (cartDrawer) cartDrawer.classList.remove('open');
    if (cartOverlay) cartOverlay.classList.remove('open');
  }

  if (cartToggleBtn) cartToggleBtn.addEventListener('click', openCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', handleWhatsAppCheckout);
  }
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  if (badge) badge.textContent = totalItems;
}

function renderCartDrawer() {
  const list = document.getElementById('cartItemsList');
  const subtotalEl = document.getElementById('cartSubtotal');
  const totalEl = document.getElementById('cartTotal');
  const freeDeliveryProgress = document.getElementById('freeDeliveryProgress');
  const freeDeliveryText = document.getElementById('freeDeliveryText');

  if (!list) return;

  if (cart.length === 0) {
    list.innerHTML = `
      <div style="text-align: center; color: var(--text-muted); padding: 40px 20px;">
        <span style="font-size: 40px; display: block; margin-bottom: 10px;">🛒</span>
        <p style="font-weight: 700;">Your Cart is Empty</p>
        <p style="font-size: 12px; margin-top: 4px;">Choose from our deals and pizzas to build your order</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = 'Rs. 0';
    if (totalEl) totalEl.textContent = 'Rs. 0';
    if (freeDeliveryProgress) freeDeliveryProgress.style.width = '0%';
    return;
  }

  let subtotal = 0;

  list.innerHTML = cart.map(item => {
    const itemTotal = item.unitPrice * item.qty;
    subtotal += itemTotal;

    const metaParts = [];
    if (item.crust) metaParts.push(`Crust: ${item.crust}`);
    if (item.spice) metaParts.push(`Spice: ${item.spice}`);
    if (item.addons.length > 0) metaParts.push(`Dips: ${item.addons.map(a => a.name).join(', ')}`);
    if (item.notes) metaParts.push(`Note: "${item.notes}"`);

    return `
      <div class="cart-item-row">
        <div class="cart-item-info">
          <div class="cart-item-name">${sanitizeHTML(item.name)}</div>
          <div class="cart-item-meta">${sanitizeHTML(metaParts.join(' | '))}</div>
          <div class="cart-item-price">Rs. ${itemTotal}</div>
        </div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="changeQty('${item.id}', -1)">-</button>
          <span style="font-size: 13px; font-weight: 800; min-width: 16px; text-align: center;">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
        </div>
      </div>
    `;
  }).join('');

  const deliveryFee = subtotal >= 1500 ? 0 : 100;
  const grandTotal = subtotal + deliveryFee;

  if (subtotalEl) subtotalEl.textContent = `Rs. ${subtotal}`;
  if (totalEl) totalEl.textContent = `Rs. ${grandTotal}`;

  // Psychology: Free Delivery Progress Threshold (Rs. 1500 target)
  const threshold = 1500;
  const pct = Math.min(100, Math.round((subtotal / threshold) * 100));
  if (freeDeliveryProgress) freeDeliveryProgress.style.width = `${pct}%`;
  if (freeDeliveryText) {
    if (subtotal >= threshold) {
      freeDeliveryText.innerHTML = `<span>🎉 FREE Lahore Delivery Unlocked!</span><span>Rs. 0</span>`;
    } else {
      const remaining = threshold - subtotal;
      freeDeliveryText.innerHTML = `<span>Add Rs. ${remaining} more for FREE Delivery</span><span>${pct}%</span>`;
    }
  }
}

window.changeQty = function(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== id);
  }
  updateCartBadge();
  renderCartDrawer();
};

function handleWhatsAppCheckout() {
  if (cart.length === 0) {
    alert('Please add at least 1 item to your cart before ordering.');
    return;
  }

  let subtotal = 0;
  let itemsSummary = '';
  const itemNames = [];

  cart.forEach((item, index) => {
    const itemTotal = item.unitPrice * item.qty;
    subtotal += itemTotal;
    itemNames.push(`${item.name} x ${item.qty}`);

    itemsSummary += `\n${index + 1}. *${item.name}* x ${item.qty} (Rs. ${itemTotal})`;
    if (item.crust) itemsSummary += `\n   - Crust: ${item.crust}`;
    if (item.spice) itemsSummary += `\n   - Spice: ${item.spice}`;
    if (item.addons.length > 0) itemsSummary += `\n   - Add-ons: ${item.addons.map(a => a.name).join(', ')}`;
    if (item.notes) itemsSummary += `\n   - Instructions: "${item.notes}"`;
  });

  const deliveryFee = subtotal >= 1500 ? 0 : 100;
  const grandTotal = subtotal + deliveryFee;

  // Sync order to Admin ERP & Kitchen KDS shared storage
  const orderId = 'ORD-' + Math.floor(1000 + Math.random() * 9000);
  const newKdsOrder = {
    id: orderId,
    customer: 'Online WhatsApp Customer',
    branch: currentBranch.name,
    branchId: currentBranch.id,
    items: itemNames.join(', '),
    amount: `Rs. ${grandTotal}`,
    numericAmount: grandTotal,
    category: cart[0]?.category || 'deals',
    sla: '1m SLA',
    slaType: 'fresh',
    status: 'pending',
    timestamp: Date.now()
  };

  try {
    const existingKds = JSON.parse(localStorage.getItem('hot_taste_orders') || '[]');
    existingKds.unshift(newKdsOrder);
    localStorage.setItem('hot_taste_orders', JSON.stringify(existingKds));
  } catch (e) {
    console.warn('Storage sync failed', e);
  }

  const message = `👑 *AZFC FAST & CRISPY ORDER* 👑\n` +
    `📍 *Branch:* ${currentBranch.name}\n` +
    `🆔 *Order Ref:* ${orderId}\n` +
    `------------------------------------\n` +
    `${itemsSummary}\n` +
    `------------------------------------\n` +
    `💵 *Items Subtotal:* Rs. ${subtotal}\n` +
    `🚚 *Delivery Fee:* Rs. ${deliveryFee} ${deliveryFee === 0 ? '(FREE VIP Promo)' : ''}\n` +
    `💰 *Grand Total:* Rs. ${grandTotal}\n\n` +
    `🏠 *Customer Delivery Details:*\n` +
    `Name: \n` +
    `Phone: \n` +
    `Delivery Address: \n` +
    `Payment Method: Cash on Delivery (COD)`;

  const encodedUrl = `https://wa.me/${currentBranch.phone}?text=${encodeURIComponent(message)}`;
  window.open(encodedUrl, '_blank');
}

// ==========================================
// 10. REAL-TIME DEAL BROADCAST NOTIFICATION LISTENER & PHONE OS PUSH ENGINE
// ==========================================
function checkPromoBroadcast() {
  try {
    const raw = localStorage.getItem('hot_taste_broadcast_promo');
    if (!raw) return;
    const promo = JSON.parse(raw);
    if (!promo || !promo.active) return;

    // Check if dismissed in this session
    if (sessionStorage.getItem('dismissed_promo_' + promo.id)) return;

    // 1. In-App Visual Banner
    const banner = document.getElementById('promoPushBanner');
    const tagEl = document.getElementById('promoBannerTag');
    const titleEl = document.getElementById('promoBannerTitle');
    const msgEl = document.getElementById('promoBannerMsg');
    const closeBtn = document.getElementById('promoBannerCloseBtn');

    if (banner && titleEl && msgEl) {
      if (tagEl) tagEl.textContent = promo.tag || '🔥 HOT DEAL';
      titleEl.textContent = promo.title;
      msgEl.textContent = promo.message;
      banner.classList.add('active');

      if (closeBtn) {
        closeBtn.onclick = () => {
          banner.classList.remove('active');
          sessionStorage.setItem('dismissed_promo_' + promo.id, 'true');
        };
      }
    }

    // 2. Native Android / Phone OS System Notification Push
    if ('Notification' in window && Notification.permission === 'granted') {
      if (navigator.serviceWorker && navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({
          type: 'SHOW_NOTIFICATION',
          payload: {
            id: promo.id,
            title: `${promo.tag || '👑 VIP DEAL'} - ${promo.title}`,
            message: promo.message
          }
        });
      } else {
        // Fallback Native Notification
        new Notification(`${promo.tag || '👑 VIP DEAL'} - ${promo.title}`, {
          body: promo.message,
          icon: './icon-192.png',
          badge: './icon-192.png'
        });
      }
    }
  } catch (e) {
    console.warn('Promo listener error:', e);
  }
}

// Check and request Native Push Notification Permission
function setupPushNotificationEngine() {
  const permBanner = document.getElementById('pushPermissionBanner');
  const enableBtn = document.getElementById('enablePushBtn');
  const dismissBtn = document.getElementById('dismissPushBtn');

  if (!('Notification' in window)) return;

  // If not granted and not previously dismissed, ask customer
  if (Notification.permission === 'default' && !localStorage.getItem('azfc_push_dismissed')) {
    if (permBanner) {
      setTimeout(() => {
        permBanner.classList.add('show');
      }, 1500);
    }
  }

  if (enableBtn) {
    enableBtn.addEventListener('click', async () => {
      try {
        const perm = await Notification.requestPermission();
        if (perm === 'granted') {
          if (permBanner) permBanner.classList.remove('show');
          showCartToast('🔔 Lock screen notifications enabled!');

          // Test welcome notification
          if (navigator.serviceWorker && navigator.serviceWorker.ready) {
            const reg = await navigator.serviceWorker.ready;
            reg.showNotification('👑 AZFC VIP Alerts Enabled!', {
              body: 'You will now receive secret discounts and instant kitchen order updates!',
              icon: './icon-192.png',
              badge: './icon-192.png',
              vibrate: [200, 100, 200]
            });
          }
        } else {
          if (permBanner) permBanner.classList.remove('show');
        }
      } catch (err) {
        console.error('Notification permission error:', err);
      }
    });
  }

  if (dismissBtn && permBanner) {
    dismissBtn.addEventListener('click', () => {
      permBanner.classList.remove('show');
      localStorage.setItem('azfc_push_dismissed', 'true');
    });
  }
}

// In-App Notification Preferences Toggle Handler
function setupNotificationToggleBtn() {
  const toggleBtn = document.getElementById('notifPrefToggleBtn');
  const icon = document.getElementById('notifStatusIcon');
  const text = document.getElementById('notifStatusText');

  function updateUi() {
    const isMuted = localStorage.getItem('azfc_notif_muted') === 'true';
    if (!('Notification' in window) || Notification.permission === 'denied' || isMuted) {
      if (icon) icon.textContent = '🔕';
      if (text) text.textContent = 'Alerts OFF';
      if (toggleBtn) toggleBtn.style.color = 'var(--text-muted)';
    } else {
      if (icon) icon.textContent = '🔔';
      if (text) text.textContent = 'Alerts ON';
      if (toggleBtn) toggleBtn.style.color = '#34D399';
    }
  }

  updateUi();

  if (toggleBtn) {
    toggleBtn.addEventListener('click', async () => {
      if (!('Notification' in window)) {
        alert('Web push notifications are not supported in this browser.');
        return;
      }

      if (Notification.permission === 'default') {
        const perm = await Notification.requestPermission();
        if (perm === 'granted') {
          localStorage.removeItem('azfc_notif_muted');
          showCartToast('🔔 Notifications Enabled!');
        }
      } else if (Notification.permission === 'granted') {
        const isMuted = localStorage.getItem('azfc_notif_muted') === 'true';
        if (isMuted) {
          localStorage.removeItem('azfc_notif_muted');
          showCartToast('🔔 Push Notifications Activated!');
        } else {
          localStorage.setItem('azfc_notif_muted', 'true');
          showCartToast('🔕 Push Notifications Muted');
        }
      } else {
        alert('Notification permission is blocked in browser settings. Please enable them in your browser/app settings.');
      }
      updateUi();
    });
  }
}

// Storage event listener for live cross-tab deal notification
window.addEventListener('storage', (e) => {
  if (e.key === 'hot_taste_broadcast_promo') {
    checkPromoBroadcast();
  }
});

// Initialize Promo check & Push Engine on storefront load
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(checkPromoBroadcast, 1200);
  setTimeout(setupPushNotificationEngine, 1000);
  setTimeout(setupNotificationToggleBtn, 500);
});

// ==========================================
// 11. PWA SERVICE WORKER & INSTANT 1-CLICK APP INSTALL ENGINE
// ==========================================
let deferredPrompt = null;

// Determine if app is running in installed standalone mode
function isAppInstalled() {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true ||
    document.referrer.includes('android-app://')
  );
}

// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => {
        console.log('👑 AZFC PWA Service Worker Registered:', reg.scope);
      })
      .catch(err => {
        console.warn('PWA Service Worker Registration Error:', err);
      });
  });
}

// Intercept browser install prompt immediately
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;

  const banner = document.getElementById('pwaInstallBanner');
  // CRITICAL: NEVER show install banner if app is already running as installed standalone app!
  if (banner && !isAppInstalled() && !sessionStorage.getItem('pwa_banner_dismissed')) {
    banner.style.display = 'flex';
  }
});

// Listen for successful installation
window.addEventListener('appinstalled', () => {
  console.log('🎉 AZFC App installed successfully on user device!');
  const banner = document.getElementById('pwaInstallBanner');
  if (banner) banner.style.display = 'none';
  localStorage.setItem('azfc_app_is_installed', 'true');
  deferredPrompt = null;
  showCartToast('👑 AZFC App installed successfully!');
});

document.addEventListener('DOMContentLoaded', () => {
  const installBtn = document.getElementById('pwaInstallBtn');
  const dismissBtn = document.getElementById('pwaDismissBtn');
  const banner = document.getElementById('pwaInstallBanner');

  // Immediately hide install banner if app is installed
  if (isAppInstalled() || localStorage.getItem('azfc_app_is_installed') === 'true') {
    if (banner) banner.style.display = 'none';
  }

  if (installBtn) {
    installBtn.addEventListener('click', async () => {
      if (deferredPrompt) {
        try {
          deferredPrompt.prompt();
          const { outcome } = await deferredPrompt.userChoice;
          if (outcome === 'accepted') {
            if (banner) banner.style.display = 'none';
            localStorage.setItem('azfc_app_is_installed', 'true');
            showCartToast('👑 AZFC App Installing...');
          }
        } catch (err) {
          console.error('Install prompt error:', err);
        }
        deferredPrompt = null;
      } else {
        const guideModal = document.getElementById('pwaGuideModal');
        if (guideModal) {
          guideModal.classList.add('open');
        }
      }
    });
  }

  // Modal Close Handlers
  const guideCloseBtn = document.getElementById('pwaGuideCloseBtn');
  const guideActionBtn = document.getElementById('pwaGuideActionBtn');
  const guideModal = document.getElementById('pwaGuideModal');

  if (guideCloseBtn && guideModal) {
    guideCloseBtn.addEventListener('click', () => guideModal.classList.remove('open'));
  }
  if (guideActionBtn && guideModal) {
    guideActionBtn.addEventListener('click', () => guideModal.classList.remove('open'));
  }

  if (dismissBtn && banner) {
    dismissBtn.addEventListener('click', () => {
      banner.style.display = 'none';
      sessionStorage.setItem('pwa_banner_dismissed', 'true');
    });
  }
});

