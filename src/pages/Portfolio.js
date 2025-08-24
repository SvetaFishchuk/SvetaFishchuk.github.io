// src/pages/Articles.js
import { useState } from "react"
import '../App.css';

function scrollToExperience(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    element.classList.add("highlight");
    setTimeout(() => element.classList.remove("highlight"), 2000);
  }
}

// Маппинг скиллов -> проекты
const skillMap = {
  Selenium: ["web-app", "beep"],
  Cypress:["web-app"],
  Playwright:["oktet-te", "web-app", "beep"],
  Robot_Framework:["oktet-te", "web-app", "beep"],
  Appium:["oktet-te", "web-app", "beep"],
  JMeter:["oktet-te", "web-app", "beep"],
  OKTET_Labs_TE:["oktet-te", "mesh", "mptcp"],
  Applitools:["beep"],
  TestLink:["web-app"],
  Python: ["oktet-te", "web-app"],
  Bash: ["oktet-te", "mesh", "mptcp", "web-app", "beep", "murex"],
  C: ["oktet-te", "mesh", "mptcp"],
  JavaScript: ["oktet-te", "web-app", "beep"], 
  TypeScript: ["oktet-te", "web-app", "beep"],
  HTML: ["beep", "web-app"],
  CSS: ["beep", "web-app"],
  Java: ["murex", "beep", "web-app"],
  AI: ["web-app"], 
  Murex: ["murex"], 
  IoT: ["oktet-te", "mesh", "mptcp"],
};

const projects = {
  "oktet-te": {
    title: "OKTET Labs Test Environment (2015–2016)",
  },
  "web-app": {
    title: "The name and the project are under special conditions of NDA(2025 — Present)",
  },
  "beep": {
    title: "Beep Player (2023–Present)",
  },
  "murex": {
    title: "The name and the project are under special conditions of NDA(2025 — Present)",
  },
  "mesh": {
    title: "Tilgin / Seliro WiFi Mesh (2015 — 2017)",
  },
  "mptcp": {
    title: "Intel MPTCP Project (2015 — 2023)",
  },
  "teaching": {
    title: "Rostelecom — Granny Online Project (2012 — 2014)",
  }
};

function Portfolio() {

  const [activeSkills, setActiveSkills] = useState({});

  const handleSkillClick = (group, skill) => {
    setActiveSkills((prev) => ({
      ...prev,
      [group]: prev[group] === skill ? null : skill, // toggle внутри группы
    }));
  };

  const renderGroup = (groupName, skills) => (
    <div className="tech-core">
      <h3>{groupName}</h3>
      <div className="tech-badges">
        {skills.map((skill) => (
          <button key={skill} onClick={() => handleSkillClick(groupName, skill)}>
            {skill}
          </button>
        ))}
      </div>

      {activeSkills[groupName] && skillMap[activeSkills[groupName]] && (
        <div className="project-links">
          <p>
            <strong>{activeSkills[groupName]} was used in:</strong>
            <button
              onClick={() => setActiveSkills(prev => ({ ...prev, [groupName]: null }))}
              style={{
                marginLeft: "10px",
                cursor: "pointer",
                border: "none",
                background: "transparent",
                fontSize: "16px",
                lineHeight: "1",
              }}
            >
              ×
            </button>
          </p>
          <ul>
            {skillMap[activeSkills[groupName]].map((id) => (
              <li key={id}>
                <button className="link-button" onClick={() => scrollToExperience(id)}>
                  {projects[id]?.title || id}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Заголовок страницы */}
      <div className="App-content">
        <h2 className="title">Portfolio</h2>
        <p className="subtitle">
          QA Engineer with 10+ years of experience in manual and automated
           testing, covering high-performance networking, IoT, mobile, 
           web applications, fintech, and AI-driven SaaS platforms.</p>
      </div>

    <div className="page">

      <section className="page-section">
        <h2 className="section-title">Core Skills</h2>
        {renderGroup("Testing Tools", [
          "Selenium",
          "Cypress",
          "Playwright",
          "Robot_Framework",
          "Appium",
          "JMeter",
          "OKTET_Labs_TE",
          "Applitools",
          "TestLink",
        ])}

        {renderGroup("Languages", [
          "Python",
          "C",
          "JavaScript",
          "TypeScript",
          "Bash",
          "HTML",
          "CSS",
          "Java",
        ])}

        {renderGroup("Special Experience", ["AI", "Murex", "IoT"])}

      </section>

     <section className="page-section">
      <h2 className="section-title">Additional Skills</h2>
        <div className="tech-support-grid">
          <div className="tech-card">
            <h3>CI/CD</h3>
            <p>Jenkins, GitHub Actions, GitLab CI/CD, Bamboo</p>
          </div>

          <div className="tech-card">
            <h3>Issue Tracking & Collaboration</h3>
            <p>Jira, Bugzilla, ReviewBoard, Redmine, Confluence</p>
          </div>

          <div className="tech-card">
            <h3>Version Control</h3>
            <p>Git, Mercurial, SVN</p>
          </div>

          <div className="tech-card">
            <h3>Database</h3>
            <p>SQL Oracle, NoSQL DBs, Google Cloud</p>
          </div>

          <div className="tech-card">
            <h3>OS & Utilities</h3>
            <p>
              Android, Windows, Mac OS, Linux, Linux CLI, 
              Wireshark, iperf3, tcpdump, wpa_cli
            </p>
          </div>

          <div className="tech-card">
            <h3>Monitoring & Analytics</h3>
            <p>ElasticSearch</p>
          </div>

      </div>
    </section>

    {/* Образование */}
    <section className="page-section" id="education">
      <h2>Certification & Education</h2>
      {/* Murex */}
      <div className="card" id="tau">
        <h3>TAU (Test Automation University, Applitools), 2025</h3>
        <p><strong>Automation Testing Courses</strong></p>
        <ul>
          <li>API Test Automation with Postman</li>
          <li>Building Up Quality Leaders</li>
          <li>Python Programming</li>
          <li>Introduction to Playwright</li>
          <li>Tools and Techniques for Performance and Load Testing</li>
        </ul>
      </div>
      <div className="card" id="intuit">
        <h3>INTUIT (Online University), 2024</h3>
        <p><strong>Professional development courses</strong></p>
        <ul>
          <li>The Flexible Process Methodology — Agile</li>
          <li>Python — OOP and Classes</li>
        </ul>
      </div>
      <div className="card" id="oktet">
        <h3>OKTET Labs Internship (2015–2016)</h3>
        <p><strong>Full-time internship with hands-on experience
           in QA and test development</strong></p>
      </div>
      <div className="card" id="spbgk">
        <h3>Saint Petersburg State Conservatory, Russia (2008–2015)</h3>
        <p><strong>
          Master’s Degree in Piano Performance and Music Theory
        </strong></p>
      </div>
    </section>

    <section className="page-section" id="experience">
      <h2>Experience</h2>

      {/* Murex */}
      <div className="card" id="murex">
        <h3>QA Automation Engineer</h3>
        <p><strong>The name and the project are under special conditions of NDA(2025 — Present)</strong></p>
        <ul>
          <li>Maintained and reorganized test suites for <strong>Murex platform</strong> in banking domain</li>
          <li>Collaborated with devs & BAs to ensure compliance with regulations</li>
          <li><em>Achievements:</em> Restored 80% of deprecated critical tests, reintegrated into CI/CD (Jenkins, GitLab CI/CD)</li>
        </ul>
      </div>

      {/* Remote Flags */}
      <div className="card" id="web-app">
        <h3>QA Engineer</h3>
        <p><strong>The name and the project are under special conditions of NDA(Jan 2025 — Present)</strong></p>
        <ul>
          <li>Tested AI-driven SaaS platform (frontend, backend, blockchain wallet, crypto, AI chat)</li>
          <li>Performed load & concurrency testing for AI personas</li>
          <li><em>Achievements:</em> Automated 90% core scenarios (Playwright, Cypress, Postman); reduced CI runtime by 40%</li>
        </ul>
      </div>

      {/* Beep Player */}
      <div className="card" id="beep">
        <h3>QA Lead</h3>
        <p><strong>Customer Project — Beep Player (2023 — Present)</strong></p>
        <ul>
          <li>Owned QA cycle: strategy, planning, regression & release prep for Android app</li>
          <li>Performed compatibility testing across Android versions</li>
          <li><em>Achievements:</em> Built QA process from scratch, ensured 0 critical defects at Google Play launch</li>
        </ul>
      </div>

      {/* IOWRT */}
      <div className="card" id="iopsys">
        <h3>Software Engineer / SDET / Integration Engineer</h3>
        <p><strong>OKTET Labs — IOWRT (OpenWrt-based system, 2016 — 2018)</strong></p>
        <ul>
          <li>Worked directly with <strong>IOWRT</strong> codebase, contributed patches upstream</li>
          <li>Designed and automated test suites in <strong>Robot Framework</strong> and <strong>Python</strong></li>
          <li>Integrated static analysis checks into <strong>GitLab CI/CD</strong>, improving code quality gate</li>
          <li><em>Achievements:</em> Strengthened test automation coverage and improved development feedback loop with CI pipeline enhancements</li>
        </ul>
      </div>

      {/* WiFi Mesh Project */}
      <div className="card" id="wifi-mesh">
        <h3>QA Senior Engineer</h3>
        <p><strong>Tilgin / Seliro WiFi Mesh (2015 — 2017)</strong></p>
        <ul>
          <li>Developed and tested WiFi Mesh solutions (DFS, radar detection, regulatory domains)</li>
          <li>Validated high-concurrency topologies and stability</li>
          <li><em>Achievements:</em> Built comprehensive WiFi Mesh test suite, boosted reliability for HKBN launch</li>
        </ul>
      </div>

      {/* Intel MPTCP */}
      <div className="card" id="mptcp">
        <h3>QA / Integration Engineer</h3>
        <p><strong>OKTET Labs — Intel MPTCP Project</strong></p>
        <ul>
          <li>Developed automated suites for <strong>Multipath TCP</strong> technology</li>
          <li>Managed VM-based test environments, traffic shaping, and network emulation</li>
          <li><em>Achievements:</em> Reduced manual testing time by 50% with full automation</li>
        </ul>
      </div>

        {/* Oktet Labs Test Environment */}
        <div className="card" id="oktet-te">
          <h3>QA Engineer</h3>
          <p><strong>OKTET Labs Test Environment Project (Open Source, 2015 — 2016)</strong></p>
          <ul>
            <li>Extended TE features (remote serial manipulation, L2TP, OpenVPN, hostapd)</li>
            <li>Maintained open-source test frameworks and contributed patches</li>
            <li><em>Achievements:</em> Increased adoption in QA community, improved automation scalability</li>
          </ul>
        </div>

        {/* Teaching / Granny Online */}
        <div className="card" id="teaching">
          <h3>Trainer</h3>
          <p><strong>Rostelecom — Granny Online Project (2012 — 2014)</strong></p>
          <ul>
            <li>Taught computer literacy to senior citizens</li>
            <li>Developed training materials and one-on-one sessions</li>
          </ul>
        </div>
      </section>

      {/* Контакты */}
      <section className="page-section hero">
        <h2>Let’s Work Together</h2>
        <p>Phone: +351910638149</p>
        <p>Email: fishchuksveta@hotmail.com</p>
        <p>LinkedIn: www.linkedin.com/in/sveta-fishchuk</p>
        <p>Porto, Portugal.</p>
        <a className="btn" href="mailto:svetlana@example.com">Contact Me</a>
      </section>

    </div>
    </>
  );
}

export default Portfolio;
