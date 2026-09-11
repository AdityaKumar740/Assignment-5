function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="stack-panel">

      <h2>Your Stack</h2>

      <p className="stack-count">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} Technology${
              stack.length > 1 ? "ies" : ""
            } Selected`}
      </p>

      {stack.length === 0 ? (

        <div className="empty-stack">
          Your stack is empty.
        </div>

      ) : (

        <div className="selected-technologies">

          {stack.map((technology) => (

            <div
              className="selected-technology"
              key={technology.id}
            >

              <img
                src={technology.icon}
                alt={technology.name}
                className="small-icon"
              />

              <div className="selected-info">
                <strong>{technology.name}</strong>
                <span>{technology.category}</span>
              </div>

              <button
                className="remove-button"
                onClick={() => onRemove(technology.id)}
                aria-label={`Remove ${technology.name}`}
              >
                ×
              </button>

            </div>

          ))}

          <button
            className="remove-all"
            onClick={onRemoveAll}
          >
            Remove All
          </button>

        </div>

      )}

    </aside>
  );
}

export default YourStack;