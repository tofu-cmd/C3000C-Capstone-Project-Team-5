import Panel from "../components/Panel.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import { challenges } from "../data.js";

function Challenges({ doneChallenges, completeChallenge, teamJoined, setTeamJoined, teamThanked, teamProgress, addThankYou }) {
  // Add up the points from the challenges we finished
  let pointsEarned = 0;
  for (const challenge of challenges) {
    if (doneChallenges.includes(challenge.id)) {
      pointsEarned = pointsEarned + challenge.points;
    }
  }

  function handleTeamButton() {
    if (teamJoined) {
      addThankYou();
    } else {
      setTeamJoined(true);
    }
  }

  let teamButtonText = "Join the team";
  if (teamThanked) {
    teamButtonText = "✔ Thank-you shared";
  } else if (teamJoined) {
    teamButtonText = "Log a thank-you · +10 pts";
  }

  return (
    <div className="stack">
      <div className="banner">
        <span className="emoji">🎯</span>
        <div className="grow">
          <strong>Choose a challenge that feels right for you.</strong>
          <small>Every small step counts. There is no need to do them all.</small>
        </div>
        <span className="tag">{doneChallenges.length} complete</span>
      </div>

      <h2>Just for you</h2>
      <div className="grid-3">
        {challenges.map(challenge => {
          const done = doneChallenges.includes(challenge.id);
          return (
            <article className="card" key={challenge.id}>
              <div className="row-between">
                <span className="emoji">{challenge.icon}</span>
                <span className="tag">{challenge.type}</span>
              </div>
              <h3>{challenge.title}</h3>
              <p>{challenge.detail}</p>
              <div className="row-between">
                <strong>+{challenge.points} points</strong>
                <button
                  className="button"
                  disabled={done}
                  onClick={() => completeChallenge(challenge)}
                >
                  {done ? "✔ Done" : "Complete"}
                </button>
              </div>
            </article>
          );
        })}
      </div>

      <h2>Better together</h2>
      <Panel title="The kind-word chain" note="People team · This week">
        <p>
          <strong>Share 20 thank-yous as a team.</strong> Every note helps someone feel seen.
        </p>
        <ProgressBar value={(teamProgress / 20) * 100} />
        <p className="note">{teamProgress} of 20</p>
        <button className="button" disabled={teamThanked} onClick={handleTeamButton}>
          {teamButtonText}
        </button>
      </Panel>

      <Panel title="Your challenge rhythm" note="Your activity stays private to this demo.">
        <div className="grid-3 center">
          <div>
            <strong className="big">{doneChallenges.length}</strong>
            <small>completed</small>
          </div>
          <div>
            <strong className="big">{challenges.length - doneChallenges.length}</strong>
            <small>still open</small>
          </div>
          <div>
            <strong className="big">{pointsEarned}</strong>
            <small>points earned</small>
          </div>
        </div>
      </Panel>
    </div>
  );
}

export default Challenges;
