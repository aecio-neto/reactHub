import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import jonas from "./jonas.jpeg";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <main>
      <img className="avatar " src={jonas} alt="jonas" />
    </main>
  );
}

function Intro() {
  return (
    <>
      <h1>Jonas Schmedtmann</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill bgColor="red" text="React" />
      <Skill bgColor="green" text="HTML + CSS" />
      <Skill bgColor="blue" text="Javascript" emoji="👍" />
      <Skill bgColor="yellow" text="Svelte" emoji="💪" />
    </div>
  );
}

function Skill(props) {
  return (
    <p className="skill" style={{ backgroundColor: props.bgColor }}>
      {props.text}
      <span>{props.emoji}</span>
    </p>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
