import { useState } from "react";
import Panel from "../components/Panel.jsx";
import { courses, quizOptions } from "../data.js";

function Learning({ doneCourses, completeCourse, quizDone, finishQuiz }) {
  const [answer, setAnswer] = useState("");
  const [quizMessage, setQuizMessage] = useState("");

  function submitQuiz() {
    const correct = answer === "listen";
    finishQuiz(correct);
    if (correct) {
      setQuizMessage("That's right! You earned 30 points and a skill badge.");
    } else {
      setQuizMessage(
        "Thanks for taking part! You earned 30 points. Have another look at the answer next time."
      );
    }
  }

  return (
    <div className="stack">
      <div className="banner">
        <span className="emoji">📖</span>
        <div className="grow">
          <small>YOUR LEARNING PATH</small>
          <strong>Curiosity is a skill, too.</strong>
          <small>Choose a short module and keep building at your own pace.</small>
        </div>
        <div>
          <small>Current level</small>
          <strong>Level 2</strong>
        </div>
      </div>

      <div className="row-between">
        <h2>Pick up a new skill</h2>
        <span className="tag">
          {doneCourses.length} of {courses.length} complete
        </span>
      </div>
      <div className="grid-3">
        {courses.map(course => {
          const done = doneCourses.includes(course.id);
          return (
            <article className="card" key={course.id}>
              <small>{course.detail}</small>
              <h3>{course.title}</h3>
              <p>
                Earn the <strong>{course.badge}</strong> badge and {course.points} points when you finish.
              </p>
              <button className="button" disabled={done} onClick={() => completeCourse(course)}>
                {done ? "✔ Completed" : "Mark module complete"}
              </button>
            </article>
          );
        })}
      </div>

      <Panel title="Quick knowledge check" note="Take part for points. A correct answer unlocks a skill badge.">
        <strong>What helps feedback feel useful and supportive?</strong>
        {quizOptions.map(option => (
          <label className="option" key={option.id}>
            <input
              type="radio"
              name="quiz"
              checked={answer === option.id}
              onChange={() => setAnswer(option.id)}
              disabled={quizDone}
            />
            {option.text}
          </label>
        ))}
        <button className="button" disabled={quizDone || answer === ""} onClick={submitQuiz}>
          {quizDone ? "✔ Quiz complete" : "Submit answer"}
        </button>
        {quizMessage && <p className="success">{quizMessage}</p>}
      </Panel>
    </div>
  );
}

export default Learning;
