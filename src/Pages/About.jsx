import React from "react";
import "../Styles/About.css";
import {
  FaBullseye,
  FaEye,
  FaUsers,
  FaBars,
} from "react-icons/fa";
import AboutRightImg from "../assets/About-right-imf.png"

const AboutSection = () => {
  return (
    <div className="about-page">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-5 text-content">
            <h5 className="sub-title">About Us</h5>

            <h1 className="main-title">
              Empowering Women,
              <br />
              <span>Transforming</span> Lives
            </h1>

            <p>
              She Can Foundation is a non-profit organization committed to
              empowering women and girls by providing access to education,
              skill development, mentorship, and leadership opportunities.
            </p>

            <p>
              We envision a world where every woman is confident, independent,
              and able to realize her full potential.
            </p>
          </div>

          <div className="col-lg-7 text-center position-relative">
            <div className="image-bg"></div>

            <img
              src={AboutRightImg}
              alt="women"
              className="main-image img-fluid"
            />

            <div className="dots"></div>
          </div>
        </div>

        <div className="row mt-5 g-4">
          <div className="col-md-4">
            <div className="info-card">
              <div className="icon-box">
                <FaBullseye />
              </div>

              <h4>Our Mission</h4>

              <p>
                To create a supportive ecosystem that inspires women to dream
                big, build skills, and become leaders of change.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="info-card">
              <div className="icon-box">
                <FaEye />
              </div>

              <h4>Our Vision</h4>

              <p>
                A world where every woman has equal opportunities to learn,
                lead, and live a dignified life.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="info-card">
              <div className="icon-box">
                <FaUsers />
              </div>

              <h4>Our Values</h4>

              <p>
                Empathy, integrity, inclusion, empowerment, and collaboration
                are at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;