import { useState } from "react";
import Panel from "../components/Panel.jsx";
import { wellnessOptions } from "../data.js";

function Wellness({ wellnessLogs, logWellness, fitnessConnected, setFitnessConnected }) {
  const [activity, setActivity] = useState("Mindfulness break");

  // Find the option the user picked so we know how many points it is worth
  const selected = wellnessOptions.find(option => option.name === activity);

  const ideas = [
    { icon: "🧠", title: "Mindful minute", detail: "Try five minutes of breathing or quiet.", activity: "Mindfulness break", points: 20 },
    { icon: "👟", title: "Steps in the sunshine", detail: "Take a short walk or stretch your legs.", activity: "Fresh-air walk", points: 30 },
    { icon: "🧘", title: "Find your own reset", detail: "Yoga, a stretch, or a pause that works for you.", activity: "Yoga or stretching", points: 15 },
  ];

  return (
    <div className="stack">
      <div className="banner">
        <span className="emoji">💚</span>
        <div className="grow">
          <small>A GENTLE REMINDER</small>
          <strong>Your wellbeing matters, too.</strong>
          <small>Take part in ways that feel good for you. Your activity is private in this demo.</small>
        </div>
        <div>
          <strong className="big">{wellnessLogs.length + 4}</strong>
          <small>day rhythm</small>
        </div>
      </div>

      <div className="grid-2">
        <Panel title="Log a little moment" note="Any small reset can count.">
          <div className="form">
            <label>
              What did you make time for?
              <select value={activity} onChange={event => setActivity(event.target.value)}>
                {wellnessOptions.map(option => (
                  <option key={option.name} value={option.name}>
                    {option.name}
                  </option>
                ))}
              </select>
            </label>
            <button className="button" onClick={() => logWellness(activity, selected.points)}>
              Log activity · +{selected.points} points
            </button>
            <small>This is a self-reported demo log, not medical or fitness data.</small>
          </div>
        </Panel>

        <Panel title="Connect a fitness app" note="Syncing is shown as a demo state only.">
          <p>
            <strong>Steps &amp; activity sync</strong>
            <br />
            {fitnessConnected ? "Demo connection is on" : "Connect a tracker to see your steps"}
          </p>
          <button className="button outline" onClick={() => setFitnessConnected(!fitnessConnected)}>
            {fitnessConnected ? "Disconnect" : "Connect"}
          </button>
          <p className="note">
            No fitness provider is connected. This button only changes the local demo state.
          </p>
        </Panel>
      </div>

      <Panel title="Wellness challenges" note="A few gentle ideas you can try this week.">
        {ideas.map(idea => (
          <div className="list-row" key={idea.title}>
            <span className="emoji">{idea.icon}</span>
            <div className="grow">
              <strong>{idea.title}</strong>
              <small>{idea.detail}</small>
            </div>
            <span className="tag">+{idea.points} pts</span>
            <button className="link-button" onClick={() => logWellness(idea.activity, idea.points)}>
              Log it →
            </button>
          </div>
        ))}
      </Panel>

      <Panel title="Your recent moments" note="Only visible in this browser demo.">
        {wellnessLogs.length === 0 && (
          <p className="note">Your logged wellness activities will show up here.</p>
        )}
        {wellnessLogs
          .slice()
          .reverse()
          .slice(0, 4)
          .map((log, index) => (
            <div className="list-row" key={index}>
              <span className="emoji">✔</span>
              <div className="grow">
                <strong>{log.activity}</strong>
                <small>Logged just now · +{log.points} points</small>
              </div>
            </div>
          ))}
      </Panel>
    </div>
  );
}

export default Wellness;
