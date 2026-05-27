
import React, { useState } from "react";
import "../Styles/Contact.css";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaGlobe,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPaperPlane,
  FaBars,
} from "react-icons/fa";

const ContactPage = () => {
  const [data,setData] = useState({
    name:"",
    email:"",
    subject:"",
    message:""
})

const handleSubmit = (e) =>{
  e.preventDefault();
  alert(data);
  setData({
     name:"",
    email:"",
    subject:"",
    message:""
})
}

const handleChange = (e) =>{
  const {name,value} = e.target;
 setData((pre)=>({...pre,[name]:value}))
}
  return (
    <div className="contact-page">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-4 contact-left">
            <h1>
              Contact <span>Us</span>
            </h1>

            <p>
              We'd love to hear from you!
              <br />
              Reach out to collaborate,
              <br />
              volunteer, or support our mission.
            </p>

            <div className="contact-info">
              <div className="info-item">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h5>Address</h5>
                  <span>
                    She Can Foundation
                    <br />
                    Bangalore, Karnataka, India
                  </span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaEnvelope />
                </div>

                <div>
                  <h5>Email</h5>
                  <span>info@shecanfoundation.org</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h5>Phone</h5>
                  <span>+91 70926 23456</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaGlobe />
                </div>

                <div>
                  <h5>Website</h5>
                  <span>www.shecanfoundation.org</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="contact-form-box">
              <h3>Send Us a Message</h3>

              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Name" value={data.name} onChange={handleChange} name="name"/>
                <input type="email" placeholder="Your Email" value={data.email} onChange={handleChange} name="email"/>
                <input type="text" placeholder="Subject" value={data.subject} onChange={handleChange} name="subject"/>

                <textarea rows="5" placeholder="Message" value={data.message} onChange={handleChange} name="message"></textarea>

                <button type="submit" className="send-btn">
                  <FaPaperPlane /> Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-3 text-center position-relative">
            <div className="mail-box">
              <div className="mail-top"></div>
              <div className="mail-body"></div>
            </div>

            <div className="leaf-design"></div>
            <div className="dots"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;