import React from "react";
import "../Styles/Home.css";
import logo from "../assets/Home-right-img.png"

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-left">
          <h1>
            Empowering <br />
            <span>Women,</span> <br />
            Inspiring Change.
          </h1>

          <p>
            She Can Foundation is dedicated to uplifting women through
            education, mentorship, and opportunities that inspire growth,
            confidence, and leadership.
          </p>

          <button>❤ Join Our Mission</button>
        </div>

        <div className="hero-right">
          <img
            src={logo}
            alt="women"
          />
        </div>
      </section>

      <section className="about">
        <div className="about-card">
          <div className="icon">♡</div>

          <div>
            <h2>
              About <span>Us</span>
            </h2>

            <p>
              At She Can Foundation, we believe every woman deserves the chance
              to dream big and achieve more. Our mission is to create a
              supportive community where women can access education, build
              skills, and unlock their true potential.
            </p>
          </div>
        </div>

        <div className="quote">
          “ Empowered women empower the world. ”
        </div>
      </section>
    </div>
  );
};

export default Home;
