import logo from './logo.svg';
import './style.css';
import './mediaqueries.css'

function App() {
  return (
    <>
    <nav id="desktop-nav">
      <div className="logo">sri harshavardhan reddy</div>
      <div>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    <nav id="hamburger-nav">
      <div className="logo">sri harshavardhan</div>
      <div className="hamburger-menu">
        <div className="hamburger-icon" >
          <span />
          <span />
          <span />
        </div>
        <div className="menu-links">
          <li>
            <a href="#about" >
              About
            </a>
          </li>
          <li>
            <a href="#experience" >
              Experience
            </a>
          </li>
          <li>
            <a href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact">
              Contact
            </a>
          </li>
        </div>
      </div>
    </nav>
    <section id="profile">
      <div className="section__pic-container">
        <img style={{ borderRadius: "50%" }} src="./assets/1.jpg" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">sri harshavardhan</h1>
        <p className="section__text__p2">java fullstack Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onclick="window.open('https://drive.google.com/file/d/11Zz13_vUF4ngH02T81zdwqxtm1tEiGWr/view?usp=drivesdk')"
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onclick="location.href='mailto:somuharshavardhan2962@gmail.com'"
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src="./assets/linkedin.png"
            alt="My LinkedIn profile"
            className="icon"
            onclick="location.href='https://www.linkedin.com/in/somu-sri-harshavardhan-reddy-687960231/'"
          />
          <img
            src="./assets/github.png"
            alt="My Github profile"
            className="icon"
            onclick="location.href='https://github.com/dashboard'"
          />
        </div>
      </div>
    </section>
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src="./assets/2.jpg" alt="Profile picture" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src="./assets/experience.png"
                alt="Experience icon"
                className="icon"
              />
              <h3>Fresher</h3>
              <p>
                {" "}
                <br />
                java fullstack Development
              </p>
            </div>
            <div className="details-container">
              <img
                src="./assets/education.png"
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>betech in computer science engrinnering</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Recent computer science graduate with a solid foundation in Java,
              Spring Boot, and front-end technologies like HTML, CSS, and
              JavaScript. Seeking an opportunity as a Java Full-Stack Developer to
              apply my skills in developing dynamic web applications and
              contribute to innovative projects while continuously growing in a
              collaborative environment
            </p>
          </div>
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onclick="location.href='./#experience'"
      />
    </section>
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">skills</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>react</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>JavaScript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>bootstramp</h3>
                  <p>Basic</p>
                </div>
              </article>
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">backend </h2>
            <div className="article-container">
              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>SQL</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>java</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>advance java</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Git</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onclick="location.href='./#projects'"
      />
    </section>
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img
                style={{ height: 300 }}
                src=".\assets\download.jpeg"
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Netfix Clone </h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                style={{ height: 300 }}
                src="./assets/Powerful-Charts-in-Mobile-Apps-header.jpg"
                alt="Project 2"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">
              chart app application
            </h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/somu126/final-year-project'"
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onclick="location.href='https://final-year-project-eight-vert.vercel.app/'"
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="./assets/project-3.png"
                alt="Project 3"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project Three</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onclick="location.href='./#contact'"
      />
    </section>
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src="./assets/email.png"
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:somuharshavardhan2962@gmail.com">
              somuharshavardhan2962@gmail.com
            </a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src="./assets/linkedin.png"
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p>
            <a href="https://www.linkedin.com/in/somu-sri-harshavardhan-reddy-687960231/">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <p>Copyright © 2024 harsha. All Rights Reserved.</p>
    </footer>
  </>
  );
}

export default App;
