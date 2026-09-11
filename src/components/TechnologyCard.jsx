function TechnologyCard({ technology, isSelected, onAdd }) {
  return (
    <div className={`min-h-63 flex flex-col rounded-lg border border-[#e8edf3] bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-lg ${isSelected ? "border-[#d43ba0]" : ""}`}>

      <div className="flex items-center justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-7.5 w-7.5 object-contain"
        />

        <span className="rounded-full bg-[#eff8ff] px-2.75 py-1 text-[11px] text-[#1689d5]">
          {technology.badge}
        </span>
      </div>

      <h2 className="mt-3 text-[17px] font-bold text-[#121b31]">{technology.name}</h2>

      <p className="mt-2 min-h-14 text-[12px] leading-5 text-[#7485a1]">
        {technology.description}
      </p>

      <div className="mt-auto flex items-center gap-2 border-t border-[#edf0f4] pt-2 text-[10px] text-[#63738d]">

        <span className="rounded-sm bg-[#f5f7fa] px-1.5 py-1 whitespace-nowrap">
          {technology.category}
        </span>

        <span className="ml-auto whitespace-nowrap">
          {technology.difficulty}
        </span>

        <span className="whitespace-nowrap">
          <span className="text-[12px] text-[#ffb300]">★</span> {technology.rating}
        </span>

      </div>

      <button
        className={`mt-3 h-8 w-full rounded-md border-none bg-[#080e1d] text-[11px] text-white transition duration-200 hover:bg-[#151d31] ${isSelected ? "cursor-not-allowed bg-[#596174]" : ""}`}
        onClick={() => onAdd(technology)}
        disabled={isSelected}
      >
        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </div>
  );
}

export default TechnologyCard;