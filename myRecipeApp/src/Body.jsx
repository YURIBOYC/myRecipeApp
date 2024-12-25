import React from "react";
import Recipe from "./Recipe";
import IngredientsList from "./IngredientsList";
export default function Main() {
  const [ingredients, setIngredients] = React.useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);

  const [recipeShown, setRecipeShown] = React.useState(false);

  function toggleRecipeShown() {
    setRecipeShown((prevShown) => !prevShown);
  }

  function handleSubmit(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => {
      return [...prevIngredients, newIngredient];
    });
  }

  return (
    <main className="main-div">
      <form action={handleSubmit} className="ingredient-form">
        <input
          type="text"
          aria-label="Ingredient Box"
          placeholder="e.g. Tomato"
          name="ingredient"
        />
        <button>Add Ingredient</button>
      </form>
      {ingredients.length > 0 ? (
        <IngredientsList
          ingredients={ingredients}
          toggleRecipeShown={toggleRecipeShown}
        />
      ) : null}
      {recipeShown && <Recipe />}
    </main>
  );
}
