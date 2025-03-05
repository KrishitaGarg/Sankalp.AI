import React from "react";
import "./landingPage.css";
import Footer from "./footer"; // Adjust the path if needed

const LandingPage = () => {
  return (
    <div>
      <div className="background">
        {/* Navbar */}
        <nav className="navbar">
          <h1>SANKALP.AI</h1>
          <div className="nav-buttons">
            <button className="button-header white">Sign In</button>
            <button className="button-header black">Register</button>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="hero">
          <h2>Turning Aspirations into Skills, and</h2>
          <h2> Skills into Success!</h2>
          <p>
            Personalized skill assessments, AI-driven learning, and gamified
            experiences for students.
          </p>
          <button className="white button-content">Get Started</button>
        </header>

        {/* Features Section */}
        <section className="features">
          <div className="feature-box">
            <h3>Personalized Career Guidance</h3>
            <p>
              Our platform’s AI-powered career path exploration tool recommends
              optimal career paths based on your current skills, interests, and
              the latest job market trends. This will help you identify the most
              promising career opportunities aligned with your aspirations.
            </p>
          </div>
          <div className="feature-box">
            <h3>Gamified Engagement</h3>
            <p>
              We know that traditional learning methods can be disengaging. Our
              gamified approach will keep you excited and motivated,
              transforming learning into a more enjoyable experience. This will
              enhance retention and make your learning process feel less like a
              chore.
            </p>
          </div>
          <div className="feature-box">
            <h3>Job Market Alignment</h3>
            <p>
              Our solution incorporates real-time job alerts and market-driven
              course recommendations. You will be notified of job openings and
              emerging skill trends, ensuring you are always equipped with the
              most relevant qualifications for the job market.
            </p>
          </div>
        </section>
      </div>

      <div className="content">
        {/* GyanSetu Section */}
        <section className="gyan-setu">
          <h1 className="section-2-header">Unlock your Future with Us</h1>
          <div className="content-gyan-setu">
            <p>Discover Your Perfect Career Path</p>

            <h2>GyanSetu</h2>
            <p>
              Our smart Career Path Exploration Tool helps you unlock exciting
              career opportunities tailored to your unique skills and interests.
              By analyzing the current job market trends, we'll recommend the
              most promising career paths that match your profile.
              <br />
              <ul>
                <li>Assess your skills and interests</li>
                <li>Receive personalized career recommendations</li>
              </ul>
            </p>

            <button className="button-content">Explore Now</button>
          </div>
        </section>

        {/* Yukti Section */}
        <section className="yukti">
          <div className="content-yukti">
            <p>Your Personalized Learning Hub</p>
            <h2>Yukti</h2>
            <p>
              Welcome to your Dynamic Personalized Dashboard, designed to help
              you stay on top of your learning journey. With all your key
              information right at your fingertips, you’ll have the tools to
              track progress, improve skills, and reach your career goals faster
              than ever before.
              <br />
              <ul>
                <li>Personalized Skill Profile Progress Tracker</li>
                <li>Interactive Learning Path Timelines</li>
                <li>Real-Time Notifications & Job Alerts</li>
                <li>Pop-ups for Areas of Improvement</li>
              </ul>
            </p>
            <button className="button-content">Explore Now</button>
          </div>
        </section>

        {/* Khel Khel Mein Section */}
        <section className="khel-khel-mein">
          <div className="content-khel-khel-mein">
            <p>Level Up Your Learning</p>

            <h2>Khel Khel Mein</h2>
            <p>
              We’re transforming learning into an exciting adventure with our
              Gamified Learning Experience! Say goodbye to boring lessons and
              hello to fun, interactive games that boost your skills while
              keeping you motivated.
              <br />
              <br />
              <ul>
                <li>Scrabble: Build words related to your field of study</li>
                <li>Hangman: Guess the right terms from your course</li>
                <li>
                  Treasure Hunt: Solve quizzes and challenges to navigate an
                  interactive map
                </li>
                <li>Snakes and Ladders: A fun twist on the classic game!</li>
              </ul>
            </p>

            <button className="button-content">Let's Dive In</button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
