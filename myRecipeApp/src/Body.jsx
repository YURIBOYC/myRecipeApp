import React from "react";
export default function Main() {
  const [ingredients, setIngredients] = React.useState(["Potato"]);

  const ingEl = ingredients.map((item) => {
    return <li key={item}>{item}</li>;
  });

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => {
      return [...prevIngredients, newIngredient];
    });
  }

  return (
    <main className="main-div">
      <form className="ingredient-form" onSubmit={handleSubmit}>
        <input
          type="text"
          aria-label="Ingredient Box"
          placeholder="e.g. Tomato"
          name="ingredient"
        />
        <button>Add Ingredient</button>
      </form>
      <ul>{ingEl}</ul>
    </main>
  );
}
