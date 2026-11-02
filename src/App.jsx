import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Overview from "./pages/Overview.jsx";
import Challenges from "./pages/Challenges.jsx";
import Recognition from "./pages/Recognition.jsx";
import Learning from "./pages/Learning.jsx";
import Wellness from "./pages/Wellness.jsx";
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
  const [doneChallenges, setDoneChallenges] = useState([]); // list of ids
  const [doneCourses, setDoneCourses] = useState([]); // list of ids
  const [quizDone, setQuizDone] = useState(false);
  const [quizCorrect, setQuizCorrect] = useState(false);
  const [kudos, setKudos] = useState([]);
  const [posts, setPosts] = useState(startingPosts);
  const [wellnessLogs, setWellnessLogs] = useState([]);
  const [fitnessConnected, setFitnessConnected] = useState(false);
  const [pollAnswer, setPollAnswer] = useState("");
  const [teamJoined, setTeamJoined] = useState(false);
  const [teamThanked, setTeamThanked] = useState(false);
  const [teamProgress, setTeamProgress] = useState(14);

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

  function completeChallenge(challenge) {
    setDoneChallenges([...doneChallenges, challenge.id]);
    addPoints(challenge.points);
  }

  function completeCourse(course) {
    setDoneCourses([...doneCourses, course.id]);
    addPoints(course.points);
  }

  function finishQuiz(correct) {
    setQuizDone(true);
    setQuizCorrect(correct);
    addPoints(30);
  }

  function sendKudos(to, note) {
    setKudos([...kudos, { id: Date.now(), from: "Maya Lewis", to, note }]);
  }

  // Returns true if the reward was bought
  function redeemReward(cost) {
    if (points < cost) return false;
    setPoints(points - cost);
    return true;
  }

  function logWellness(activity, earned) {
    setWellnessLogs([...wellnessLogs, { activity, points: earned }]);
    addPoints(earned);
  }

  function answerPoll(answer) {
    setPollAnswer(answer);
    addPoints(25);
  }

  function addThankYou() {
    setTeamThanked(true);
    setTeamProgress(teamProgress + 1);
    addPoints(10);
  }

  function showPage() {
    if (page === "overview") {
      return (
        <Overview
          points={points}
          doneChallenges={doneChallenges}
          doneCourses={doneCourses}
          quizCorrect={quizCorrect}
          wellnessLogs={wellnessLogs}
          kudos={kudos}
          setPage={setPage}
        />
      );
    }
    if (page === "challenges") {
      return (
        <Challenges
          doneChallenges={doneChallenges}
          completeChallenge={completeChallenge}
          teamJoined={teamJoined}
          setTeamJoined={setTeamJoined}
          teamThanked={teamThanked}
          teamProgress={teamProgress}
          addThankYou={addThankYou}
        />
      );
    }
    if (page === "recognition") {
      return (
        <Recognition
          points={points}
          kudos={kudos}
          sendKudos={sendKudos}
          redeemReward={redeemReward}
        />
      );
    }
    if (page === "learning") {
      return (
        <Learning
          doneCourses={doneCourses}
          completeCourse={completeCourse}
          quizDone={quizDone}
          finishQuiz={finishQuiz}
        />
      );
    }
    if (page === "wellness") {
      return (
        <Wellness
          wellnessLogs={wellnessLogs}
          logWellness={logWellness}
          fitnessConnected={fitnessConnected}
          setFitnessConnected={setFitnessConnected}
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
        doneChallenges={doneChallenges.length}
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
