import { useState } from "react";
import Panel from "../components/Panel.jsx";
import { pollOptions } from "../data.js";

function HrHub({ pollAnswer, answerPoll }) {
  const [leaveType, setLeaveType] = useState("Annual leave");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [leaveMessage, setLeaveMessage] = useState("");
  const [choice, setChoice] = useState("");

  function submitLeave(event) {
    event.preventDefault();
    if (startDate === "" || endDate === "") {
      setLeaveMessage("Choose both dates to prepare your demo request.");
      return;
    }
    setLeaveMessage("Your sample request is ready. Nothing was sent to HR.");
  }

  return (
    <div className="stack">
      <p className="note">
        HR services below are examples. This demo does not connect to payroll, benefits, or a real leave system.
      </p>

      <div className="grid-2">
        <Panel title="Request some time away" note="A simple leave request example.">
          <form className="form" onSubmit={submitLeave}>
            <label>
              Type of leave
              <select value={leaveType} onChange={event => setLeaveType(event.target.value)}>
                <option>Annual leave</option>
                <option>Personal day</option>
                <option>Wellbeing day</option>
              </select>
            </label>
            <label>
              Start date
              <input type="date" value={startDate} onChange={event => setStartDate(event.target.value)} />
            </label>
            <label>
              End date
              <input type="date" value={endDate} onChange={event => setEndDate(event.target.value)} />
            </label>
            <button className="button" type="submit">📅 Prepare request</button>
            {leaveMessage && <p className="success">{leaveMessage}</p>}
          </form>
        </Panel>

        <Panel title="Your benefits" note="Quick links for this sample workspace.">
          <div className="list-row">
            <span className="emoji">❤️</span>
            <div className="grow">
              <strong>Health &amp; wellbeing</strong>
              <small>Explore support and resources</small>
            </div>
            <button
              className="small-button"
              onClick={() => alert("Benefits information is sample content for this demo.")}
            >
              →
            </button>
          </div>
          <div className="list-row">
            <span className="emoji">🎁</span>
            <div className="grow">
              <strong>Team perks</strong>
              <small>See your example benefits</small>
            </div>
            <button
              className="small-button"
              onClick={() => alert("Perks information is sample content for this demo.")}
            >
              →
            </button>
          </div>
        </Panel>
      </div>

      <Panel title="Payslip documents" note="Sample links only — no real payroll documents are stored here.">
        {["September", "August"].map(month => (
          <div className="list-row" key={month}>
            <span className="emoji">📄</span>
            <div className="grow">
              <strong>{month} payslip</strong>
              <small>Example document · 2 pages</small>
            </div>
            <button
              className="button outline small"
              onClick={() => alert("This sample payslip is not a real document.")}
            >
              View sample
            </button>
          </div>
        ))}
      </Panel>

      <Panel title="Your voice matters" note="Answer this quick pulse poll to earn 25 demo points.">
        {pollAnswer !== "" ? (
          <p className="success">
            ✔ Thanks for sharing your view. Your response — “{pollAnswer}” — was saved and 25 points were added.
          </p>
        ) : (
          <div>
            <strong>What would help you feel more supported at work this month?</strong>
            {pollOptions.map(option => (
              <label className="option" key={option}>
                <input
                  type="radio"
                  name="poll"
                  checked={choice === option}
                  onChange={() => setChoice(option)}
                />
                {option}
              </label>
            ))}
            <button className="button" disabled={choice === ""} onClick={() => answerPoll(choice)}>
              Send my response · +25 pts
            </button>
          </div>
        )}
      </Panel>
    </div>
  );
}

export default HrHub;
