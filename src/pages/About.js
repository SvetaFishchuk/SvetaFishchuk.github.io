import '../App.css';

function About() {
  return (
    <div className="App-content">
      <h2>About Me</h2>
        <p>
          Hi, I’m <strong>Svetlana</strong> — a QA specialist passionate about building reliable and user-friendly software.
        </p>
        <p>
          This website started as a simple business card, but grew into a small knowledge hub where I share:
        </p>
        <ul style={{ textAlign: "left", display: "inline-block" }}>
          <li>Articles and insights on software testing</li>
          <li>Curated resources for QA engineers</li>
          <li>Practical tips especially useful for beginners</li>
        </ul>
        <p>
          I believe that quality comes from attention to detail, care for users, and the confidence that every feature works as intended. 
          If you value these principles — welcome, you’re in the right place!
        </p>    
    </div>
  );
}

export default About;

