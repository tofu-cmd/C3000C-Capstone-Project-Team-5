import { pages } from "../data.js";

function Sidebar({ page, setPage, points, theme, toggleTheme }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <img src="/brand-mark.svg" alt="" width="36" height="36" />
        <span>Bloom</span>
      </div>

      <nav>
        {pages.map(item => (
          <button
            key={item.id}
            className={page === item.id ? "nav-button active" : "nav-button"}
            onClick={() => setPage(item.id)}
          >
            <span>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="points-card">
        <small>YOUR POINTS</small>
        <strong>{points.toLocaleString()}</strong>
      </div>

      <button className="theme-button" onClick={toggleTheme}>
        {theme === "dark" ? "☀️ Light mode" : "🌙 Dark mode"}
      </button>
      <p className="demo-label">Demo mode · sample data only</p>
    </aside>
  );
}

export default Sidebar;
