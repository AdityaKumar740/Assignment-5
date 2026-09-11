import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import technologies from "./data/technologies.json";
import TechnologyCard from "./components/TechnologyCard";
import YourStack from "./components/YourStack";

function App() {
  const [stack, setStack] = useState([]);

  const handleAdd = (technology) => {
    const alreadyExists = stack.some((item) => item.id === technology.id);

    if (alreadyExists) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack((previousStack) => [...previousStack, technology]);
    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemove = (id) => {
    const removed = stack.find((technology) => technology.id === id);

    setStack((previousStack) =>
      previousStack.filter((technology) => technology.id !== id)
    );

    if (removed) {
      toast.info(`${removed.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    if (stack.length > 0) {
      toast.info("Your stack has been cleared.");
    }
    setStack([]);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#11182d]">
      <header className="sticky top-0 z-50 h-19 w-full border-b border-[#edf0f5] bg-white">
        <div className="relative mx-auto flex h-full max-w-6xl items-center justify-between">
          <button className="hidden h-6.25 w-6.25 flex-col justify-center gap-1 border-none bg-transparent">
            <span className="block h-0.5 w-5 bg-[#17213b]"></span>
            <span className="block h-0.5 w-5 bg-[#17213b]"></span>
            <span className="block h-0.5 w-5 bg-[#17213b]"></span>
          </button>

          <a href="#" className="brand flex items-center">
            <img className="block h-auto w-33" src="/src/assets/logo-text.png" alt="Dev Stack Logo" />
          </a>

          <nav className="ml-auto mr-61.25 flex items-center gap-7.5">
            <a href="#" className="text-sm font-normal text-[#df1680] transition hover:text-[#df1680]">Home</a>
            <a href="#technologies" className="text-sm font-normal text-[#34415d] transition hover:text-[#df1680]">Technologies</a>
            <a href="#projects" className="text-sm font-normal text-[#34415d] transition hover:text-[#df1680]">Projects</a>
            <a href="#about" className="text-sm font-normal text-[#34415d] transition hover:text-[#df1680]">About</a>
            <a href="#contact" className="text-sm font-normal text-[#34415d] transition hover:text-[#df1680]">Contact</a>
          </nav>

          <div className="auth-buttons absolute right-0 flex items-center gap-5">
            <button className="border-none bg-transparent text-sm text-[#17213b]">Sign In</button>
            <button className="h-10.25 rounded-full border-none bg-[#df1680] px-5.75 text-sm font-medium text-white transition hover:bg-[#c91070]">Sign Up</button>
          </div>
        </div>
      </header>

      <main>
        <section className="flex min-h-[calc(100vh-76px)] items-center bg-white">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-2 items-center gap-12.5">
            <div className="pb-5">
              <h1 className="max-w-137.5 text-5xl font-extrabold leading-none tracking-[-2.5px] text-[#10172d]">
                Build Your Ideal
                <span className="mt-1.25 block bg-linear-to-r from-[#ff591f] via-[#e52291] to-[#8b31d9] bg-clip-text text-transparent">
                  Development Stack
                </span>
              </h1>

              <p className="mt-6.75 max-w-140 text-[17px] leading-[1.65] text-[#52627e]">
                Explore frontend, backend, database, and tooling options,
                compare them side by side, and put together the stack that
                fits your next project.
              </p>

              <div className="mt-12.25 flex items-center gap-2.75">
                <button className="h-10.25 rounded-md border-none bg-linear-to-r from-[#ff681c] to-[#ed278c] px-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5">
                  Explore Technologies
                </button>

                <button className="h-10.25 w-41 rounded-md border border-[#dfe3ea] bg-white px-3.5 text-sm text-[#46536b] transition hover:border-[#c7cdd8]">
                  Learn More
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <img
                className="block h-auto w-107.5 max-w-full"
                src="/src/assets/banner-stack.png"
                alt="Development Stack"
              />
            </div>
          </div>
        </section>

        <section className="min-h-screen bg-white" id="technologies">
          <div className="mx-auto w-[min(1180px,calc(100%-40px))] px-0 pb-17.5 pt-5">
            <header className="technology-header">
              <h1 className="text-[34px] font-extrabold leading-[1.2] tracking-[-1px] text-[#11182c]">
                Explore the <span className="text-[#d43ba0]">Technologies</span>
              </h1>

              <p className="mt-2 text-[15px] text-[#71819d]">
                Pick one technology per category to build your ideal stack.
              </p>
            </header>

            <div className="mt-9.25 grid grid-cols-[minmax(0,1fr)_250px] gap-7 items-start">
              <section className="grid grid-cols-3 gap-4.25">
                {technologies.map((technology) => (
                  <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    isSelected={stack.some((item) => item.id === technology.id)}
                    onAdd={handleAdd}
                  />
                ))}
              </section>

              <YourStack
                stack={stack}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        </section>
      </main>

      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
}

export default App;


