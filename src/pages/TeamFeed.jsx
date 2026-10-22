import { useState } from "react";
import Panel from "../components/Panel.jsx";
import { getInitials } from "../data.js";

function TeamFeed({ posts, setPosts }) {
  const [newPost, setNewPost] = useState("");
  // One comment box per post, so we store the text by post id: { 1: "hi", 2: "" }
  const [commentText, setCommentText] = useState({});
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatText, setChatText] = useState("");

  function addPost(event) {
    event.preventDefault();
    if (newPost.trim() === "") return;
    const post = {
      id: Date.now(),
      author: "Maya Lewis",
      role: "People team",
      time: "Just now",
      text: newPost.trim(),
      likes: 0,
      liked: false,
      comments: [],
    };
    setPosts([...posts, post]);
    setNewPost("");
  }

  function toggleLike(id) {
    setPosts(posts.map(post => (post.id === id ? { ...post, liked: !post.liked } : post)));
  }

  function addComment(event, id) {
    event.preventDefault();
    const text = commentText[id] || "";
    if (text.trim() === "") return;
    setPosts(
      posts.map(post =>
        post.id === id ? { ...post, comments: [...post.comments, text.trim()] } : post
      )
    );
    setCommentText({ ...commentText, [id]: "" });
  }

  function sendChat(event) {
    event.preventDefault();
    if (chatText.trim() === "") return;
    setChatMessages([...chatMessages, "Maya Lewis: " + chatText.trim()]);
    setChatText("");
  }

  return (
    <div className="two-columns">
      <div className="stack">
        <Panel title="Share a small win" note="Celebrate milestones, thank a teammate, or share a bright spot.">
          <form className="form" onSubmit={addPost}>
            <textarea
              value={newPost}
              onChange={event => setNewPost(event.target.value)}
              placeholder="What's something good you'd like to share?"
              rows={2}
              maxLength={240}
            />
            <button className="button" type="submit">Share</button>
          </form>
        </Panel>

        <h2>From around the team</h2>
        {posts
          .slice()
          .reverse()
          .map(post => (
            <article className="card" key={post.id}>
              <div className="list-row">
                <span className="avatar">{getInitials(post.author)}</span>
                <div className="grow">
                  <strong>{post.author}</strong>
                  <small>{post.role} · {post.time}</small>
                </div>
              </div>
              <p>{post.text}</p>
              <div className="row-between">
                <button
                  className={post.liked ? "pill selected" : "pill"}
                  onClick={() => toggleLike(post.id)}
                >
                  👍 {post.likes + (post.liked ? 1 : 0)} celebrate
                </button>
                <small>💬 {post.comments.length} comments</small>
              </div>
              {post.comments.map((comment, index) => (
                <p className="comment" key={index}>
                  <strong>Maya Lewis</strong> {comment}
                </p>
              ))}
              <form className="inline-form" onSubmit={event => addComment(event, post.id)}>
                <input
                  value={commentText[post.id] || ""}
                  onChange={event => setCommentText({ ...commentText, [post.id]: event.target.value })}
                  placeholder="Write a kind comment..."
                  maxLength={120}
                />
                <button className="button small" type="submit">Send</button>
              </form>
            </article>
          ))}
      </div>

      <div className="stack">
        <Panel title="Team corner" note="A place to stay in the loop.">
          <div className="list-row">
            <span className="emoji">👥</span>
            <div className="grow">
              <strong>Design &amp; build forum</strong>
              <small>8 new notes this week</small>
            </div>
          </div>
          <div className="list-row">
            <span className="emoji">💬</span>
            <div className="grow">
              <strong>People team chat</strong>
              <small>Say hello to your colleagues</small>
            </div>
          </div>
          <button className="button outline" onClick={() => setChatOpen(!chatOpen)}>
            {chatOpen ? "Close team space" : "Open team space"}
          </button>
          {chatOpen && (
            <div className="chat">
              {chatMessages.length === 0 && <p className="note">No notes yet. Start the conversation.</p>}
              {chatMessages.map((message, index) => (
                <p key={index}>{message}</p>
              ))}
              <form className="inline-form" onSubmit={sendChat}>
                <input
                  value={chatText}
                  onChange={event => setChatText(event.target.value)}
                  placeholder="Write a team note..."
                  maxLength={140}
                />
                <button className="button small" type="submit">Send</button>
              </form>
            </div>
          )}
        </Panel>

        <Panel title="Kindness corner" note="A little note to carry into the week.">
          <blockquote>
            “People may forget what you said, but they'll remember how you made them feel.”
            <br />— Maya Angelou
          </blockquote>
        </Panel>
        <p className="note">Posts and comments stay in this demo and reset when you refresh.</p>
      </div>
    </div>
  );
}

export default TeamFeed;
