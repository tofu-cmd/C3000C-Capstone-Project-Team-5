import { useState } from "react";
import Panel from "../components/Panel.jsx";
import StatCard from "../components/StatCard.jsx";
import { engagementByMonth } from "../data.js";

// Builds a CSV text file from sample numbers and downloads it
function downloadReport(period) {
  const rows = [
    ["Metric", "Value", "Period"],
    ["Challenge participation", "74%", period],
    ["Learning modules completed", "128", period],
    ["Productivity goal milestones", "56", period],
    ["Wellness activities logged", "96", period],
    ["Rewards redeemed", "42", period],
    ["Feedback pulse", "82% positive", period],
  ];
  const csv = rows.map(row => row.join(",")).join("\n");

  const file = new Blob([csv], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(file);
  link.download = "bloom-sample-engagement-report.csv";
  link.click();
}

function Insights() {
  const [period, setPeriod] = useState("Last 30 days");

  return (
    <div className="stack">
      <p className="note">
        Sample dashboard — these numbers are fictional examples, not live employee data or real predictions.
      </p>

      <div className="grid-3">
        <StatCard icon="📈" title="Engagement pulse" value="82%" detail="+6 points from last month" />
        <StatCard icon="📖" title="Learning activity" value="74%" detail="Taking part this month" />
        <StatCard icon="🤝" title="Team connection" value="88%" detail="Sample survey response" />
      </div>

      <div className="grid-2">
        <Panel title="Engagement over time" note="Sample participation score, out of 100.">
          <div className="bar-chart">
            {engagementByMonth.map(item => (
              <div className="week-column" key={item.label}>
                <span>{item.value}</span>
                <div className="bar-track">
                  <div className="week-bar highlight" style={{ height: item.value + "%" }}></div>
                </div>
                <small>{item.label}</small>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Team wellbeing signals" note="Illustrative indicators, not predictions.">
          <div className="list-row">
            <span className="emoji">💚</span>
            <div className="grow">
              <strong>Satisfaction pulse</strong>
              <small>Sample survey result</small>
            </div>
            <strong>4.2 / 5</strong>
          </div>
          <div className="list-row">
            <span className="emoji">🏆</span>
            <div className="grow">
              <strong>Performance goal progress</strong>
              <small>Sample team snapshot</small>
            </div>
            <strong>78%</strong>
          </div>
          <div className="list-row">
            <span className="emoji">👥</span>
            <div className="grow">
              <strong>Turnover-risk indicator</strong>
              <small>Demo estimate only</small>
            </div>
            <span className="tag">Low · sample</span>
          </div>
          <p className="note">This demo cannot assess an individual employee or forecast real outcomes.</p>
        </Panel>
      </div>

      <Panel title="Custom report" note="Choose a period and download a sample report for HR managers.">
        <div className="form">
          <label>
            Reporting period
            <select value={period} onChange={event => setPeriod(event.target.value)}>
              <option>Last 30 days</option>
              <option>Last quarter</option>
              <option>Year to date</option>
            </select>
          </label>
          <button className="button" onClick={() => downloadReport(period)}>
            ⬇ Download sample CSV
          </button>
          <small>The CSV contains the same sample metrics shown here, not real employee records.</small>
        </div>
      </Panel>
    </div>
  );
}

export default Insights;
