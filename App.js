
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

renderRecipes(recipes);
