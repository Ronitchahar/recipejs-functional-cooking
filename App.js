
const recipes = [
  {
    id: 1,
    title: "Margherita Pasta",
    time: 25,
    difficulty: "easy",
    description: "Simple Italian pasta made with tomato sauce, basil, and cheese.",
    category: "pasta"
  },
  {
    id: 2,
    title: "Vegetable Stir Fry",
    time: 20,
    difficulty: "easy",
    description: "Quick and healthy stir-fried vegetables with light soy sauce.",
    category: "vegetarian"
  },
  {
    id: 3,
    title: "Chicken Curry",
    time: 45,
    difficulty: "medium",
    description: "Spicy chicken curry cooked with traditional Indian spices.",
    category: "curry"
  },
  {
    id: 4,
    title: "Paneer Butter Masala",
    time: 50,
    difficulty: "medium",
    description: "Creamy tomato-based curry with soft paneer cubes.",
    category: "curry"
  },
  {
    id: 5,
    title: "Lasagna",
    time: 90,
    difficulty: "hard",
    description: "Layered pasta baked with rich meat sauce and cheese.",
    category: "pasta"
  },
  {
    id: 6,
    title: "Beef Bourguignon",
    time: 120,
    difficulty: "hard",
    description: "Slow-cooked French beef stew prepared with red wine.",
    category: "stew"
  },
  {
    id: 7,
    title: "Greek Salad",
    time: 15,
    difficulty: "easy",
    description: "Fresh salad made with cucumber, tomato, olives, and feta.",
    category: "salad"
  },
  {
    id: 8,
    title: "Mushroom Risotto",
    time: 65,
    difficulty: "medium",
    description: "Creamy Italian rice dish slowly cooked with mushrooms.",
    category: "rice"
  }
];

const recipeContainer = document.querySelector("#recipe-container");

const createRecipeCard = (recipe) => {
  return `
    <div class="recipe-card" data-id="${recipe.id}">
      <h3>${recipe.title}</h3>
      <div class="recipe-meta">
        <span>⏱️ ${recipe.time} min</span>
        <span class="difficulty ${recipe.difficulty}">
          ${recipe.difficulty}
        </span>
      </div>
      <p>${recipe.description}</p>
    </div>
  `;
};

const renderRecipes = (recipesArray) => {
  const recipesHTML = recipesArray
    .map(recipe => createRecipeCard(recipe))
    .join("");

  recipeContainer.innerHTML = recipesHTML;
};
let currentFilter = 'all';
let currentSort = 'none';

const filterButtons = document.querySelectorAll('.filter-btn');
const sortButtons = document.querySelectorAll('.sort-btn');
// ============================================
// PURE FILTER FUNCTIONS
// ============================================
// These functions don't modify the original array
// They return a NEW filtered array

// Filter recipes by difficulty level
const filterByDifficulty = (recipes, difficulty) => {
    return recipes.filter(recipe => recipe.difficulty === difficulty);
};

// Filter recipes by maximum cooking time
const filterByTime = (recipes, maxTime) => {
    return recipes.filter(recipe => recipe.time <= maxTime);
};

// Apply the current filter
const applyFilter = (recipes, filterType) => {
    switch(filterType) {
        case 'easy':
            return filterByDifficulty(recipes, 'easy');
        case 'medium':
            return filterByDifficulty(recipes, 'medium');
        case 'hard':
            return filterByDifficulty(recipes, 'hard');
        case 'quick':
            return filterByTime(recipes, 30);
        case 'all':
        default:
            return recipes;  // Return all recipes (no filter)
    }
};
// ============================================
// PURE SORT FUNCTIONS
// ============================================
// sort() mutates the original array, so we create a copy first

// Sort recipes by name (A-Z)
const sortByName = (recipes) => {
    // Create a copy with spread operator, then sort
    return [...recipes].sort((a, b) => a.title.localeCompare(b.title));
};

// Sort recipes by cooking time (fastest first)
const sortByTime = (recipes) => {
    // Create a copy with spread operator, then sort
    return [...recipes].sort((a, b) => a.time - b.time);
};

// Apply the current sort
const applySort = (recipes, sortType) => {
    switch(sortType) {
        case 'name':
            return sortByName(recipes);
        case 'time':
            return sortByTime(recipes);
        case 'none':
        default:
            return recipes;  // Return as-is (no sorting)
    }
};
// ============================================
// UI HELPER FUNCTIONS
// ============================================

// Update which button looks "active"
const updateActiveButtons = () => {
    // Update filter buttons
    filterButtons.forEach(btn => {
        const filterType = btn.dataset.filter;
        if (filterType === currentFilter) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Update sort buttons
    sortButtons.forEach(btn => {
        const sortType = btn.dataset.sort;
        if (sortType === currentSort) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
};
// ============================================
// EVENT HANDLERS
// ============================================

// Handle filter button clicks
const handleFilterClick = (event) => {
    const filterType = event.target.dataset.filter;
    
    // Update state
    currentFilter = filterType;
    
    // Update UI
    updateActiveButtons();
    updateDisplay();
};

// Handle sort button clicks
const handleSortClick = (event) => {
    const sortType = event.target.dataset.sort;
    
    // Update state
    currentSort = sortType;
    
    // Update UI
    updateActiveButtons();
    updateDisplay();
};
// ============================================
// EVENT LISTENER SETUP
// ============================================

const setupEventListeners = () => {
    // Attach click handlers to all filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilterClick);
    });
    
    // Attach click handlers to all sort buttons
    sortButtons.forEach(btn => {
        btn.addEventListener('click', handleSortClick);
    });
    
    console.log('Event listeners attached!');
};

renderRecipes(recipes);
