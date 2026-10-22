// A white card with a title. Whatever we put between <Panel> tags is "children".
function Panel({ title, note, children }) {
  return (
    <section className="panel">
      <h2>{title}</h2>
      {note && <p className="note">{note}</p>}
      {children}
    </section>
  );
}

export default Panel;
