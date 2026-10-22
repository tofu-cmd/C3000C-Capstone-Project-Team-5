function StatCard({ icon, title, value, detail }) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <div>
        <span className="stat-title">{title}</span>
        <strong className="stat-value">{value}</strong>
        <small>{detail}</small>
      </div>
    </div>
  );
}

export default StatCard;
