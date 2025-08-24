import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Portfolio from "./pages/Portfolio";
import NewYear from "./pages/NewYear";

function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  // контейнер для фона (App-home для лендинга, App-page для остальных)
  let containerClass = "App-page";
  if (isHome) {
    containerClass = "App-home";
  }

  // разметка для Home
  if (isHome) {
    return (
      <div className={containerClass}>
        <h1>Quality Assurance Expertise</h1>
        <p>Svetlana Fishchuk</p>
        <nav className="home-nav">
          <Link to="/about">About Me</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/newyear">Happy New Year</Link>
        </nav>

        <main className="App-content">
          {children}
        </main>
      </div>
    );
  }

  // разметка для внутренних страниц
  return (
    <div className={containerClass}>
      <header className="App-header">
        <h1>Quality Assurance Expertise</h1>
        <p>Svetlana Fishchuk</p>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/newyear">Happy New Year</Link>
        </nav>
      </header>

      <main className="App-content">
        {children}
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/newyear" element={<NewYear />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
