import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logoText from "./assets/logo-text.png";
import bannerStack from "./assets/banner-stack.png";
import technologiesData from "./data/technologies.json";
import TechnologyCard from "./components/TechnologyCard";
import YourStack from "./components/YourStack";

function App() {
  const [stack, setStack] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadTechnologies = async () => {
      setIsLoading(true);

      try {
        await new Promise((resolve) => setTimeout(resolve, 250));

        if (isMounted) {
          setTechnologies(technologiesData);
        }
      } catch {
        toast.error("Unable to load technologies.");
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadTechnologies();

    return () => {
      isMounted = false;
    };
  }, []);

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
            <img className="block h-auto w-33" src={logoText} alt="Dev Stack Logo" />
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
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:gap-12.5 lg:px-0">
            <div className="pb-5 text-center md:text-left">
              <h1 className="max-w-137.5 text-4xl font-extrabold leading-none tracking-[-2.5px] text-[#10172d] md:text-5xl">
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

              <div className="mt-12.25 flex flex-wrap items-center justify-center gap-2.75 md:justify-start">
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
                className="block h-auto w-72 max-w-full md:w-107.5"
                src={bannerStack}
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

            <div className="mt-9.25 grid grid-cols-1 gap-7 items-start md:grid-cols-[minmax(0,1fr)_250px]">
              {isLoading ? (
                <section className="grid min-h-60 w-full grid-cols-1 gap-4.25 md:grid-cols-3">
                  <div className="md:col-span-3 flex min-h-60 items-center justify-center rounded-xl border border-[#e8edf3] bg-white shadow-sm">
                    <div className="flex items-center gap-3 text-[15px] font-semibold text-[#172036]">
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-[#df1680] border-t-transparent"></span>
                      <span>Loading technologies...</span>
                    </div>
                  </div>
                </section>
              ) : (
                <section className="grid grid-cols-1 gap-4.25 md:grid-cols-2 xl:grid-cols-3">
                  {technologies.map((technology) => (
                    <TechnologyCard
                      key={technology.id}
                      technology={technology}
                      isSelected={stack.some((item) => item.id === technology.id)}
                      onAdd={handleAdd}
                    />
                  ))}
                </section>
              )}

              <YourStack
                stack={stack}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
}

function Footer() {
  return (
    <>
      <footer className="hidden w-full border-t border-[#d8dce7] bg-white py-8 md:block">
        <div className="mx-auto max-w-300 px-8">
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-10">
            <div className="flex flex-col justify-start">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-linear-to-r from-[#8b5cf6] to-[#df1680] text-[14px] font-bold text-white shadow-sm">
                  DS
                </span>
                <span className="text-[30px] font-bold tracking-[-1px] text-[#111827]">
                  Dev Stack
                </span>
              </div>

              <p className="mt-6 max-w-105 text-[16px] leading-normal text-[#556073]">
                Curated tools, technologies, and resources for developers building modern software.
              </p>

              <div className="mt-7 flex items-center gap-6 text-[16px] font-semibold text-[#46536b]">
                <a href="#" className="transition hover:text-[#df1680]">GitHub</a>
                <span className="text-[#a0a8b8]">•</span>
                <a href="#" className="transition hover:text-[#df1680]">Twitter</a>
                <span className="text-[#a0a8b8]">•</span>
                <a href="#" className="transition hover:text-[#df1680]">LinkedIn</a>
              </div>
            </div>

            <div className="pt-2">
              <h3 className="mb-4 text-[12px] font-bold uppercase tracking-[0.08em] text-[#6b7387]">
                Product
              </h3>
              <ul className="space-y-3 text-[16px] text-[#576173]">
                <li><a className="transition hover:text-[#df1680]" href="#">Home</a></li>
                <li><a className="transition hover:text-[#df1680]" href="#technologies">Technologies</a></li>
                <li><a className="transition hover:text-[#df1680]" href="#projects">Projects</a></li>
              </ul>
            </div>

            <div className="pt-2">
              <h3 className="mb-4 text-[12px] font-bold uppercase tracking-[0.08em] text-[#6b7387]">
                Company
              </h3>
              <ul className="space-y-3 text-[16px] text-[#576173]">
                <li><a className="transition hover:text-[#df1680]" href="#about">About</a></li>
                <li><a className="transition hover:text-[#df1680]" href="#contact">Contact</a></li>
                <li><a className="transition hover:text-[#df1680]" href="#careers">Careers</a></li>
              </ul>
            </div>

            <div className="pt-2">
              <h3 className="mb-4 text-[12px] font-bold uppercase tracking-[0.08em] text-[#6b7387]">
                Legal
              </h3>
              <ul className="space-y-3 text-[16px] text-[#576173]">
                <li><a className="transition hover:text-[#df1680]" href="#privacy">Privacy Policy</a></li>
                <li><a className="transition hover:text-[#df1680]" href="#terms">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-[#d8dce7] pt-5">
            <span className="text-[14px] text-[#64728a]">© 2026 Dev Stack. All rights reserved.</span>
            <div className="flex gap-8 text-[14px] text-[#64728a]">
              <a className="transition hover:text-[#df1680]" href="#privacy">Privacy</a>
              <a className="transition hover:text-[#df1680]" href="#terms">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      <footer className="block w-full border-t border-[#d8dce7] bg-white py-8 md:hidden">
        <div className="mx-auto max-w-120 px-6">
          <div className="flex items-center justify-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-linear-to-r from-[#8b5cf6] to-[#df1680] text-[14px] font-bold text-white shadow-sm">
              DS
            </span>
            <span className="text-[30px] font-bold tracking-[-1px] text-[#111827]">
              Dev Stack
            </span>
          </div>

          <p className="mt-6 text-center text-[16px] leading-normal text-[#556073]">
            Curated tools, technologies, and resources for developers building modern software.
          </p>

          <div className="mt-6 flex items-center justify-center gap-6 text-[16px] font-semibold text-[#46536b]">
            <a href="#" className="transition hover:text-[#df1680]">GitHub</a>
            <span className="text-[#a0a8b8]">•</span>
            <a href="#" className="transition hover:text-[#df1680]">Twitter</a>
            <span className="text-[#a0a8b8]">•</span>
            <a href="#" className="transition hover:text-[#df1680]">LinkedIn</a>
          </div>

          <div className="mt-7 flex items-center justify-between border-t border-[#d8dce7] pt-5">
            <span className="text-[14px] text-[#64728a]">© 2026 Dev Stack. All rights reserved.</span>
            <div className="flex gap-6 text-[14px] text-[#64728a]">
              <a className="transition hover:text-[#df1680]" href="#privacy">Privacy</a>
              <a className="transition hover:text-[#df1680]" href="#terms">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;


