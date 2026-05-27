
import React from "react";
import "../Styles/OurWork.css";
import {
  FaBookOpen,
  FaBriefcase,
  FaUsers,
  FaHeartbeat,
  FaBars,
} from "react-icons/fa";
import OurWorkStudent from "../assets/OurWork-Card.png"
import OurWorkLeader from "../assets/About-Card-Leader.png"
import OurWorkSupport from "../assets/About-Card-Health & Wellness.png"

const programs = [
  {
    icon: <FaBookOpen />,
    title: "Education & Scholarships",
    text: "We support girls and women through scholarships and educational resources to help pursue their dreams.",
    img: OurWorkStudent,
  },
  {
    icon: <FaBriefcase />,
    title: "Skill Development",
    text: "Offering vocational training, digital skills, and workshops to enhance employability and independence.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: <FaUsers />,
    title: "Leadership Programs",
    text: "We nurture leadership qualities and build confidence through mentorship, training, and peer learning.",
    img: OurWorkLeader,
  },
  {
    icon: <FaHeartbeat />,
    title: "Health & Wellness",
    text: "Promoting physical and mental well-being through health awareness and wellness initiatives.",
    img: OurWorkSupport,
  },
];

const OurWork = () => {
  return (
    <div className="ourwork-page">

      <div className="container py-5">
        <div className="text-center work-header">
          <h1>
            Our <span>Work</span>
          </h1>

          <p>
            We run impactful programs that create opportunities,
            <br />
            build skills, and empower women to lead independent and fulfilling
            lives.
          </p>
        </div>

        <div className="row g-4 mt-4">
          {programs.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="program-card">
                <div className="program-icon">{item.icon}</div>

                <h4>{item.title}</h4>

                <p>{item.text}</p>

                <img src={item.img} alt={item.title} />
              </div>
            </div>
          ))}
        </div>

        <div className="bottom-banner mt-5">
          ❤️ Together, we're building a stronger, equal, and empowered
          tomorrow.
        </div>
      </div>
    </div>
  );
};

export default OurWork;