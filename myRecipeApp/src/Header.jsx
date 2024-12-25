import chef from "/images/assets/chef.png";

export default function Header() {
  return (
    <header className="recipe-header">
      <nav className="recipe-nav">
        <img src={chef} className="chef-logo" />
        <p className="chef-heading">Abishek's Recipe</p>
      </nav>
    </header>
  );
}
