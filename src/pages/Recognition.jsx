import { useState } from "react";
import Panel from "../components/Panel.jsx";
import { rewards } from "../data.js";

function Recognition({ points, kudos, sendKudos, redeemReward }) {
  const [person, setPerson] = useState("Jordan Lee");
  const [note, setNote] = useState("");
  const [kudosMessage, setKudosMessage] = useState("");
  const [rewardMessage, setRewardMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault(); // stop the page from reloading
    if (note.trim() === "") return;
    sendKudos(person, note.trim());
    setKudosMessage("A little kudos is on its way to " + person + ".");
    setNote("");
  }

  function handleRedeem(reward) {
    const worked = redeemReward(reward.points);
    if (worked) {
      setRewardMessage(reward.title + " is yours. Enjoy!");
    } else {
      setRewardMessage("You need a few more points for this reward.");
    }
  }

  return (
    <div className="stack">
      <div className="grid-2">
        <Panel title="Send a little kudos" note="A specific thank-you can make someone's day.">
          <form className="form" onSubmit={handleSubmit}>
            <label>
              Who would you like to celebrate?
              <select value={person} onChange={event => setPerson(event.target.value)}>
                <option>Jordan Lee</option>
                <option>Priya Shah</option>
                <option>Avery Chen</option>
                <option>Nina Patel</option>
              </select>
            </label>
            <label>
              Your message
              <textarea
                value={note}
                onChange={event => setNote(event.target.value)}
                placeholder="Tell them what you appreciated..."
                rows={3}
                maxLength={180}
              />
            </label>
            <button className="button" type="submit">🤝 Send kudos</button>
            <small>They'll receive 25 demo points</small>
            {kudosMessage && <p className="success">✔ {kudosMessage}</p>}
          </form>
        </Panel>

        <Panel title="In the spotlight" note="A few people making a difference this week.">
          <div className="list-row">
            <span className="avatar">JL</span>
            <div className="grow">
              <strong>Jordan Lee</strong>
              <small>People team · 7 thoughtful kudos</small>
            </div>
            <span>✨</span>
          </div>
          <blockquote>
            “Jordan makes the new-starter experience feel like a real welcome.”
          </blockquote>
          <span className="tag">People-first moment</span>
        </Panel>
      </div>

      <Panel title="A few recent thank-yous" note="Kind words from around the team.">
        {kudos.length === 0 && <p className="note">Your sent kudos will appear here.</p>}
        {kudos
          .slice()
          .reverse()
          .map(item => (
            <div className="list-row" key={item.id}>
              <span className="emoji">❤️</span>
              <div className="grow">
                <strong>{item.from} celebrated {item.to}</strong>
                <small>“{item.note}” · {item.to} received 25 demo points</small>
              </div>
            </div>
          ))}
        <div className="list-row">
          <span className="emoji">⭐</span>
          <div className="grow">
            <strong>Priya celebrated Alex</strong>
            <small>“Thanks for making space for everyone in the brainstorm.”</small>
          </div>
        </div>
      </Panel>

      <div className="row-between">
        <h2>Rewards you can choose</h2>
        <span className="tag">{points.toLocaleString()} points available</span>
      </div>
      <div className="grid-4">
        {rewards.map(reward => (
          <article className="card" key={reward.id}>
            <span className="emoji">{reward.icon}</span>
            <h3>{reward.title}</h3>
            <p>{reward.detail}</p>
            <div className="row-between">
              <strong>{reward.points} pts</strong>
              <button className="button outline" onClick={() => handleRedeem(reward)}>
                Redeem
              </button>
            </div>
          </article>
        ))}
      </div>
      {rewardMessage && <p className="success">{rewardMessage}</p>}
      <p className="note">
        Rewards are examples for this demo; redemptions are not sent to a real HR or payroll system.
      </p>
    </div>
  );
}

export default Recognition;
