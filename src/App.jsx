import { useState } from "react";
import technologies from "./data/technologies.json";
import TechnologyCard from "./components/TechnologyCard";
import YourStack from "./components/YourStack";
import "./App.css";

function App() {
  const [stack, setStack] = useState([]);

  const handleAdd = (technology) => {
    const alreadyExists = stack.some((item) => item.id === technology.id);

    if (alreadyExists) {
      alert(`${technology.name} is already in your stack!`);
      return;
    }

    setStack((previousStack) => [...previousStack, technology]);
  };

  const handleRemove = (id) => {
    setStack((previousStack) =>
      previousStack.filter((technology) => technology.id !== id)
    );
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <div className="app">
      <header className="navbar">
        <div className="nav-container">
          <button className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <a href="#" className="brand">
            <img src="/src/assets/logo-text.png" alt="Dev Stack Logo" />
          </a>

          <nav className="nav-links">
            <a href="#" className="active">Home</a>
            <a href="#technologies">Technologies</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="auth-buttons">
            <button className="sign-in">Sign In</button>
            <button className="sign-up">Sign Up</button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-container">
            <div className="hero-content">
              <h1>
                Build Your Ideal
                <span>Development Stack</span>
              </h1>

              <p>
                Explore frontend, backend, database, and tooling options,
                compare them side by side, and put together the stack that
                fits your next project.
              </p>

              <div className="hero-buttons">
                <button className="explore-btn">
                  Explore Technologies
                </button>

                <button className="learn-btn">
                  Learn More
                </button>
              </div>
            </div>

            <div className="hero-image">
              <img
                src="/src/assets/banner-stack.png"
                alt="Development Stack"
              />
            </div>
          </div>
        </section>

        <section className="technology-page" id="technologies">
          <div className="technology-container">
            <header className="technology-header">
              <h1>
                Explore the <span>Technologies</span>
              </h1>

              <p>
                Pick one technology per category to build your ideal stack.
              </p>
            </header>

            <div className="technology-layout">
              <section className="technology-grid">
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
    </div>
  );
}

export default App;


