# 🍳 RecipeJS - Your Functional Cooking Companion

A modern, responsive web application for browsing, searching, and managing recipes. Built with vanilla JavaScript using functional programming principles and the Module Pattern (IIFE).

---

## ✨ Features

### 🔍 **Search Functionality**
- Real-time search across recipe titles, ingredients, and descriptions
- Debounced input (300ms) for optimal performance
- Clear button to reset search instantly
- Responsive search bar in the header

### 🎯 **Filter Options**
- **By Difficulty**: Easy, Medium, Hard, or Show All
- **Quick Recipes**: Filter recipes under 30 minutes
- Active filter highlighting for better UX

### 📊 **Sort Options**
- Sort alphabetically (A-Z)
- Sort by cooking time (Fastest first)
- Default order

### ❤️ **Favorites Management**
- Save favorite recipes with localStorage
- One-click favorite toggle with heart icon
- Persistent storage across browser sessions
- View only favorited recipes with dedicated filter

### 📖 **Recipe Details**
- Expandable ingredient lists with checkmark indicators
- Expandable step-by-step cooking instructions
- Recipe metadata: cooking time, difficulty level
- Beautiful recipe cards with hover animations

### 📱 **Responsive Design**
- Mobile-first approach
- Adapts seamlessly to tablets and desktops
- Touch-friendly buttons and controls
- Optimized for all screen sizes

---

## 🛠️ Tech Stack

- **HTML5**: Semantic markup with proper structure
- **CSS3**: Modern styling with gradients, flexbox, and media queries
- **JavaScript (ES6+)**: Pure vanilla JS with no dependencies
- **LocalStorage API**: For persistent favorites storage

---

## 📁 Project Structure

```
my-first--1/
├── index.html          # Main HTML structure
├── App.js              # JavaScript application logic (623 lines)
├── style.css           # Complete styling (422 lines)
├── README.md           # Documentation
└── .git/               # Version control
```

---

## 🚀 How to Use

### 1. **Opening the App**
Simply open `index.html` in a web browser. The app will automatically load all 8 recipes.

### 2. **Searching**
- Type in the search bar at the top to find recipes by:
  - Recipe name
  - Ingredients
  - Description
- Click the "✕" button to clear your search

### 3. **Filtering**
- Click filter buttons to narrow recipes by difficulty level
- Use "Quick Recipes" to find meals under 30 minutes
- The active filter is highlighted in purple

### 4. **Sorting**
- **Name (A-Z)**: Alphabetical order
- **Time (Fastest First)**: By cooking duration
- **Default Order**: Original recipe sequence

### 5. **Adding Favorites**
- Click the heart icon (❤️ or 🤍) in the top-right corner of any recipe card
- Favorited recipes are saved automatically
- View only favorites with the dedicated filter button

### 6. **Viewing Recipe Details**
- Click "📋 Show Steps" to see cooking instructions
- Click "🥗 Show Ingredients" to see what you need
- Click again to hide and collapse sections

---

## 📋 Recipe Data

The app includes **8 diverse recipes**:

1. **Margherita Pasta** (Easy, 25 min)
2. **Vegetable Stir Fry** (Easy, 20 min)
3. **Chicken Curry** (Medium, 45 min)
4. **Paneer Butter Masala** (Medium, 50 min)
5. **Lasagna** (Hard, 90 min)
6. **Beef Bourguignon** (Hard, 120 min)
7. **Greek Salad** (Easy, 15 min)
8. **Mushroom Risotto** (Medium, 65 min)

Each recipe contains:
- Title and description
- Cooking time
- Difficulty level
- Complete ingredient list
- Step-by-step instructions

---

## 🏗️ Architecture

### **IIFE Pattern (Module Pattern)**
The entire application is wrapped in an Immediately Invoked Function Expression for:
- Private scope and data encapsulation
- Avoiding global namespace pollution
- Clean separation of concerns

### **Key Components**

#### **Private Methods**
```javascript
- renderSteps(steps)              // Format cooking steps
- createRecipeCard(recipe)        // Generate recipe HTML
- renderRecipes(recipesArray)     // Render all recipes
- filterByDifficulty()            // Filter by skill level
- filterByTime()                  // Filter by duration
- filterBySearch()                // Filter by search query
- filterFavorites()               // Filter favorited recipes
- sortByName()                    // Sort alphabetically
- sortByTime()                    // Sort by duration
- updateActiveButtons()           // Highlight active filters
- updateDisplay()                 // Re-render with current filters/sorts
```

#### **Private Event Handlers**
```javascript
- handleFilterClick()             // Filter button clicks
- handleSortClick()               // Sort button clicks
- handleToggleClick()             // Show/hide details
- handleSearchInput()             // Search with debounce
- handleClearSearch()             // Clear search input
- handleFavoriteClick()           // Toggle favorite status
```

#### **Public API**
```javascript
return {
    init: init,
    updateDisplay: updateDisplay
}
```

---

## 🎨 Design Highlights

### **Color Scheme**
- **Primary**: Purple gradient (#667eea → #764ba2)
- **Success**: Green (#d4edda)
- **Warning**: Yellow (#fff3cd)
- **Danger**: Red (#f8d7da)
- **Neutral**: Light gray backgrounds

### **Typography**
- Clean, modern Arial/Helvetica font
- Clear hierarchy with varied font sizes
- Accessible contrast ratios

### **Components**
- **Recipe Cards**: 300px width, rounded corners, shadow effects
- **Buttons**: Consistent styling with hover states
- **Inputs**: Focus states with visual feedback
- **Lists**: Checkmarks for ingredients, numbered steps

---

## 💾 LocalStorage

The app uses browser LocalStorage to save:
- **Key**: `recipeFavorites`
- **Value**: JSON array of favorited recipe IDs
- **Persistence**: Favorites persist across browser sessions

```javascript
// Data format
["1", "3", "7"]  // Array of favorite recipe IDs
```

---

## 🔧 JavaScript Features Used

- **ES6+ Syntax**: Arrow functions, template literals, const/let
- **Array Methods**: map(), filter(), find(), some(), join()
- **String Methods**: toLowerCase(), includes(), localeCompare()
- **Event Delegation**: Efficient event handling on containers
- **Debouncing**: Optimized search input performance
- **DOM Manipulation**: querySelector, classList, innerHTML

---

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
  - Single column layout
  - Full-width buttons
  - Optimized touch targets
  
- **Tablet/Desktop**: ≥ 768px
  - Multi-column grid
  - Flexible button groups
  - Expanded search area

---

## 🚀 Getting Started

1. Clone or download the repository
2. Open `index.html` in any modern web browser
3. Start exploring recipes!

**No installation or build process required** - pure vanilla JavaScript!

---

## 🌟 Key Code Insights

### **Search with Debounce**
```javascript
debounceTimer = setTimeout(() => {
    searchQuery = value;
    updateDisplay();
}, 300);
```

### **Event Delegation Pattern**
```javascript
recipeContainer.addEventListener('click', handleToggleClick);
// Handles all toggle button clicks efficiently
```

### **Functional Filter Composition**
```javascript
let filteredRecipes = recipes;
filteredRecipes = filterBySearch(filteredRecipes, searchQuery);
filteredRecipes = applyFilter(filteredRecipes, currentFilter);
const sortedRecipes = applySort(filteredRecipes, currentSort);
```

---

## 🎯 Best Practices Implemented

✅ **Modular Code**: Organized sections with clear comments  
✅ **DRY Principle**: Reusable helper functions  
✅ **Event Handling**: Efficient delegation and debouncing  
✅ **State Management**: Centralized state in private variables  
✅ **Responsive Design**: Mobile-first CSS approach  
✅ **Accessibility**: Semantic HTML and proper contrast  
✅ **Performance**: Minimal DOM manipulation, efficient queries  
✅ **User Experience**: Visual feedback and smooth animations  

---

## 📄 License

This project is open source and available for educational purposes.

---

## 🤝 Contributing

Feel free to fork, modify, and enhance this project! Some ideas:
- Add more recipes
- Implement recipe ratings
- Add cooking timer functionality
- Create grocery list from selected recipes
- Add recipe categories/tags
- Implement dietary filters (vegan, gluten-free, etc.)

---

**Happy Cooking! 👨‍🍳👩‍🍳**