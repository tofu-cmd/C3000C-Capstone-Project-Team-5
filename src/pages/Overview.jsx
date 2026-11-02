import { useState } from "react";
import Panel from "../components/Panel.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import StatCard from "../components/StatCard.jsx";
import { challenges, people, rewards, weekBars, getInitials } from "../data.js";

function Overview({
  points,
  doneChallenges,
  doneCourses,
  quizCorrect,
  wellnessLogs,
  kudos,
  setPage,
}) {
  const [filter, setFilter] = useState("Everyone");

  const rewardGoal = 1800;
  const pending = challenges.length - doneChallenges.length;
  const badges = 3 + doneCourses.length + (quizCorrect ? 1 : 0);

  // Build the leaderboard: use our live points for Maya, add 25 per kudos received
  const board = people
    .map(person => {
      const received = kudos.filter(k => k.to === person.name).length;
      const base = person.name === "Maya Lewis" ? points : person.points;
      return { ...person, points: base + received * 25 };
    })
    .filter(person => filter === "Everyone" || person.team === filter)
    .sort((a, b) => b.points - a.points);

  return (
    <div className="stack">
      <div className="grid-4">
        <StatCard
          icon="✨"
          title="Your points"
          value={points.toLocaleString()}
          detail="+180 this week"
        />
        <StatCard
          icon="🏅"
          title="Badges earned"
          value={badges}
          detail="Your collection is growing"
        />
        <StatCard
          icon="🎯"
          title="Challenges done"
          value={doneChallenges.length}
          detail={pending + " ready to try"}
        />
        <StatCard
          icon="💚"
          title="Wellness streak"
          value={wellnessLogs.length + 4 + " days"}
          detail="A lovely little rhythm"
        />
      </div>

      <div className="grid-2">
        <Panel title="Your next reward" note="Keep going at your own pace.">
          <p>
            <strong>🎁 Extra half-day leave</strong> —{" "}
            {Math.max(0, rewardGoal - points)} points to go
          </p>
          <div className="row-between">
            <span>{points.toLocaleString()} points</span>
            <span>{rewardGoal.toLocaleString()} points</span>
          </div>
          <ProgressBar value={(points / rewardGoal) * 100} />
          <p className="note">Other rewards to look at:</p>
          {rewards.slice(0, 2).map(reward => (
            <div className="list-row" key={reward.id}>
              <span className="emoji">{reward.icon}</span>
              <div className="grow">
                <strong>{reward.title}</strong>
                <small>{reward.points} points</small>
              </div>
              <span className="tag">
                {points >= reward.points ? "Ready" : "Soon"}
              </span>
            </div>
          ))}
          <button
            className="link-button"
            onClick={() => setPage("recognition")}
          >
            Explore all rewards →
          </button>
        </Panel>

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
      </div>

      <div className="grid-2 top">
        <div className="stack">
          <Panel
            title="Your next steps"
            note="Small actions, meaningful impact."
          >
            <div className="list-row">
              <span className="emoji">📖</span>
              <div className="grow">
                <strong>Try a 12-minute learning module</strong>
                <small>Learning · 40 points</small>
              </div>
              <button
                className="small-button"
                onClick={() => setPage("learning")}
              >
                →
              </button>
            </div>
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
              <span className="emoji">👟</span>
              <div className="grow">
                <strong>Take a mindful moment</strong>
                <small>Wellness · 20 points</small>
              </div>
              <button
                className="small-button"
                onClick={() => setPage("wellness")}
              >
                →
              </button>
            </div>
          </Panel>

          <Panel
            title="A few things you've earned"
            note="Your effort, celebrated."
          >
            <div className="list-row">
              <span className="emoji">🌿</span>
              <div className="grow">
                <strong>Team Player</strong>
                <small>For showing up for others</small>
              </div>
              <span>✅</span>
            </div>
            <div className="list-row">
              <span className="emoji">📚</span>
              <div className="grow">
                <strong>Learning Champion</strong>
                <small>For your curious spirit</small>
              </div>
              <span>✅</span>
            </div>
            <div className="list-row">
              <span className="emoji">🏆</span>
              <div className="grow">
                <strong>Top Performer</strong>
                <small>For a goal reached together</small>
              </div>
              <span>✅</span>
            </div>
            {doneCourses.length > 0 && (
              <div className="list-row">
                <span className="emoji">⭐</span>
                <div className="grow">
                  <strong>New skill unlocked</strong>
                  <small>Training milestone reached</small>
                </div>
                <span>✅</span>
              </div>
            )}
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
    </div>
  );
}

export default Overview;
