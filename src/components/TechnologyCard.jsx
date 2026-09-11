function TechnologyCard({ technology, isSelected, onAdd }) {
  return (
    <div className={`technology-card ${isSelected ? "selected-card" : ""}`}>

      <div className="card-top">
        <img
          src={technology.icon}
          alt={technology.name}
          className="technology-icon"
        />

        <span className="technology-badge">
          {technology.badge}
        </span>
      </div>

      <h2>{technology.name}</h2>

      <p className="technology-description">
        {technology.description}
      </p>

      <div className="technology-info">

        <span className="category">
          {technology.category}
        </span>

        <span className="difficulty">
          {technology.difficulty}
        </span>

        <span className="rating">
          <span>★</span> {technology.rating}
        </span>

      </div>

      <button
        className={`add-button ${isSelected ? "added" : ""}`}
        onClick={() => onAdd(technology)}
        disabled={isSelected}
      >
        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </div>
  );
}

export default TechnologyCard;