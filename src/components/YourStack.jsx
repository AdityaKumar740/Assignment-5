function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="w-full rounded-xl border border-[#e8edf3] bg-white p-4 shadow-sm">

      <h2 className="text-[15px] font-bold text-[#172036]">Your Stack</h2>

      <p className="mt-1.5 text-[11px] text-[#a0aec2]">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} Technology${
              stack.length > 1 ? "ies" : ""
            } Selected`}
      </p>

      {stack.length === 0 ? (

        <div className="mt-3.5 flex h-15 items-center justify-center rounded-xl border border-dashed border-[#dce3eb] text-[10px] text-[#a2aec0]">
          Your stack is empty.
        </div>

      ) : (

        <div className="mt-3.25 flex flex-col gap-1.5">

          {stack.map((technology) => (

            <div
              className="flex min-h-11.25 items-center rounded-md border border-[#e2e7ef] px-2 py-1.5"
              key={technology.id}
            >

              <img
                src={technology.icon}
                alt={technology.name}
                className="h-6.75 w-6.75 shrink-0 object-contain"
              />

              <div className="ml-1.5 flex flex-col gap-0.5">
                <strong className="text-[10px] font-bold text-[#202a3e]">{technology.name}</strong>
                <span className="text-[7px] text-[#8795aa]">{technology.category}</span>
              </div>

              <button
                className="ml-auto border-none bg-transparent text-[23px] leading-none text-[#9aa8bc] hover:text-[#e14646]"
                onClick={() => onRemove(technology.id)}
                aria-label={`Remove ${technology.name}`}
              >
                ×
              </button>

            </div>

          ))}

          <button
            className="mt-3.5 h-7 w-full rounded-md border border-[#ffb8b8] bg-white text-[10px] font-semibold text-[#e33b32] hover:bg-[#fff6f6]"
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