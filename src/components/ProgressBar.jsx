// value is a number from 0 to 100
function ProgressBar({ value }) {
  const width = Math.max(0, Math.min(value, 100));
  return (
    <div className="progress-track">
      <div className="progress-fill" style={{ width: width + "%" }}></div>
    </div>
  );
}

export default ProgressBar;
