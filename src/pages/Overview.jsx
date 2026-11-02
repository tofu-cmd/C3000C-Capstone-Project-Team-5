import { useState } from "react";
import Panel from "../components/Panel.jsx";
import { people, weekBars, getInitials } from "../data.js";

function Overview({ points, setPage }) {
  const [filter, setFilter] = useState("Everyone");

  // Build the leaderboard, using our live points for Maya
  const board = people
    .map(person =>
      person.name === "Maya Lewis" ? { ...person, points } : person
    )
    .filter(person => filter === "Everyone" || person.team === filter)
    .sort((a, b) => b.points - a.points);

  return (
    <div className="stack">
      <div className="grid-2">
        <Panel title="Your week at a glance" note="A little progress adds up.">
          <div className="week-chart">
            {weekBars.map((bar, index) => (
              <div className="week-column" key={index}>
                <div
                  className={index === 3 ? "week-bar highlight" : "week-bar"}
                  style={{ height: bar.height + "%" }}
                ></div>
                <span>{bar.day}</span>
              </div>
            ))}
          </div>
          <p>
            <strong>+180 points</strong> this week ↗ 12%
          </p>
        </Panel>

        <Panel title="Your next steps" note="Small actions, meaningful impact.">
          <div className="list-row">
            <span className="emoji">💬</span>
            <div className="grow">
              <strong>Share your thoughts in the pulse poll</strong>
              <small>Feedback · 25 points</small>
            </div>
            <button className="small-button" onClick={() => setPage("hr")}>
              →
            </button>
          </div>
          <div className="list-row">
            <span className="emoji">🎉</span>
            <div className="grow">
              <strong>Celebrate a teammate in the feed</strong>
              <small>Team feed</small>
            </div>
            <button className="small-button" onClick={() => setPage("feed")}>
              →
            </button>
          </div>
        </Panel>
      </div>

      <Panel
        title="A little friendly inspiration"
        note="Celebrate progress, not just the finish line."
      >
        <div className="filters">
          {["Everyone", "Product", "People"].map(team => (
            <button
              key={team}
              className={filter === team ? "pill selected" : "pill"}
              onClick={() => setFilter(team)}
            >
              {team}
            </button>
          ))}
        </div>
        {board.map((person, index) => (
          <div className="list-row" key={person.name}>
            <span className="rank">{index + 1}</span>
            <span className="avatar">{getInitials(person.name)}</span>
            <div className="grow">
              <strong>
                {person.name}
                {person.name === "Maya Lewis" && (
                  <span className="tag">you</span>
                )}
              </strong>
              <small>{person.team} team</small>
            </div>
            <strong>{person.points.toLocaleString()} pts</strong>
          </div>
        ))}
        <p className="note">
          A little inspiration, not a measure of anyone's worth.
        </p>
      </Panel>
    </div>
  );
}

export default Overview;
