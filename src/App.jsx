import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Overview from "./pages/Overview.jsx";
import TeamFeed from "./pages/TeamFeed.jsx";
import HrHub from "./pages/HrHub.jsx";
import Insights from "./pages/Insights.jsx";
import Login from "./pages/Login.jsx";
import UserMenu from "./components/UserMenu.jsx";
import Register from "./pages/Registration.jsx";
import { headings, startingPosts } from "./data.js";

function App() {
  // Which page is showing
  const [page, setPage] = useState("overview");

  // Are we logged in? (remembered in the browser)
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") !== "no"
  );

  // When logged out: show the register screen instead of login?
  const [showRegister, setShowRegister] = useState(false);

  // Light or dark theme (remembered in the browser)
  const [theme, setTheme] = useState(
    document.documentElement.dataset.theme === "dark" ? "dark" : "light"
  );

  // Everything the user can earn or do. It lives here in App so that
  // every page can read it and the sidebar always shows the right points.
  const [points, setPoints] = useState(1420);
  const [posts, setPosts] = useState(startingPosts);
  const [pollAnswer, setPollAnswer] = useState("");

  // Runs whenever the theme changes
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  function login() {
    setLoggedIn(true);
    localStorage.setItem("loggedIn", "yes");
  }

  function logout() {
    setLoggedIn(false);
    setShowRegister(false);
    setPage("overview");
    localStorage.setItem("loggedIn", "no");
  }

  function addPoints(amount) {
    setPoints(points + amount);
  }

  function answerPoll(answer) {
    setPollAnswer(answer);
    addPoints(25);
  }

  function showPage() {
    if (page === "overview") {
      return (
        <Overview
          points={points}
          setPage={setPage}
        />
      );
    }
    if (page === "feed") {
      return <TeamFeed posts={posts} setPosts={setPosts} />;
    }
    if (page === "hr") {
      return <HrHub pollAnswer={pollAnswer} answerPoll={answerPoll} />;
    }
    return <Insights />;
  }

  if (!loggedIn) {
    if (showRegister) {
      return (
        <Register
          onRegister={login}
          onShowLogin={() => setShowRegister(false)}
        />
      );
    }
    return (
      <Login onLogin={login} onShowRegister={() => setShowRegister(true)} />
    );
  }

  return (
    <div className="app">
      <Sidebar
        page={page}
        setPage={setPage}
        points={points}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main className="main">
        <header className="page-heading">
          <div>
            <p>{headings[page].subtitle}</p>
            <h1>{headings[page].title}</h1>
          </div>
          <UserMenu name="Maya Lewis" onLogout={logout} />
        </header>
        {showPage()}
        <footer className="footer">
          Bloom · a little progress, every day. Demo data resets when you
          refresh the page.
        </footer>
      </main>
    </div>
  );
}

export default App;
