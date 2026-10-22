// Shows who is logged in, with a log out button (top right of the page)
function UserMenu({ name, onLogout }) {
  return (
    <div className="user-menu">
      <span className="avatar">ML</span>
      <div>
        <strong>{name}</strong>
        <small>People team</small>
      </div>
      <button className="button outline small" onClick={onLogout}>
        Log out
      </button>
    </div>
  );
}

export default UserMenu;
