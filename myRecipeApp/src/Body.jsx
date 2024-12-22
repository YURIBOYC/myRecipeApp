export default function Body() {
  return (
    <main className="main-div">
      <form className="ingredient-form">
        <input
          type="text"
          aria-label="Ingredient Box"
          placeholder="e.g. Tomato"
        />
        <button>Add Ingredient</button>
      </form>
    </main>
  );
}
