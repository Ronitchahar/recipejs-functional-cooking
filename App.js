// ============================================
// RECIPE APP - PART 3: EXPANDABLE CARDS
// Wrap entire app in IIFE for encapsulation
// ============================================

const RecipeApp = (() => {

    // ============================================
    // PRIVATE: DATA
    // ============================================
    const recipes = [
        {
            id: 1,
            title: "Margherita Pasta",
            time: 25,
            difficulty: "easy",
            description: "Simple Italian pasta made with tomato sauce, basil, and cheese.",
            category: "pasta",
            ingredients: [
                "400g pasta",
                "400g crushed tomatoes",
                "3 cloves garlic",
                "Fresh basil leaves",
                "200g mozzarella cheese",
                "Olive oil",
                "Salt and pepper"
            ],
            steps: [
                "Bring a large pot of salted water to boil",
                "Add pasta and cook according to package directions",
                {
                    text: "Prepare the sauce",
                    substeps: [
                        "Heat olive oil in a pan",
                        "Add minced garlic and sauté until fragrant",
                        "Add crushed tomatoes",
                        "Simmer for 10 minutes"
                    ]
                },
                "Drain pasta and add to sauce",
                "Top with fresh mozzarella and basil",
                "Serve immediately"
            ]
        },
        {
            id: 2,
            title: "Vegetable Stir Fry",
            time: 20,
            difficulty: "easy",
            description: "Quick and healthy stir-fried vegetables with light soy sauce.",
            category: "vegetarian",
            ingredients: [
                "2 cups mixed vegetables (bell peppers, broccoli, carrots)",
                "3 tablespoons soy sauce",
                "2 cloves garlic",
                "1 tablespoon ginger",
                "2 tablespoons vegetable oil",
                "1 teaspoon sesame oil",
                "Cooked rice for serving"
            ],
            steps: [
                "Heat vegetable oil in a wok or large pan",
                "Add garlic and ginger, stir for 30 seconds",
                "Add vegetables and stir-fry for 5-7 minutes",
                "Pour soy sauce and sesame oil",
                "Toss well and cook for another 2 minutes",
                "Serve over cooked rice"
            ]
        },
        {
            id: 3,
            title: "Chicken Curry",
            time: 45,
            difficulty: "medium",
            description: "Spicy chicken curry cooked with traditional Indian spices.",
            category: "curry",
            ingredients: [
                "500g chicken breast, cubed",
                "2 onions, sliced",
                "4 cloves garlic",
                "2 tablespoons ginger",
                "2 tablespoons curry powder",
                "400ml coconut milk",
                "2 tomatoes",
                "Cilantro for garnish",
                "Salt to taste"
            ],
            steps: [
                {
                    text: "Prepare ingredients",
                    substeps: [
                        "Cut chicken into 1-inch cubes",
                        "Slice onions",
                        "Mince garlic and ginger"
                    ]
                },
                "Heat oil in a large pot",
                "Sauté onions until golden",
                "Add garlic and ginger, cook for 1 minute",
                "Add curry powder and cook for 30 seconds",
                "Add chicken and cook until golden (5 minutes)",
                "Pour coconut milk and add chopped tomatoes",
                "Simmer for 25-30 minutes until chicken is cooked",
                "Garnish with cilantro and serve with rice"
            ]
        },
        {
            id: 4,
            title: "Paneer Butter Masala",
            time: 50,
            difficulty: "medium",
            description: "Creamy tomato-based curry with soft paneer cubes.",
            category: "curry",
            ingredients: [
                "400g paneer, cubed",
                "400g crushed tomatoes",
                "200ml heavy cream",
                "3 onions",
                "4 cloves garlic",
                "2 tablespoons ginger",
                "2 tablespoons butter",
                "1 tablespoon garam masala",
                "Fresh cilantro",
                "Salt to taste"
            ],
            steps: [
                "Melt butter in a large pan",
                "Add diced onions and cook until golden",
                "Add garlic and ginger paste, cook for 2 minutes",
                "Add crushed tomatoes and simmer for 15 minutes",
                {
                    text: "Create the curry base",
                    substeps: [
                        "Blend the tomato mixture until smooth",
                        "Return to pan",
                        "Add garam masala and salt"
                    ]
                },
                "Add paneer cubes gently",
                "Pour cream and simmer for 10 minutes",
                "Garnish with cilantro and serve hot"
            ]
        },
        {
            id: 5,
            title: "Lasagna",
            time: 90,
            difficulty: "hard",
            description: "Layered pasta baked with rich meat sauce and cheese.",
            category: "pasta",
            ingredients: [
                "1 box lasagna noodles",
                "500g ground beef",
                "600ml tomato sauce",
                "400g ricotta cheese",
                "200g mozzarella cheese",
                "100g parmesan cheese",
                "1 egg",
                "2 onions",
                "3 cloves garlic",
                "Salt and pepper"
            ],
            steps: [
                "Preheat oven to 190°C",
                {
                    text: "Prepare the meat sauce",
                    substeps: [
                        "Cook ground beef in a pan",
                        "Add diced onions and garlic",
                        "Add tomato sauce and simmer for 20 minutes",
                        "Season with salt and pepper"
                    ]
                },
                {
                    text: "Prepare the cheese mixture",
                    substeps: [
                        "Mix ricotta, egg, and parmesan",
                        "Add mozzarella and season"
                    ]
                },
                "Cook lasagna noodles according to package directions, drain and set aside",
                {
                    text: "Assemble the lasagna",
                    substeps: [
                        "Spread thin layer of meat sauce on bottom of baking dish",
                        "Layer noodles, then cheese mixture",
                        "Repeat layers, ending with meat sauce",
                        "Top with remaining mozzarella"
                    ]
                },
                "Bake for 30-35 minutes until bubbly",
                "Let rest for 10 minutes before serving"
            ]
        },
        {
            id: 6,
            title: "Beef Bourguignon",
            time: 120,
            difficulty: "hard",
            description: "Slow-cooked French beef stew prepared with red wine.",
            category: "stew",
            ingredients: [
                "1kg beef chuck, cubed",
                "750ml red wine",
                "400ml beef broth",
                "300g pearl onions",
                "250g mushrooms",
                "4 carrots, cut in chunks",
                "4 cloves garlic",
                "2 tablespoons tomato paste",
                "Thyme, bay leaf",
                "Olive oil, salt and pepper"
            ],
            steps: [
                "Preheat oven to 160°C",
                {
                    text: "Sear the beef",
                    substeps: [
                        "Heat olive oil in a large pot",
                        "Brown beef in batches on all sides",
                        "Remove and set aside"
                    ]
                },
                "Sauté pearl onions, carrots, and garlic in the pot",
                "Add tomato paste and cook for 2 minutes",
                "Deglaze with red wine, scraping up browned bits",
                "Add beef broth, herbs, and return beef to pot",
                {
                    text: "Cook in oven",
                    substeps: [
                        "Cover and place in oven",
                        "Cook for 2.5-3 hours until beef is tender",
                        "Add mushrooms during last 30 minutes"
                    ]
                },
                "Adjust seasoning and serve"
            ]
        },
        {
            id: 7,
            title: "Greek Salad",
            time: 15,
            difficulty: "easy",
            description: "Fresh salad made with cucumber, tomato, olives, and feta.",
            category: "salad",
            ingredients: [
                "2 large tomatoes",
                "1 cucumber",
                "1 red onion",
                "150g black olives",
                "200g feta cheese",
                "3 tablespoons olive oil",
                "1 tablespoon red wine vinegar",
                "Oregano",
                "Salt and pepper"
            ],
            steps: [
                "Chop tomatoes into chunks",
                "Dice cucumber",
                "Thinly slice red onion",
                "Crumble feta cheese",
                {
                    text: "Make the dressing",
                    substeps: [
                        "Mix olive oil and red wine vinegar",
                        "Add oregano, salt, and pepper",
                        "Whisk well"
                    ]
                },
                "Combine all vegetables in a bowl",
                "Add olives and feta",
                "Drizzle with dressing and toss gently",
                "Serve immediately"
            ]
        },
        {
            id: 8,
            title: "Mushroom Risotto",
            time: 65,
            difficulty: "medium",
            description: "Creamy Italian rice dish slowly cooked with mushrooms.",
            category: "rice",
            ingredients: [
                "300g arborio rice",
                "300g mushrooms, sliced",
                "1 onion",
                "4 cloves garlic",
                "1L vegetable broth",
                "200ml white wine",
                "100g parmesan cheese",
                "50g butter",
                "Olive oil",
                "Fresh parsley",
                "Salt and pepper"
            ],
            steps: [
                "Heat vegetable broth in a separate pot (keep warm)",
                "Heat olive oil in a large pan",
                "Sauté mushrooms until golden, set aside",
                {
                    text: "Cook the risotto base",
                    substeps: [
                        "Add diced onion and garlic to pan",
                        "Cook until soft",
                        "Add arborio rice and stir for 1 minute"
                    ]
                },
                "Deglaze with white wine",
                {
                    text: "Add broth gradually",
                    substeps: [
                        "Add broth one ladle at a time",
                        "Stir frequently for 18-20 minutes",
                        "Rice should be creamy but still have bite"
                    ]
                },
                "Return mushrooms to pan",
                "Stir in butter and grated parmesan",
                "Season with salt and pepper",
                "Garnish with parsley and serve immediately"
            ]
        }
    ];

    // ============================================
    // PRIVATE: STATE
    // ============================================
    let currentFilter = 'all';
    let currentSort = 'none';

    // ============================================
    // PRIVATE: DOM REFERENCES
    // ============================================
    const recipeContainer = document.querySelector("#recipe-container");
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sortButtons = document.querySelectorAll('.sort-btn');

    // ============================================
    // PRIVATE: HELPER FUNCTIONS - RECURSION
    // ============================================

    // Recursive function to render steps (handles nesting)
    const renderSteps = (steps, level = 0) => {
        // Determine the CSS class based on nesting level
        const listClass = level === 0 ? 'steps-list' : 'substeps-list';
        
        let html = `<ol class="${listClass}">`;
        
        steps.forEach(step => {
            // Check if step is a string or object
            if (typeof step === 'string') {
                // Simple step - just add as list item
                html += `<li>${step}</li>`;
            } else {
                // Nested step - has text and substeps
                html += `<li>`;
                html += step.text;  // Main step text
                
                // Recursively call renderSteps for substeps
                if (step.substeps && step.substeps.length > 0) {
                    // RECURSIVE CALL - this is the key!
                    html += renderSteps(step.substeps, level + 1);
                }
                
                html += `</li>`;
            }
        });
        
        html += `</ol>`;
        return html;
    };

    // Create complete steps HTML for a recipe
    const createStepsHTML = (steps) => {
        if (!steps || steps.length === 0) {
            return '<p>No steps available</p>';
        }
        
        return renderSteps(steps);
    };

    // ============================================
    // PRIVATE: CARD GENERATION
    // ============================================

    const createRecipeCard = (recipe) => {
        return `
            <div class="recipe-card" data-id="${recipe.id}">
                <h3>${recipe.title}</h3>
                <div class="recipe-meta">
                    <span>⏱️ ${recipe.time} min</span>
                    <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
                </div>
                <p>${recipe.description}</p>
                
                <!-- Toggle Buttons -->
                <div class="card-actions">
                    <button class="toggle-btn" data-recipe-id="${recipe.id}" data-toggle="steps">
                        📋 Show Steps
                    </button>
                    <button class="toggle-btn" data-recipe-id="${recipe.id}" data-toggle="ingredients">
                        🥗 Show Ingredients
                    </button>
                </div>
                
                <!-- Ingredients Section (hidden by default) -->
                <div class="ingredients-container" data-recipe-id="${recipe.id}">
                    <h4>Ingredients:</h4>
                    <ul>
                        ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                    </ul>
                </div>
                
                <!-- Steps Section (hidden by default) -->
                <div class="steps-container" data-recipe-id="${recipe.id}">
                    <h4>Cooking Steps:</h4>
                    ${createStepsHTML(recipe.steps)}
                </div>
            </div>
        `;
    };

    const renderRecipes = (recipesArray) => {
        const recipesHTML = recipesArray
            .map(recipe => createRecipeCard(recipe))
            .join("");

        recipeContainer.innerHTML = recipesHTML;
    };

    // ============================================
    // PRIVATE: FILTER FUNCTIONS
    // ============================================

    const filterByDifficulty = (recipes, difficulty) => {
        return recipes.filter(recipe => recipe.difficulty === difficulty);
    };

    const filterByTime = (recipes, maxTime) => {
        return recipes.filter(recipe => recipe.time <= maxTime);
    };

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
                return recipes;
        }
    };

    // ============================================
    // PRIVATE: SORT FUNCTIONS
    // ============================================

    const sortByName = (recipes) => {
        return [...recipes].sort((a, b) => a.title.localeCompare(b.title));
    };

    const sortByTime = (recipes) => {
        return [...recipes].sort((a, b) => a.time - b.time);
    };

    const applySort = (recipes, sortType) => {
        switch(sortType) {
            case 'name':
                return sortByName(recipes);
            case 'time':
                return sortByTime(recipes);
            case 'none':
            default:
                return recipes;
        }
    };

    // ============================================
    // PRIVATE: UI HELPERS
    // ============================================

    const updateActiveButtons = () => {
        filterButtons.forEach(btn => {
            if (btn.dataset.filter === currentFilter) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        sortButtons.forEach(btn => {
            if (btn.dataset.sort === currentSort) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    };

    const updateDisplay = () => {
        const filteredRecipes = applyFilter(recipes, currentFilter);
        const sortedRecipes = applySort(filteredRecipes, currentSort);
        renderRecipes(sortedRecipes);
        updateActiveButtons();
    };

    // ============================================
    // PRIVATE: EVENT HANDLERS
    // ============================================

    const handleFilterClick = (event) => {
        currentFilter = event.target.dataset.filter;
        updateActiveButtons();
        updateDisplay();
    };

    const handleSortClick = (event) => {
        currentSort = event.target.dataset.sort;
        updateActiveButtons();
        updateDisplay();
    };

    // Handle toggle button clicks using event delegation
    const handleToggleClick = (event) => {
        // Check if clicked element is a toggle button
        if (!event.target.classList.contains('toggle-btn')) {
            return;  // Not a toggle button, ignore
        }
        
        const button = event.target;
        const recipeId = button.dataset.recipeId;
        const toggleType = button.dataset.toggle;  // "steps" or "ingredients"
        
        // Find the corresponding container
        const containerClass = toggleType === 'steps' ? 'steps-container' : 'ingredients-container';
        const container = document.querySelector(`.${containerClass}[data-recipe-id="${recipeId}"]`);
        
        // Toggle visibility
        if (container) {
            container.classList.toggle('visible');
            
            // Update button text
            const isVisible = container.classList.contains('visible');
            if (toggleType === 'steps') {
                button.textContent = isVisible ? '📋 Hide Steps' : '📋 Show Steps';
            } else {
                button.textContent = isVisible ? '🥗 Hide Ingredients' : '🥗 Show Ingredients';
            }
        }
    };

    // ============================================
    // PRIVATE: EVENT LISTENER SETUP
    // ============================================

    const setupEventListeners = () => {
        // Filter buttons
        filterButtons.forEach(btn => {
            btn.addEventListener('click', handleFilterClick);
        });
        
        // Sort buttons
        sortButtons.forEach(btn => {
            btn.addEventListener('click', handleSortClick);
        });
        
        // Event delegation for toggle buttons
        recipeContainer.addEventListener('click', handleToggleClick);
        
        console.log('Event listeners attached!');
    };

    // ============================================
    // PRIVATE: INITIALIZATION
    // ============================================

    const init = () => {
        console.log('RecipeApp initializing...');
        setupEventListeners();
        updateDisplay();
        console.log('RecipeApp ready!');
    };

    // ============================================
    // PUBLIC API
    // ============================================

    return {
        init: init,
        updateDisplay: updateDisplay
    };

})();

// ============================================
// START THE APP
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    RecipeApp.init();
});