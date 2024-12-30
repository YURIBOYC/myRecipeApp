import React from "react";
import Recipe from "./Recipe";
import IngredientsList from "./IngredientsList";
import getRecipeFromMistral from "./ai.js";
export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);

  const [recipe, setRecipe] = React.useState("");

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
    console.log(recipeMarkdown);
  }

  const recipeRef = React.useRef(null);

  React.useEffect(() => {
    if (recipe !== "" && recipeRef !== null) {
      // recipeRef.current.scrollIntoView({ behavior: "smooth" });
      const yCoord =
        recipeSection.current.getBoundingClientRect().top + window.scrollY;
      window.scroll({
        top: yCoord,
        behavior: "smooth",
      });
    }
  }, []);

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
          ref={recipeRef}
          ingredients={ingredients}
          getRecipe={getRecipe}
        />
      ) : null}
      {recipe && <Recipe recipe={recipe} />}
    </main>
  );
}
